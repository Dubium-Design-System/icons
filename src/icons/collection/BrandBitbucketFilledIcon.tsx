import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandBitbucketFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m3.661 3 16.68.007c.484-.005.946.203 1.262.57.316.368.454.856.364 1.396l-3.338 14.651A1.64 1.64 0 0 1 17 21H6.99c-.906-.009-1.678-.668-1.82-1.517L2.022 4.907A1.64 1.64 0 0 1 3.661 3M15 8H9a1 1 0 0 0-.986 1.164l1 6A1 1 0 0 0 10 16h4a1 1 0 0 0 .986-.836l1-6A1 1 0 0 0 15 8"/></svg>
)

export default BrandBitbucketFilledIcon
