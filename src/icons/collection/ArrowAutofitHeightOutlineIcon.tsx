import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowAutofitHeightOutlineIcon = ({
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
		<path d="M12 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6m6 10v7m0-18v7m-3 8 3 3 3-3M15 6l3-3 3 3" />
	</svg>
)

export default ArrowAutofitHeightOutlineIcon
