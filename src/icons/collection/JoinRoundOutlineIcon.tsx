import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const JoinRoundOutlineIcon = ({
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
		<path d="M6 4h3a2 2 0 0 1 2 2v6a1 1 0 0 0 1 1h6a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2h-6a8 8 0 0 1-8-8V6a2 2 0 0 1 2-2" />
	</svg>
)

export default JoinRoundOutlineIcon
