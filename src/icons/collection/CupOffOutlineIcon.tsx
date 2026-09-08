import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CupOffOutlineIcon = ({
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
		<path d="M8 8H5v3h6m4 0h4V8h-7m5.5 3-.323 2.154m-.525 3.497L16 21H8L6.5 11M6 8V7c0-.296.064-.577.18-.83M9 5h7a2 2 0 0 1 2 2v1m-3-3V3M3 3l18 18" />
	</svg>
)

export default CupOffOutlineIcon
