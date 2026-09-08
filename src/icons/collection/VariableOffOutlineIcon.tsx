import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VariableOffOutlineIcon = ({
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
		<path d="M4.675 4.68C2.505 9.456 2.613 14.272 5 20M19 4c1.959 3.917 2.383 7.834 1.272 12.232m-.983 3.051q-.14.357-.289.717m-7.304-8.304q.141.385.32.831C13 15 13 16 14 16h1" />
		<path d="M8 16c1.5 0 3-2 4-3.5m2.022-2.514C14.651 9.404 15.326 9 16 9M3 3l18 18" />
	</svg>
)

export default VariableOffOutlineIcon
