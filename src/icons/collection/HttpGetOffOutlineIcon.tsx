import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HttpGetOffOutlineIcon = ({
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
		<path d="M7 8H5a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4H6m8-4h-2m-2 2v6h4m-4-4h2m5-4h4m-2 0v7M3 3l18 18" />
	</svg>
)

export default HttpGetOffOutlineIcon
