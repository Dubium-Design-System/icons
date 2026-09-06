import { StrictMode } from "react"
import { createRoot } from "react-dom/client"
import App from "./app"

/**
 * Точка входа dev-приложения.
 *
 * Монтирует React-приложение в корневой DOM-элемент в строгом режиме.
 * Используется для локальной разработки и визуальной проверки иконок.
 */
createRoot(document.getElementById("root")!).render(
	<StrictMode>
		<App />
	</StrictMode>,
)
