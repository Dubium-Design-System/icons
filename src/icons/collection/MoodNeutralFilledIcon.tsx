import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoodNeutralFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M9.01 9l-.127.007a1 1 0 0 0 0 1.986L9 11l.127-.007a1 1 0 0 0 0-1.986zm6 0-.127.007a1 1 0 0 0 0 1.986L15 11l.127-.007a1 1 0 0 0 0-1.986z" />
	</svg>
)

export default MoodNeutralFilledIcon
