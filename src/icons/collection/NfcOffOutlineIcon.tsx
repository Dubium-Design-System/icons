import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NfcOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M11 20a3 3 0 0 1-3-3V8m5-4a3 3 0 0 1 3 3v5m0 4v2l-5-5" />
		<path d="M8 4h9a3 3 0 0 1 3 3v9m-.873 3.116A3 3 0 0 1 17 20H7a3 3 0 0 1-3-3V7c0-.83.337-1.582.882-2.125M3 3l18 18" />
	</svg>
)

export default NfcOffOutlineIcon
