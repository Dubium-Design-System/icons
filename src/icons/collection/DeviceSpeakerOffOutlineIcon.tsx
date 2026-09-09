import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DeviceSpeakerOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M7 3h10a2 2 0 0 1 2 2v10m0 4a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V5" />
		<path d="M11.114 11.133a3 3 0 1 0 3.754 3.751M12 7v.01M3 3l18 18" />
	</svg>
)

export default DeviceSpeakerOffOutlineIcon
