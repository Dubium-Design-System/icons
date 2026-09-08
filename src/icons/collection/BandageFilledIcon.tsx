import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BandageFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M20.207 3.793a5.95 5.95 0 0 1 .179 8.228l-.179.186-8 8a5.95 5.95 0 0 1-8.593-8.228l.179-.186 8-8a5.95 5.95 0 0 1 8.414 0M12 13a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 14.01l-.007-.127A1 1 0 0 0 12 13m2-2a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 15 12.01l-.007-.127A1 1 0 0 0 14 11m-4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 12.01l-.007-.127A1 1 0 0 0 10 11m2-2a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 13 10.01l-.007-.127A1 1 0 0 0 12 9"/></svg>
)

export default BandageFilledIcon
