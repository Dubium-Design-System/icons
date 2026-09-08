import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandSoundcloudOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 11h1c1.38 0 3 1.274 3 3 0 1.657-1.5 3-3 3h-6V7c3 0 4.5 1.5 5 4M9 8v9m-3 0v-7m-3 6v-2"/></svg>
)

export default BrandSoundcloudOutlineIcon
