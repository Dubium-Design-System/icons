import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceRemoteFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M15 2a3 3 0 0 1 3 3v14a3 3 0 0 1-3 3H9a3 3 0 0 1-3-3V5a3 3 0 0 1 3-3h2v1a1 1 0 0 0 .883.993L12 4a1 1 0 0 0 1-1V2zm-5 15a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 18.01l-.007-.127A1 1 0 0 0 10 17m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 15 18.01l-.007-.127A1 1 0 0 0 14 17m-4-3a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 11 15.01l-.007-.127A1 1 0 0 0 10 14m4 0a1 1 0 0 0-1 1l.007.127A1 1 0 0 0 15 15.01l-.007-.127A1 1 0 0 0 14 14m-2-7a3 3 0 0 0-2.995 2.824L9 10a3 3 0 1 0 3-3" />
	</svg>
)

export default DeviceRemoteFilledIcon
