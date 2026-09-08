import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CopyOffOutlineIcon = ({
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
		<path d="M19.414 19.415A2 2 0 0 1 18 20h-8a2 2 0 0 1-2-2v-8c0-.554.225-1.055.589-1.417M12 8h6a2 2 0 0 1 2 2v6m-4-8V6a2 2 0 0 0-2-2H8m-3.418.59C4.222 4.95 4 5.45 4 6v8a2 2 0 0 0 2 2h2M3 3l18 18" />
	</svg>
)

export default CopyOffOutlineIcon
