import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ConfettiOffOutlineIcon = ({
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
		<path d="M4 5h1m0 0v1m6.5-2L11 6m7-1h2m-1-1v2m-4 3-1 1m4 3 2-.5M18 19h1m0 0v1m-5-3.482L7.482 10l-4.39 9.58a1 1 0 0 0 1.329 1.329zM3 3l18 18" />
	</svg>
)

export default ConfettiOffOutlineIcon
