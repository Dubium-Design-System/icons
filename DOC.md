# Icon Library Architecture

## 1. Цель

Библиотека рассчитана примерно на **4000+ SVG-иконок** и должна эффективно работать в двух разных сценариях:

1. **SPA + Vite**
2. **SSR / RSC / Next.js / Vite SSR**

Эти сценарии имеют разные требования к bundling, поэтому не должны искусственно использовать одинаковый механизм загрузки иконок.

Главный принцип:

> SPA + Vite использует compile-time registry.
> SSR / RSC использует прямые импорты компонентов иконок и не имеет registry.

---

# 2. Основные правила

## SPA + Vite

SPA API использует строковые имена:

```tsx
<Icon name="Plus" />
```

Vite plugin анализирует использование `Icon` во время сборки и генерирует минимальный registry только для реально используемых иконок.

Пример:

```tsx
<Icon name="Plus" />
<Icon name="Download" />
```

Compile-time registry должен содержать только:

```ts
{
	Plus: () => import(...),
	Download: () => import(...),
}
```

а не все ~4000 иконок.

---

## SSR / RSC

SSR API **не использует registry**.

Запрещено создавать:

```ts
{
	Plus: () => import(...),
	Download: () => import(...),
	// ~4000 icons
}
```

в SSR entry graph.

Вместо этого конкретная иконка импортируется напрямую:

```tsx
import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

;<Icon name={PlusIcon} />
```

`name` в SSR содержит не строку, а ссылку на React-компонент иконки.

---

# 3. SPA API

Основной API:

```tsx
import { Icon } from "@dubium/icons/spa"

;<Icon name="Plus" size={24} />
```

Тип `name` выводится из export-имён коллекции на уровне TypeScript.

Например:

```ts
type TIconName = "Plus" | "Download" | "Upload" | "Search"
```

## Compile-time registry

SPA registry создаётся Vite plugin.

Исходный код:

```tsx
<Icon name="Plus" />
```

После анализа Vite plugin знает, что приложению нужна `Plus`.

Registry приложения содержит loader:

```ts
{
	Plus: () => import("@dubium/icons/icons/Plus")
}
```

Это позволяет:

- не включать registry всех ~4000 иконок;
- использовать code splitting;
- lazy-load SVG components;
- сохранять удобный строковый API;
- поддерживать dynamic names через explicit `include`.

---

# 4. Dynamic SPA icons

Статический случай:

```tsx
<Icon name="Plus" />
```

определяется plugin автоматически.

Динамический случай:

```tsx
<Icon name={iconName} />
```

невозможно полностью определить compile-time.

Такие иконки должны быть явно перечислены через конфигурацию plugin:

```ts
dubiumIcons({
	include: ["Plus", "Download", "Upload"],
})
```

Нельзя автоматически включать все ~4000 иконок только потому, что приложение использует dynamic `name`.

---

# 5. SSR API

SSR API выглядит так:

```tsx
import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

;<Icon name={PlusIcon} size={24} />
```

Здесь:

```ts
name
```

имеет тип React-компонента иконки, а не:

```ts
string
```

---

# 6. SSR Icon является IconContainer

`Icon` — это публичная абстракция контейнера иконки.

Пользователь не должен писать:

```tsx
<Icon>
	<PlusIcon />
</Icon>
```

Публичный API:

```tsx
<Icon name={PlusIcon} />
```

Внутренне:

```tsx
<IconContainer>
	<PlusIcon />
</IconContainer>
```

То есть:

```text
<Icon name={PlusIcon} />
          │
          ▼
       <Icon>
          │
          ▼
   <IconContainer>
          │
          ▼
      <PlusIcon />
          │
          ▼
        <svg>
```

---

# 7. Разделение props

Нельзя бездумно передавать одни и те же props одновременно контейнеру и SVG:

```tsx
// НЕ ДЕЛАТЬ

<IconContainer {...props}>
	<IconComponent {...props} />
</IconContainer>
```

Props должны быть разделены по ответственности.

## Container props

На контейнер передаются:

```ts
ariaLabel
deg
height
size
style
width
```

Например:

```tsx
<IconContainer ariaLabel={ariaLabel} deg={deg} height={height} size={size} style={style} width={width}>
	...
</IconContainer>
```

## SVG props

На SVG component передаются SVG-specific значения:

```ts
color
secondaryColor
```

и необходимые accessibility attributes:

```tsx
<IconComponent aria-hidden="true" color={color} focusable="false" secondaryColor={secondaryColor} />
```

---

# 8. SSR Icon implementation

Целевая модель:

```tsx
export const Icon = ({
	ariaLabel,
	color = "var(--icon-color, currentColor)",
	deg = 0,
	height,
	name: IconComponent,
	secondaryColor = "var(--icon-secondary-color, currentColor)",
	size = 24,
	style,
	width,
}: IconProps) => (
	<IconContainer ariaLabel={ariaLabel} deg={deg} height={height} size={size} style={style} width={width}>
		<IconComponent aria-hidden="true" color={color} focusable="false" secondaryColor={secondaryColor} />
	</IconContainer>
)
```

`Icon` должен оставаться:

- синхронным;
- без hooks;
- без Context;
- без dynamic imports;
- без registry;
- без browser-only API;
- без `"use client"`.

---

# 9. SSR types

Базовый тип generated icon component:

```ts
import type { ComponentType, SVGProps } from "react"

export interface IIconComponentProps extends SVGProps<SVGSVGElement> {
	color?: string
	secondaryColor?: string
}

export type TIconComponent = ComponentType<IIconComponentProps>
```

SSR props:

```ts
export interface IconProps {
	ariaLabel?: string
	color?: string
	deg?: number
	height?: number | string
	name: TIconComponent
	secondaryColor?: string
	size?: number | string
	style?: CSSProperties
	width?: number | string
}
```

---

# 10. SSR не должен иметь registry

После перехода на:

```tsx
<Icon name={PlusIcon} />
```

SSR больше не нужны:

```text
Icon.registry.ts
defaultIcons
TIconLoader
TIconLoaderRegistry
TIconRegistry
resolveDefaultIcon
dynamic import registry
```

Также не должно существовать SSR lookup:

```ts
defaultIcons[name]
```

или:

```ts
await defaultIcons[name]()
```

SSR получает компонент непосредственно от consumer.

---

# 11. Почему registry запрещён в SSR

Библиотека содержит ~4000 иконок.

Registry вида:

```ts
export const defaultIcons = {
	Icon1: () => import(...),
	Icon2: () => import(...),
	Icon3: () => import(...),
	// ...
	Icon4000: () => import(...),
}
```

создаёт связь SSR entry point со всей коллекцией.

Даже если сами SVG загружаются динамически, bundler должен анализировать registry и тысячи import expressions.

Для SSR это не требуется.

Вместо этого:

```ts
import PlusIcon from "@dubium/icons/icons/Plus"
```

создаёт прямую зависимость только от необходимого icon module.

---

# 12. Tree-shaking в SSR / Next.js

Consumer:

```tsx
import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

export function AddAction() {
	return <Icon name={PlusIcon} size={16} />
}
```

Module graph:

```text
application
    │
    ├── @dubium/icons/ssr
    │
    └── @dubium/icons/icons/Plus
                         │
                         ▼
                    PlusIcon
```

Для разрешения `PlusIcon` не требуется импортировать справочник компонентов остальных ~3999 иконок.

---

# 13. Типы имён для SPA

Отдельный `names.ts` не используется.

Тип встроенных имён выводится только на уровне TypeScript из export-имён коллекции:

```ts
type TCollectionIconExport = Extract<keyof typeof import("../../collection/index.js"), `${string}Icon`>

export type TDefaultIconName = TCollectionIconExport extends `${infer TName}Icon` ? TName : never
```

Например:

```text
PlusIcon -> "Plus"
DownloadIcon -> "Download"
```

Это не создаёт runtime registry и не импортирует коллекцию в JavaScript.

Runtime registry для Vite создаётся исключительно plugin-ом и содержит только реально используемые иконки.

# 14. Использование Icon внутри Button

Обычный случай:

```tsx
import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

;<Button>
	<Icon name={PlusIcon} size={16} />
	Добавить
</Button>
```

React tree:

```text
Button
├── Icon
│   └── IconContainer
│       └── PlusIcon
│           └── svg
│
└── "Добавить"
```

Визуально:

```text
[ +  Добавить ]
```

`Icon` является обычным React element и поэтому может использоваться внутри:

```tsx
<Button>
	<Icon name={PlusIcon} />
	Добавить
</Button>
```

```tsx
<Link>
	<Icon name={ArrowIcon} />
	Подробнее
</Link>
```

```tsx
<MenuItem>
	<Icon name={SettingsIcon} />
	Настройки
</MenuItem>
```

---

# 15. Next.js Server Components

В Server Component:

```tsx
import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

export function AddButton() {
	return (
		<button>
			<Icon name={PlusIcon} size={16} />
			Добавить
		</button>
	)
}
```

`PlusIcon` является частью server module graph.

При server rendering React получает:

```tsx
<Icon name={PlusIcon} />
```

и в результате рендерит SVG markup.

Упрощённо:

```text
Server Component
      │
      ▼
<Icon name={PlusIcon}>
      │
      ▼
<PlusIcon>
      │
      ▼
<svg>
      │
      ▼
HTML / RSC response
```

Конкретный момент рендера зависит от режима Next.js:

- build-time static rendering;
- revalidation;
- request-time dynamic rendering.

Архитектура icon library от этого не зависит.

---

# 16. Next.js Client Components

Наличие:

```ts
"use client"
```

не означает, что в Next.js следует использовать SPA registry API.

Следующий вариант без специального Next.js adapter не является рекомендуемым:

```tsx
"use client"

import { Icon } from "@dubium/icons/spa"

export function AddButton() {
	return <Icon name="Plus" />
}
```

Причина:

SPA строковый API зависит от compile-time registry, создаваемого Vite plugin.

Next.js этот plugin не использует.

---

# 17. Client Components без registry

Поскольку новый direct-import `Icon`:

- не использует server-only API;
- не использует hooks;
- не использует Context;
- не использует Node.js API;
- не использует dynamic registry;

сама реализация технически может быть совместима и с client rendering.

Например:

```tsx
"use client"

import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

export function AddButton() {
	return (
		<button
			onClick={() => {
				// client interaction
			}}
		>
			<Icon name={PlusIcon} size={16} />
			Добавить
		</button>
	)
}
```

При этом registry всё равно отсутствует.

Однако публичное именование entry point `ssr` и возможность его использования из Client Components должны быть отдельно определены контрактом библиотеки.

Если direct-import API официально предназначен одновременно для server и client environments, в будущем имеет смысл рассмотреть нейтральное имя entry point, например `core`.

Это отдельное API-решение и не является обязательным для удаления SSR registry.

---

# 18. Server → Client composition

Client Component может принимать ReactNode, созданный Server Component.

Например Server Component:

```tsx
import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

import { ClientButton } from "./ClientButton"

export function AddAction() {
	return (
		<ClientButton>
			<Icon name={PlusIcon} size={16} />
			Добавить
		</ClientButton>
	)
}
```

Client component:

```tsx
"use client"

import type { ReactNode } from "react"

export function ClientButton({ children }: { children: ReactNode }) {
	return (
		<button
			onClick={() => {
				// interaction
			}}
		>
			{children}
		</button>
	)
}
```

Это позволяет сохранять server-side icon composition даже когда внешний UI-компонент интерактивен.

---

# 19. SPA и SSR не должны иметь одинаковую внутреннюю реализацию

Внешний API намеренно похож:

### SPA

```tsx
<Icon name="Plus" />
```

### SSR / direct import

```tsx
<Icon name={PlusIcon} />
```

Но механизмы принципиально разные.

SPA:

```text
"Plus"
   │
   ▼
Vite compile-time analysis
   │
   ▼
minimal registry
   │
   ▼
loader
   │
   ▼
PlusIcon
```

SSR:

```text
import PlusIcon
   │
   ▼
<Icon name={PlusIcon}>
   │
   ▼
PlusIcon
```

Не следует пытаться объединить эти механизмы через общий runtime registry.

---

# 20. Vite SSR

SSR API не должен зависеть от Next.js.

Он должен работать аналогично в Vite SSR:

```tsx
import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

;<Icon name={PlusIcon} />
```

Vite plugin для этого не требуется.

Таким образом:

```text
Next.js
       ┐
Vite SSR
       ├── direct icon imports
Custom SSR
       │
RSC
       ┘
           ↓
   @dubium/icons/ssr
```

---

# 21. Generated icons

Каждая иконка должна оставаться отдельным module entry.

Пример:

```text
@dubium/icons/icons/Plus
@dubium/icons/icons/Download
@dubium/icons/icons/Search
```

Consumer должен иметь возможность сделать:

```ts
import PlusIcon from "@dubium/icons/icons/Plus"
```

без импорта всей коллекции.

Это критично для библиотеки размером ~4000 иконок.

---

# 22. Generated SVG component

Generated icon должен быть максимально простым React-компонентом.

Пример:

```tsx
export const PlusIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor = "var(--icon-secondary-color, currentColor)",
	...props
}: IIconComponentProps) => (
	<svg {...props} fill="none" height="100%" viewBox="0 0 24 24" width="100%">
		{/* generated paths */}
	</svg>
)

export default PlusIcon
```

Generated icon не должен знать о:

- SPA;
- SSR;
- Vite;
- registry;
- loaders;
- providers;
- Next.js.

Он является обычным SVG React component.

---

# 23. Accessibility

Декоративная иконка:

```tsx
<Icon name={PlusIcon} />
```

не должна автоматически объявляться screen reader как изображение с техническим именем `Plus`.

Без `ariaLabel` контейнер должен быть скрыт:

```tsx
<span aria-hidden="true">
	<svg aria-hidden="true" />
</span>
```

Если передан:

```tsx
<Icon ariaLabel="Добавить" name={PlusIcon} />
```

контейнер получает:

```tsx
<span aria-label="Добавить" role="img">
	...
</span>
```

SVG внутри остаётся:

```tsx
<svg aria-hidden="true" focusable="false" />
```

чтобы assistive technology не воспринимала контейнер и SVG как два отдельных объекта.

---

# 24. Что не должно попасть обратно в SSR

Следующие конструкции считаются архитектурным regression.

## Full registry

```ts
const icons = {
	Plus: () => import(...),
	Download: () => import(...),
	// ~4000
}
```

## Lookup по string

```ts
const loader = icons[name]
```

## Dynamic import через registry

```ts
const IconComponent = await icons[name]()
```

## Автоматический импорт всей коллекции

```ts
import * as icons from "../collection"
```

## Context для выбора SSR icon

```tsx
<IconProvider>
	<Icon name="Plus" />
</IconProvider>
```

если единственная задача Context — разрешить имя встроенной иконки.

Для built-in SSR icons должен использоваться direct import.

---

# 25. Custom icons

Если `Icon` принимает:

```ts
name: TIconComponent
```

то custom icon естественным образом поддерживается без отдельного registry:

```tsx
const ProductIcon = (props: IIconComponentProps) => (
	<svg {...props}>
		{/* ... */}
	</svg>
)

<Icon
	name={ProductIcon}
	size={24}
/>
```

Таким образом custom icon не требует:

```ts
defineIcons()
```

или:

```ts
createIcon()
```

только ради регистрации компонента.

---

# 26. SSR directory

Целевая структура SSR:

```text
src/icons/ssr/
├── index.ts
└── icon/
    ├── Icon.tsx
    ├── Icon.container.tsx
    ├── Icon.types.ts
    └── index.ts
```

SSR должен оставаться маленьким и предсказуемым.

---

# 27. Что удалить из старого SSR

После миграции необходимо удалить SSR infrastructure, связанную с registry:

```text
Icon.registry.ts
Icon.create.tsx
```

а также exports и types, существующие исключительно ради:

```text
defaultIcons
registry
loaders
createIcon
defineIcons
```

Если конкретный type используется другими независимыми частями библиотеки, он должен быть перенесён в соответствующий общий module, а не оставлен в SSR ради обратной совместимости без необходимости.

---

# 28. Архитектура библиотеки целиком

Финальная модель:

```text
                     ICON COLLECTION
                           │
              ~4000 independent modules
                           │
             ┌─────────────┴─────────────┐
             │                           │
             ▼                           ▼
        SPA + Vite                  SSR / RSC
             │                           │
             │                           │
     name="Plus"                 import PlusIcon
             │                           │
             ▼                           ▼
      Vite plugin               name={PlusIcon}
             │                           │
             ▼                           │
    compile-time scan                    │
             │                           │
             ▼                           │
    minimal registry                     │
             │                           │
             ▼                           ▼
         loader                    direct render
             │                           │
             └─────────────┬─────────────┘
                           ▼
                       PlusIcon
                           │
                           ▼
                          SVG
```

---

# 29. Ключевой architectural invariant

Для библиотеки на ~4000 иконок необходимо сохранять следующий invariant:

> Использование одной иконки не должно требовать runtime knowledge обо всех остальных иконках.

SPA достигает этого через compile-time Vite plugin:

```text
string → compile-time registry
```

SSR достигает этого через direct ES imports:

```text
module import → component
```

Это два разных решения одной задачи и их не нужно объединять в один runtime mechanism.

---

# 30. Итоговый контракт

## Vite SPA

```tsx
import { Icon } from "@dubium/icons/spa"

;<Icon name="Plus" />
```

Требуется Vite integration.

---

## Next.js / SSR / RSC

```tsx
import { Icon } from "@dubium/icons/ssr"
import PlusIcon from "@dubium/icons/icons/Plus"

;<Icon name={PlusIcon} />
```

Vite plugin не требуется.

Registry отсутствует.

---

## Composition

```tsx
<Button>
	<Icon name={PlusIcon} size={16} />
	Добавить
</Button>
```

---

# 31. Основное правило для дальнейшей разработки

Перед добавлением новой функциональности необходимо проверить:

1. Не заставляет ли изменение SSR знать обо всех ~4000 иконках?
2. Не создаёт ли оно full runtime registry?
3. Сохраняется ли direct import для SSR?
4. Сохраняется ли compile-time minimal registry для Vite SPA?
5. Не попадает ли Vite-specific код в SSR?
6. Не попадает ли server-specific код в generated SVG components?
7. Разделены ли container props и SVG props?
8. Работает ли `Icon` как обычный React element внутри `Button`, `Link`, `MenuItem` и других компонентов?
9. Остаётся ли справочник имён type-only, если runtime список не требуется?
10. Не требует ли использование одной иконки знания обо всей коллекции?

Если все эти условия соблюдены, изменение соответствует архитектуре библиотеки.
