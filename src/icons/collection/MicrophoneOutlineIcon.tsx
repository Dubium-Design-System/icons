import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MicrophoneOutlineIcon = ({
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
		<path d="M9 5a3 3 0 0 1 3-3 3 3 0 0 1 3 3v5a3 3 0 0 1-3 3 3 3 0 0 1-3-3z" />
		<path d="M5 10a7 7 0 0 0 14 0M8 21h8m-4-4v4" />
	</svg>
)

export default MicrophoneOutlineIcon
