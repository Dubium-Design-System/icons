## Vite: только используемые SPA-иконки в dist

Для SPA рекомендуется подключить compile-time plugin:

```ts
// vite.config.ts
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"
import { dubiumIcons } from "@dubium/icons/vite"

export default defineConfig({
	plugins: [dubiumIcons(), react()],
})
```

После этого API остаётся прежним:

```tsx
import { Icon } from "@dubium/icons/spa"

export const Header = () => (
	<>
		<Icon name="User" />
		<Icon name="Search" />
	</>
)
```

`@dubium/icons/vite` заранее сканирует `src`, создаёт virtual registry и генерирует
только такие lazy imports:

```ts
{
	User: () => import("@dubium/icons/icons/User"),
	Search: () => import("@dubium/icons/icons/Search"),
}
```

Поэтому остальные иконки из npm-пакета не попадают в `dist` consuming-приложения.

### Динамический name

Значение вида `<Icon name={item.icon} />` невозможно определить на этапе сборки.
Перечислите допустимые runtime-иконки вручную:

```ts
dubiumIcons({
	include: ["User", "Search", "Settings"],
})
```

По умолчанию плагин предупреждает о динамических `name`. Чтобы делать это ошибкой сборки:

```ts
dubiumIcons({
	include: ["User", "Search"],
	strictDynamicNames: true,
})
```

По умолчанию сканируется каталог `src`. Для монорепозитория или другой структуры:

```ts
dubiumIcons({
	scan: ["src", "app", "../shared/src"],
})
```

## Lightweight 5-icon test build

This archive intentionally keeps only the first five source SVG files so local testing stays fast:

- `123.svg` → `Icon123Icon`
- `24-hours.svg` → `Icon24HoursIcon`
- `2fa.svg` → `Icon2faIcon`
- `360-view.svg` → `Icon360ViewIcon`
- `360.svg` → `Icon360Icon`

Bundler-friendly container usage:

```tsx
import { Icon } from "@dubium/icons/container"
import { Icon360Icon } from "@dubium/icons/icons/Icon360Icon"

export function Example() {
	return <Icon icon={Icon360Icon} size={24} />
}
```

The older short subpath remains compatible too:

```tsx
import Icon360Icon from "@dubium/icons/icons/Icon360"
```
