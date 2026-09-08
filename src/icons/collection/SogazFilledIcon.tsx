import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SogazFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			fill={color}
			d="M18.853 13.147c-3.677.882-6.235 4-6.824 9.059-.588-5.03-3.147-8.177-6.823-9.059-.647-3.941 2.853-7.412 6.823-7.412 3.971.03 7.442 3.47 6.824 7.412M24 12c0-6.618-5.382-12-12-12S0 5.382 0 12s5.382 12 12 12c6.647.03 12-5.353 12-12"
		/>
	</svg>
)

export default SogazFilledIcon
