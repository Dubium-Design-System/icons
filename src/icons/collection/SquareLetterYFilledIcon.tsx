import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareLetterYFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M19 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-4.629 5.072a1 1 0 0 0-1.3.557L12 10.307l-1.072-2.678a1 1 0 0 0-1.856.742L11 13.194V16a1 1 0 0 0 .883.993L12 17a1 1 0 0 0 1-1v-2.809l1.928-4.82a1 1 0 0 0-.45-1.25z" />
	</svg>
)

export default SquareLetterYFilledIcon
