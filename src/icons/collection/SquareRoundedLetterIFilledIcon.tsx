import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SquareRoundedLetterIFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M11.676 2.001 12 2c7.752 0 10 2.248 10 10l-.005.642C21.869 19.877 19.534 22 12 22l-.642-.005C4.228 21.87 2.063 19.6 2 12.325V12c0-7.643 2.185-9.936 9.676-9.999M12 7a1 1 0 0 0-1 1v8a1 1 0 0 0 2 0V8a1 1 0 0 0-1-1" />
	</svg>
)

export default SquareRoundedLetterIFilledIcon
