import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceUsbFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M15 2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 1 1v8a6 6 0 1 1-12 0V8a1 1 0 0 1 1-1h1V3a1 1 0 0 1 1-1zm-1 2h-4v3h4z" />
	</svg>
)

export default DeviceUsbFilledIcon
