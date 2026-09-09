import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MeshOutlineIcon = ({
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
		<path d="M3 9h18M3 15h18M8 4c.485.445 3.5 3.312 3.5 8 0 .663-.07 4.848-3.5 8m7-16a17 17 0 0 1 2.004 8c0 1.51-.201 4.628-2.004 8" />
		<path d="M18.778 20H5.222A2.22 2.22 0 0 1 3 17.778V6.222C3 4.995 3.995 4 5.222 4h13.556C20.005 4 21 4.995 21 6.222v11.556A2.22 2.22 0 0 1 18.778 20" />
	</svg>
)

export default MeshOutlineIcon
