# @dubium/icons

SVG-иконки для React. Поддерживает прямой импорт компонентов и загрузку по строковому имени через Vite.

## Содержание

- [@dubium/icons](#dubiumicons)
  - [Содержание](#содержание)
  - [1. Компонент Icon](#1-компонент-icon)
    - [Props](#props)
  - [2. Использование](#2-использование)
    - [Прямой импорт, без Vite-плагина](#прямой-импорт-без-vite-плагина)
    - [Через Vite](#через-vite)
  - [3. IconProvider](#3-iconprovider)
    - [Пример компонента иконки](#пример-компонента-иконки)
    - [Пример иконки с двумя цветами и обводкой](#пример-иконки-с-двумя-цветами-и-обводкой)
  - [4. Плагины для vite.config](#4-плагины-для-viteconfig)
    - [dubiumIcons](#dubiumicons-1)
      - [Параметры](#параметры)
      - [Настройка sources](#настройка-sources)
      - [Пример со всеми параметрами](#пример-со-всеми-параметрами)
    - [fixFederationCss](#fixfederationcss)

## 1. Компонент Icon

В библиотеке есть два компонента `Icon`. Они отличаются способом передачи иконки:

| Импорт | React-компонент | Описание |
| --------------------------------------- | --------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `import { Icon } from "@dubium/icons/icon"` | `<Icon name={UserOutlineIcon} />` | Отображает переданный React-компонент. Не требует Vite или плагинов |
| `import { Icon } from "@dubium/icons/vite"` | `<Icon name="UserOutline" />` | Принимает строковое имя из справочника всех иконок библиотеки. По имени находит загрузчик в реестре и загружает иконку при отображении. Требует `dubiumIcons()` |

### Props

| props            | Описание                                                                                                   |
| ---------------- | ---------------------------------------------------------------------------------------------------------- |
| `name`           | React-компонент для `@dubium/icons/icon` или строковое имя из справочника для `@dubium/icons/vite`         |
| `size`           | Ширина и высота иконки. По умолчанию `24`                                                                  |
| `width`          | Ширина иконки. Переопределяет ширину, заданную через `size`                                                |
| `height`         | Высота иконки. Переопределяет высоту, заданную через `size`                                                |
| `color`          | Основной цвет иконки. По умолчанию `var(--icon-color, currentColor)`                                       |
| `secondaryColor` | Второй цвет для иконок, которые его поддерживают. По умолчанию `var(--icon-secondary-color, currentColor)` |
| `strokeWidth`    | Толщина обводки для иконок, которые её поддерживают `var(--icon-stroke-width, 1.5px)`                      |
| `deg`            | Угол поворота в градусах                                                                                   |
| `ariaLabel`      | Доступное название для скринридера. Без него иконка считается декоративной                                 |

## 2. Использование

### Прямой импорт, без Vite-плагина

Импортируйте иконку и передайте её компонент в `name`:

```tsx
import { Icon } from "@dubium/icons/icon";
import { UserOutlineIcon } from "@dubium/icons/icons";

export const ProfileIcon = () => (
 <Icon
  name={UserOutlineIcon}
  size={24}
  color="currentColor"
  ariaLabel="Профиль"
 />
);
```

### Через Vite

Подключите `dubiumIcons()` в `vite.config.ts`, как показано ниже. Саму иконку импортировать не нужно:

```tsx
import { Icon } from "@dubium/icons/vite";

export const ProfileIcon = () => (
 <Icon
  name="UserOutline"
  size={24}
  color="currentColor"
  ariaLabel="Профиль"
 />
);
```

**Строковое имя пишется без суффикса `Icon`:** компоненту `UserOutlineIcon` соответствует `"UserOutline"`. Варианты `Outline` и `Filled` являются частью имени.

## 3. IconProvider

`IconProvider` подключает собственные иконки к строковому API. Передайте ему объект, где ключи являются именами иконок, а значения являются функциями их загрузки.

```tsx
import { createIcon, IconProvider } from "@dubium/icons/vite";

const appIcons = {
 CompanyLogo: () => import("./icons/CompanyLogoIcon"),
 TwoToneCircle: () => import("./icons/TwoToneCircleIcon"),
};

const AppIcon = createIcon<typeof appIcons>();

export const App = () => (
 <IconProvider icons={appIcons}>
  <AppIcon name="CompanyLogo" size={32} />

  <AppIcon
   name="TwoToneCircle"
   size={32}
   color="#2563eb"
   secondaryColor="#dbeafe"
   strokeWidth={2}
  />
 </IconProvider>
);
```

Файлы `CompanyLogoIcon.tsx` и `TwoToneCircleIcon.tsx` должны экспортировать React-компоненты SVG через `default export`.

`IconProvider` делает загрузчики доступными дочерним компонентам. `createIcon()` добавляет пользовательские имена в типизацию `name`, но сам ничего не регистрирует.

При совпадении имени иконка из провайдера имеет приоритет над остальными источниками. Для встроенных иконок провайдер не нужен. **Плагин `dubiumIcons()` нужен и при использовании провайдера.**

### Пример компонента иконки

Создадим `icons/CompanyLogoIcon.tsx` из примера выше. Для простоты иконка изображает точку:

```tsx
import type { IIconComponentProps } from "@dubium/icons/icons";

export const CompanyLogoIcon = ({
 color = "var(--icon-color, currentColor)",
 secondaryColor: _secondaryColor,
 ...svgProps
}: IIconComponentProps) => (
 <svg {...svgProps} width="100%" height="100%" viewBox="0 0 24 24">
  <circle cx="12" cy="12" r="3" fill={color} />
 </svg>
);

export default CompanyLogoIcon;
```

Размер задаёт обёртка `Icon`, поэтому SVG занимает `100%` её ширины и высоты. Неиспользуемый `secondaryColor` извлекается отдельно, чтобы не попадать в DOM.

`svgProps` не является отдельным prop компонента `Icon`. Это локальный объект, в который собираются оставшиеся свойства, переданные SVG-компоненту, например `aria-hidden` и `focusable`. Через `{...svgProps}` они передаются на `<svg>`.

### Пример иконки с двумя цветами и обводкой

Создадим `icons/TwoToneCircleIcon.tsx`: круг с обводкой цвета `color` и заливкой цвета `secondaryColor`.

Для иконок с настраиваемой толщиной обводки используется тип `IStrokeIconComponentProps`, который добавляет `strokeWidth` к `IIconComponentProps`.

```tsx
import type { IStrokeIconComponentProps } from "@dubium/icons/icons";

export const TwoToneCircleIcon = ({
 color = "var(--icon-color, currentColor)",
 secondaryColor = "var(--icon-secondary-color, currentColor)",
 strokeWidth = "var(--icon-stroke-width, 1.5px)",
 ...svgProps
}: IStrokeIconComponentProps) => (
 <svg {...svgProps} width="100%" height="100%" viewBox="0 0 24 24">
  <circle
   cx="12"
   cy="12"
   r="8"
   fill={secondaryColor}
   stroke={color}
   strokeWidth={strokeWidth}
  />
 </svg>
);

export default TwoToneCircleIcon;
```

Оба цвета и толщина обводки передаются через `AppIcon`, как показано в примере подключения выше. Если `strokeWidth` не задан, используется CSS-переменная `--icon-stroke-width`, а при её отсутствии `1.5px`.

## 4. Плагины для vite.config

### dubiumIcons

Создаёт реестр загрузчиков для строкового `Icon`. По умолчанию сканирует `src` и находит статические имена, например `<Icon name="UserOutline" />`.

Минимальная настройка:

```ts
import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { dubiumIcons } from "@dubium/icons/vite/plugin";

export default defineConfig({
 plugins: [react(), dubiumIcons()],
});
```

#### Параметры

Все параметры необязательны. Тип настроек `DubiumIconsPluginOptions` доступен через публичный импорт:

```ts
import type { DubiumIconsPluginOptions } from "@dubium/icons/vite/plugin";
```

| Параметр          | Описание                                                                                                                                                                                                                                                                                                                    |
| ----------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `scan`            | Каталоги для рекурсивного поиска использований иконок относительно корня Vite-проекта. Принимает пути к каталогам, не glob-шаблоны. `[]` отключает сканирование. По умолчанию `["src"]`                                                                                                                                     |
| `componentNames`  | Дополнительные имена JSX-компонентов, у которых нужно искать свойство `name`, например `["AppIcon"]` для `<AppIcon name="UserOutline" />`. Нужен для собственных обёрток и реэкспортов. Обычный `Icon` из `@dubium/icons/vite`, включая импорт с алиасом, определяется автоматически. По умолчанию `[]`                         |
| `include`         | Имена иконок, которые нужно добавить в реестр независимо от результатов сканирования. Используется, когда `name` задаётся динамически, а возможные значения известны заранее. Добавляет загрузчики, но не загружает все иконки сразу. По умолчанию `[]`                                                                     |
| `propertyNames`   | Имена полей объектов, строковые значения которых нужно считать именами иконок. Например, `["iconName"]` позволяет найти `"SearchOutline"` в `{ iconName: "SearchOutline" }`. По умолчанию `[]`; при включённом `runtimeRegistry` поле `iconName` добавляется автоматически                                                  |
| `runtimeRegistry` | Непустой уникальный идентификатор приложения или микрофронтенда, например `"profile-mf"`. Включает публикацию найденных и добавленных через `include` загрузчиков в общий runtime-реестр. После выполнения кода приложения они доступны другим приложениям в том же JavaScript-окружении. По умолчанию публикация отключена |
| `sources`         | Источники компонентов иконок: локальные каталоги и npm-пакет. Определяют, откуда импортировать найденное имя. По умолчанию `[{ type: "package", importPattern: "@dubium/icons/icons/{name}" }]`                                                                                                                                 |

Сканируются файлы `.js`, `.jsx`, `.mjs`, `.cjs`, `.ts` и `.tsx`.

**Плагин не вычисляет значения переменных и выражений.** Для `<Icon name={iconName} />` добавьте возможные имена в `include` или укажите поля конфигурации со статическими именами через `propertyNames`.

#### Настройка sources

Каждый элемент `sources` описывает один источник:

| Параметр        | Описание                                                                                                                                                                                                               |
| --------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `type`          | Тип источника: `"local"` для каталога компонентов или `"package"` для импорта из npm-пакета. Обязателен                                                                                                                |
| `path`          | Путь к каталогу компонентов относительно корня Vite-проекта. Обязателен для `"local"`                                                                                                                                  |
| `suffix`        | Суффикс имени файла, по которому распознаются локальные иконки. При формировании строкового имени суффикс удаляется: `CompanyLogoIcon.tsx` становится `CompanyLogo`. Используется для `"local"`. По умолчанию `"Icon"` |
| `importPattern` | Шаблон пути импорта с обязательным `{name}`, который заменяется именем иконки. Например, `@dubium/icons/icons/{name}`. Обязателен для `"package"`                                                                          |

Можно указать несколько локальных источников: они проверяются в порядке перечисления, используется первое совпадение. Источник `"package"` допускается только один и используется, если имя не найдено локально.

**Переданный `sources` заменяет стандартный список.** Чтобы сохранить доступ к встроенной коллекции вместе с локальными иконками, добавьте источник `@dubium/icons` явно. `sources: []` убирает все источники, поэтому найденные сканером или добавленные через `include` имена не смогут разрешиться.

Локальные файлы должны экспортировать React-компонент SVG через `default export`, как в примере из раздела `IconProvider`.

#### Пример со всеми параметрами

Указывайте только настройки, необходимые приложению:

```ts
dubiumIcons({
 // Где искать использования иконок.
 scan: ["src"],

 // Какие собственные JSX-обёртки сканировать.
 componentNames: ["AppIcon"],

 // Какие динамические имена добавить явно.
 include: ["UserOutline", "UserFilled"],

 // В каких полях объектов искать строковые имена.
 propertyNames: ["iconName"],

 // Под каким идентификатором публиковать загрузчики
 // для других приложений в общем runtime-реестре.
 runtimeRegistry: "profile-mf",

 // Откуда импортировать найденные иконки.
 sources: [
  {
   type: "local",
   path: "src/icons",
   suffix: "Icon",
  },
  {
   type: "package",
   importPattern: "@dubium/icons/icons/{name}",
  },
 ],
});
```

Сканер не читает содержимое `IconProvider`. Если пользовательское имя попало в сканирование через `componentNames`, `propertyNames` или было добавлено в `include`, оно должно разрешаться через `sources`.

### fixFederationCss

Исправляет CSS-плейсхолдеры в собранном `remoteEntry.js` у `@originjs/vite-plugin-federation`.

Нужен только в Remote-приложении, где возникает эта проблема. Подключается **после `federation()`** и требует **`build.cssCodeSplit: false`**.

```ts
import react from "@vitejs/plugin-react";
import federation from "@originjs/vite-plugin-federation";
import { defineConfig } from "vite";
import { dubiumIcons } from "@dubium/icons/vite/plugin";
import { fixFederationCss } from "@dubium/icons/vite/federation";

export default defineConfig({
 plugins: [
  react(),
  dubiumIcons(),

  federation({
   name: "profile_remote",
   filename: "remoteEntry.js",
   exposes: {
    "./Profile": "./src/Profile.tsx",
   },
  }),

  fixFederationCss(),
 ],

 build: {
  target: "esnext",
  cssCodeSplit: false,
 },
});
```

В существующем Remote сохраните свои настройки `federation()`.

Для другого имени entry-файла передайте `fixFederationCss({ remoteEntry: "profileRemote.js" })`.
