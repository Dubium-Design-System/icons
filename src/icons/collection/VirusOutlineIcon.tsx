import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VirusOutlineIcon = ({
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
		<path d="M7 12a5 5 0 1 0 10 0 5 5 0 1 0-10 0m5-5V3m-1 0h2m2.536 5.464 2.828-2.828m-.707-.707 1.414 1.414M17 12h4m0-1v2m-5.465 2.536 2.829 2.828m.707-.707-1.414 1.414M12 17v4m1 0h-2m-2.535-5.464-2.829 2.828m.707.707L4.93 17.657M7 12H3m0 1v-2m5.464-2.536L5.636 5.636m-.707.707L6.343 4.93" />
	</svg>
)

export default VirusOutlineIcon
