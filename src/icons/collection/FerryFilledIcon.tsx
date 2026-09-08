import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FerryFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M22 12a1 1 0 0 1 .86 1.51l-2.202 3.709A4.06 4.06 0 0 1 17.293 19H2a1 1 0 0 1-.957-1.291l1.521-5A1 1 0 0 1 3.521 12zm-3 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-5.106-7.447L14.617 7h.874a1 1 0 0 1 .864.497L18.392 11H5.56l.973-3.284A1 1 0 0 1 7.491 7h4.89l-.275-.553a1 1 0 0 1 1.788-.894"/></svg>
)

export default FerryFilledIcon
