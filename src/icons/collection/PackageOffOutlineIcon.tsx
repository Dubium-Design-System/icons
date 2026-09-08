import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PackageOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M8.812 4.793 12 3l8 4.5V16m-2.282 1.784L12 21l-8-4.5v-9l2.223-1.25m8.32 4.32L20 7.5M12 12v9m0-9L4 7.5m12-2.25-4.35 2.447M9.086 9.139 8 9.75M3 3l18 18"/></svg>
)

export default PackageOffOutlineIcon
