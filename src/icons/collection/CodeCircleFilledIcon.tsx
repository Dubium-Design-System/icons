import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CodeCircleFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 3.34A10 10 0 1 1 2 12l.005-.324A10 10 0 0 1 17 3.34m-6.293 5.953a1 1 0 0 0-1.414 0l-2 2a1 1 0 0 0 0 1.414l2 2a1 1 0 0 0 1.414 0l.083-.094a1 1 0 0 0-.083-1.32L9.415 12l1.292-1.293a1 1 0 0 0 0-1.414m4 0a1 1 0 0 0-1.414 0l-.083.094a1 1 0 0 0 .083 1.32L14.585 12l-1.292 1.293a1 1 0 0 0 1.414 1.414l2-2a1 1 0 0 0 0-1.414z" />
	</svg>
)

export default CodeCircleFilledIcon
