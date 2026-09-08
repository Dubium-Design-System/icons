import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HexagonOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="m8.693 4.69 2.336-1.39a2.06 2.06 0 0 1 2 0l6 3.573H19a2 2 0 0 1 1 1.747v6.536c0 .246-.045.485-.13.707m-2.16 1.847-4.739 3.027a2 2 0 0 1-1.942 0l-6-3.833A2 2 0 0 1 4 15.157V8.62a2 2 0 0 1 1.029-1.748l1.154-.687M3 3l18 18" />
	</svg>
)

export default HexagonOffOutlineIcon
