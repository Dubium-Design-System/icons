import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EarphoneBluetoothOutlineIcon = ({
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
		<path d="M6.57 12.77A6.9 6.9 0 0 1 6 10a7 7 0 0 1 14 0M9 16l-1 1" />
		<path d="m10.83 19.83 6.36-6.37a1 1 0 0 0 0-1.41L13 7.81a1 1 0 0 0-1.41 0l-6.42 6.36a4 4 0 0 0 0 5.66 4 4 0 0 0 5.66 0" />
	</svg>
)

export default EarphoneBluetoothOutlineIcon
