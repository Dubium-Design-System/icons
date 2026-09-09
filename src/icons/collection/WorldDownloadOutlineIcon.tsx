import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WorldDownloadOutlineIcon = ({
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
		<path d="M21 12a9 9 0 1 0-9 9M3.6 9h16.8M3.6 15H12" />
		<path d="M11.578 3a17 17 0 0 0 0 18M12.5 3c1.719 2.755 2.5 5.876 2.5 9m3 2v7m-3-3 3 3 3-3" />
	</svg>
)

export default WorldDownloadOutlineIcon
