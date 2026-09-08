import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PhotoCogOutlineIcon = ({
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
		<path d="M15 8h.01M12 21H6a3 3 0 0 1-3-3V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3v6" />
		<path d="m3 16 5-5c.928-.893 2.072-.893 3 0l3 3m0 0 1-1c.48-.461 1.016-.684 1.551-.67m.45 6.67a2 2 0 1 0 4 0 2 2 0 1 0-4 0m2-3.5V17m0 4v1.5m3.031-5.25-1.299.75m-3.463 2-1.3.75m0-3.5 1.3.75m3.463 2 1.3.75" />
	</svg>
)

export default PhotoCogOutlineIcon
