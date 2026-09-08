import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoxAlignTopOutlineIcon = ({
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
		<path d="M4 10.005h16v-5a1 1 0 0 0-1-1H5a1 1 0 0 0-1 1zm0 5v-.01m0 5.01v-.01m5 .01v-.01m6 .01v-.01m5 .01v-.01m0-4.99v-.01" />
	</svg>
)

export default BoxAlignTopOutlineIcon
