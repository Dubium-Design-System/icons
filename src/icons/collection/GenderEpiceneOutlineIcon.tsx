import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const GenderEpiceneOutlineIcon = ({
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
		<path d="M15.536 15.536a5 5 0 1 0-7.072-7.072 5 5 0 0 0 7.072 7.072m0-.001L21 10M3 14l5.464-5.535M12 12h.01" />
	</svg>
)

export default GenderEpiceneOutlineIcon
