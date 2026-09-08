import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PhotoSensor3OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 4h1a2 2 0 0 1 2 2v1m0 10v1a2 2 0 0 1-2 2h-1M7 20H6a2 2 0 0 1-2-2v-1M4 7V6a2 2 0 0 1 2-2h1m2 8a3 3 0 1 0 6 0 3 3 0 1 0-6 0m3 6v2m-8-8h2m6-8v2m8 6h-2"/></svg>
)

export default PhotoSensor3OutlineIcon
