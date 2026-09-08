import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandGooglePodcastsOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 3v2m0 14v2m0-13v8m-4 1v2m-4-8v2m16-2v2M8 5v8m8-6V5m0 14v-8"/></svg>
)

export default BrandGooglePodcastsOutlineIcon
