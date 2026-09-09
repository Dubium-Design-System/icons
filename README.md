# Способы использования иконок

В `@dubium/icons` есть два способа использовать иконки:

1. напрямую импортировать React-компонент;
2. использовать строковое имя через Vite plugin.

Если сборщик проекта — **Vite**, доступны оба способа.

Если используется **другой сборщик**, используйте прямой импорт.

---

## Содержание

- [Способы использования иконок](#способы-использования-иконок)
    - [Содержание](#содержание)
    - [1. Прямой импорт](#1-прямой-импорт)
        - [Когда использовать](#когда-использовать)
    - [2. Сборщик Vite](#2-сборщик-vite)
        - [Подключение plugin](#подключение-plugin)
        - [Что делает plugin](#что-делает-plugin)
        - [Зачем нужен registry](#зачем-нужен-registry)
        - [Cache](#cache)
        - [Строковые имена в конфигурациях](#строковые-имена-в-конфигурациях)
        - [Прямой импорт и Vite API можно использовать вместе](#прямой-импорт-и-vite-api-можно-использовать-вместе)
        - [mf передача иконки](#mf-передача-иконки)
            - [CSS для Module Federation](#css-для-module-federation)
                - [Подключение](#подключение)
                - [Если `remoteEntry` называется иначе](#если-remoteentry-называется-иначе)
                - [Зачем нужен плагин](#зачем-нужен-плагин)
                - [Разработка](#разработка)
                - [Проверка](#проверка)
    - [3. Другие сборщики](#3-другие-сборщики)
    - [4. Что выбрать](#4-что-выбрать)
        - [Сборщик Vite](#сборщик-vite)
        - [Другой сборщик](#другой-сборщик)
- [Коротко](#коротко)

---

## 1. Прямой импорт

Если нужная иконка известна прямо в коде, импортируйте её как обычный React-компонент:

```tsx
import { UserIcon } from "@dubium/icons/icons"
import { Icon } from "@dubium/icons/icon"

export const Profile = () => <Icon name={UserIcon} />
```

Сборщик видит прямой импорт `UserIcon` и добавляет в build нужную иконку.

Вся коллекция иконок для этого не подключается.

Этот вариант не зависит от Vite и подходит для других сборщиков.

### Когда использовать

Используйте прямой импорт, если иконка заранее известна в коде:

```tsx
import { SearchIcon } from "@dubium/icons/icons"
import { Icon } from "@dubium/icons/icon"

return <Icon name={SearchIcon} />
```

Для такого использования `dubiumIcons()` не нужен.

---

## 2. Сборщик Vite

Если проект собирается через Vite, кроме прямого импорта можно использовать иконки по строковому имени:

```tsx
<Icon name="User" />
```

Для этого используется `@dubium/icons/vite`.

### Подключение plugin

Добавьте `dubiumIcons()` в `vite.config.ts`:

```ts
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

import { dubiumIcons } from "@dubium/icons/vite/plugin"

export default defineConfig({
	plugins: [dubiumIcons(), react()],
})
```

После этого можно использовать:

```tsx
<Icon name="User" />
<Icon name="Search" />
```

### Что делает plugin

Plugin **не сканирует всю коллекцию иконок**.

Он проходит по исходникам приложения и ищет используемые строковые имена.

Например:

```tsx
<Icon name="User" />
<Icon name="Search" />
```

Plugin найдёт только **статически указанные** имена:

```text
User
Search
```

Такое значение можно определить во время сборки:

```tsx
<Icon name="User" /> // найдёт
```

А конкретное значение здесь заранее неизвестно:

```tsx
<Icon name={iconName} /> // заранее определить не сможет
```

Для найденных статических имён plugin создаёт registry.

Упрощённо:

```ts
export const iconRegistry = {
	Search: () => import("@dubium/icons/icons/Search"),
	User: () => import("@dubium/icons/icons/User"),
}
```

Если другие иконки из библиотеки в проекте не используются, в registry они не попадут.

### Зачем нужен registry

При прямом импорте сборщик уже знает, какая иконка нужна:

```ts
import { UserIcon } from "@dubium/icons/icons"
```

Но здесь:

```tsx
<Icon name="User" />
```

`"User"` — обычная строка.

Plugin связывает строковое имя с нужным модулем:

```text
User → @dubium/icons/icons/User
```

Для каждой найденной иконки создаётся отдельный dynamic `import()`:

```ts
return () => import("@dubium/icons/icons/User")
```

Поэтому строковый API не требует подключать всю коллекцию иконок.

### Cache

После загрузки иконка сохраняется в памяти приложения.

Если `User` уже был загружен, при следующем использовании:

```tsx
<Icon name="User" />
```

готовый React-компонент берётся из cache.

Важно не путать:

- **registry** хранит информацию о том, как загрузить иконку;
- **cache** хранит уже загруженный React-компонент.

### Строковые имена в конфигурациях

Строковый API удобен, когда имя иконки находится в конфигурации.

Чтобы plugin искал такие значения, укажите название свойства в `propertyNames`:

```ts
dubiumIcons({
	propertyNames: ["iconName"],
})
```

После этого:

```ts
const menu = [
	{
		title: "Profile",
		iconName: "User",
	},
]
```

статическое значение `User` будет найдено и добавлено в registry.

### Прямой импорт и Vite API можно использовать вместе

Если сборщик — Vite, не обязательно выбирать только один способ.

Часть иконок можно импортировать напрямую:

```tsx
import { CompanyLogoIcon } from "@dubium/icons/icons"
import { Icon as BaseIcon } from "@dubium/icons/icon"

return <BaseIcon name={CompanyLogoIcon} />
```

а часть использовать по строковому имени:

```tsx
<Icon name="User" />
```

Оба способа добавляют только необходимые приложению иконки, но делают это по-разному.

|                      | Прямой импорт              | Vite API                   |
| -------------------- | -------------------------- | -------------------------- |
| Использование        | `<Icon name={UserIcon} />` | `<Icon name="User" />`     |
| Как находится иконка | обычный import             | plugin сканирует исходники |
| Registry             | не нужен                   | создаётся автоматически    |
| Lazy loading         | нет                        | dynamic `import()`         |
| Нужен Vite           | нет                        | да                         |

### mf передача иконки

#### CSS для Module Federation

Если `@dubium/icons` используется внутри Remote-приложения с `@originjs/vite-plugin-federation`, иногда CSS Remote может загружаться некорректно.

Для этого в пакете есть отдельный Vite-плагин `fixFederationCss`.

Он **не включается автоматически** вместе с `dubiumIcons()` и подключается отдельно.

##### Подключение

Добавьте импорт в `vite.config.ts`:

```ts
import { fixFederationCss } from "@dubium/icons/vite/federation"
```

Затем добавьте плагин **после `federation(...)`**:

```ts
export default defineConfig({
	plugins: [
		react(),

		federation({
			name: "icons_remote",
			filename: "remoteEntry.js",
			exposes: {
				"./RemotePanel": "./src/RemotePanel.tsx",
			},
		}),

		fixFederationCss(),
	],

	build: {
		target: "esnext",
		cssCodeSplit: false,
	},
})
```

Важно:

- `fixFederationCss()` должен идти после `federation(...)`;
- для работы плагина нужен `build.cssCodeSplit: false`;
- существующие настройки `shared`, React и другие плагины менять не нужно.

Если у вас уже используется `dubiumIcons()`, оставьте его как есть:

```ts
import { dubiumIcons } from "@dubium/icons/vite/plugin"
import { fixFederationCss } from "@dubium/icons/vite/federation"
```

Оба плагина работают независимо друг от друга.

##### Если `remoteEntry` называется иначе

По умолчанию плагин ищет файл `remoteEntry.js`.

Если в `federation` указано другое имя, передайте его в настройках:

```ts
fixFederationCss({
	remoteEntry: "iconsRemote.js",
})
```

Для файла внутри директории можно указать относительный путь:

```ts
fixFederationCss({
	remoteEntry: "assets/iconsRemote.js",
})
```

##### Зачем нужен плагин

В некоторых сборках OriginJS в `remoteEntry.js` вместо списка CSS-файлов остаётся служебный CSS-плейсхолдер.

Из-за этого Remote может упасть при загрузке стилей с ошибкой:

```text
forEach is not a function
```

`fixFederationCss` заменяет такой плейсхолдер на корректный список CSS-файлов во время сборки.

Дополнительный post-build скрипт не нужен.

##### Разработка

Remote можно собирать обычным способом:

```bash
npx vite build
npx vite preview --host 0.0.0.0
```

Для watch-режима:

```bash
npx vite build --watch
```

После изменения CSS дождитесь пересборки Remote и обновите страницу Host.

Плагин исправляет только загрузку CSS. Он не решает проблемы с `shared`, React, EventBus или JS-экспортами Module Federation.

##### Проверка

После подключения:

1. Пересоберите Remote.
2. Откройте сгенерированный `remoteEntry.js`.
3. Убедитесь, что CSS-плейсхолдеров больше нет.
4. Откройте Host и проверьте, что стили Remote загрузились.

> Плагин опциональный. Если проблема с CSS в вашем Remote не возникает, подключать его не нужно.

---

## 3. Другие сборщики

Если проект использует не Vite, а другой сборщик, используйте прямой импорт:

```tsx
import { UserIcon } from "@dubium/icons/icons"
import { Icon } from "@dubium/icons/icon"

return <Icon name={UserIcon} />
```

Для этого варианта не нужны:

- `dubiumIcons()`;
- Vite plugin;
- compile-time registry.

Иконка импортируется как обычный React-компонент, а сборщик добавляет её в build стандартным способом.

Строковый API:

```tsx
<Icon name="User" />
```

требует Vite plugin, поэтому с другими сборщиками этот вариант не используется.

---

## 4. Что выбрать

### Сборщик Vite

Доступны оба варианта.

Если иконка известна прямо в коде:

```tsx
import { UserIcon } from "@dubium/icons/icons"
import { Icon } from "@dubium/icons/icon"

return <Icon name={UserIcon} />
```

используйте прямой импорт.

Если нужно работать со строковым именем:

```tsx
<Icon name="User" />
```

используйте Vite API.

### Другой сборщик

Используйте прямой импорт:

```tsx
import { UserIcon } from "@dubium/icons/icons"
import { Icon } from "@dubium/icons/icon"

return <Icon name={UserIcon} />
```

---

# Коротко

| Сборщик         | Прямой импорт | Строковый API |
| --------------- | ------------- | ------------- |
| Vite            | ✅            | ✅            |
| Другие сборщики | ✅            | ❌            |

Для Vite:

```tsx
// Прямой импорт
<Icon name={UserIcon} />

// Или строковый API
<Icon name="User" />
```

Для других сборщиков:

```tsx
import { UserIcon } from "@dubium/icons/icons"
import { Icon } from "@dubium/icons/icon"

return <Icon name={UserIcon} />
```
