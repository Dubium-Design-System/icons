import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceNintendoOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4.713 4.718A4 4 0 0 0 3 8v8a4 4 0 0 0 4 4h3V10m0-4V4H8m6 6V4h3a4 4 0 0 1 4 4v8q-.001.463-.1.896m-1.62 2.39A4 4 0 0 1 17 20h-3v-6"/><path d="M5.5 8.5a1 1 0 1 0 2 0 1 1 0 1 0-2 0M3 3l18 18"/></svg>
)

export default DeviceNintendoOffOutlineIcon
