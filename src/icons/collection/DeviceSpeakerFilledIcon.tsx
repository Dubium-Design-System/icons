import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceSpeakerFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3zm-5 9a4 4 0 0 0-3.995 3.8L8 15a4 4 0 1 0 4-4m0-5a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0V7a1 1 0 0 0-1-1" />
	</svg>
)

export default DeviceSpeakerFilledIcon
