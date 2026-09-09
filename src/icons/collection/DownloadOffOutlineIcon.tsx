import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DownloadOffOutlineIcon = ({
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
		<path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 1.83-1.19M7 11l5 5 2-2m2-2 1-1m-5-7v4m0 4v4M3 3l18 18" />
	</svg>
)

export default DownloadOffOutlineIcon
