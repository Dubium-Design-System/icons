import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlertCircleOffOutlineIcon = ({
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
		<path d="M5.644 5.629A9 9 0 1 0 18.359 18.37m1.693-2.349A9 9 0 0 0 7.965 3.953M12 7v1m0 8h.01M3 3l18 18" />
	</svg>
)

export default AlertCircleOffOutlineIcon
