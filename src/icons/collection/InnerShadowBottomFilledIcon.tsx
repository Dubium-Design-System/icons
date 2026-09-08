import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const InnerShadowBottomFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M5.144 4.72c3.92-3.695 10.093-3.625 13.927.209 3.905 3.905 3.905 10.237 0 14.142s-10.237 3.905-14.142 0-3.905-10.237 0-14.142zm3.32 10.816A1 1 0 1 0 7.05 16.95a7 7 0 0 0 9.9 0 1 1 0 0 0-1.414-1.414 5 5 0 0 1-7.072 0"/></svg>
)

export default InnerShadowBottomFilledIcon
