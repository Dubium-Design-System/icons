import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const InfoCircleDoubleFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor = "var(--icon-secondary-color, currentColor)",
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			fill={color}
			fillOpacity=".05"
			d="M1.68 12C1.68 6.3 6.3 1.68 12 1.68S22.32 6.3 22.32 12 17.7 22.32 12 22.32 1.68 17.7 1.68 12"
		/>
		<path
			stroke={secondaryColor}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeOpacity=".3"
			strokeWidth="1.8"
			d="M12 7.098h.014M10.6 11.3H12v5.602h1.401"
		/>
	</svg>
)

export default InfoCircleDoubleFilledIcon
