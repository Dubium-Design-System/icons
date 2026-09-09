import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const InnerShadowRightFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M4.929 4.929c3.905-3.905 10.237-3.905 14.142 0s3.905 10.237 0 14.142-10.237 3.905-14.142 0-3.905-10.237 0-14.142m12.02 2.121a1 1 0 0 0-1.413 1.414 5 5 0 0 1 0 7.072 1 1 0 0 0 1.414 1.414 7 7 0 0 0 0-9.9z" />
	</svg>
)

export default InnerShadowRightFilledIcon
