import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BriefcaseOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M11 7h8a2 2 0 0 1 2 2v8m-1.166 2.818A2 2 0 0 1 19 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h2m1.185-2.842A2 2 0 0 1 10 3h4a2 2 0 0 1 2 2v2m-4 5v.01" />
		<path d="M3 13a20 20 0 0 0 11.905 1.928m3.263-.763A20 20 0 0 0 21 13M3 3l18 18" />
	</svg>
)

export default BriefcaseOffOutlineIcon
