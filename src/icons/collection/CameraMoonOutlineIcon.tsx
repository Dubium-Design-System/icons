import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CameraMoonOutlineIcon = ({
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
		<path d="M11.5 20H5a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h1a2 2 0 0 0 2-2 1 1 0 0 1 1-1h6a1 1 0 0 1 1 1 2 2 0 0 0 2 2h1a2 2 0 0 1 2 2v3.5" />
		<path d="M14.815 11.96a3.001 3.001 0 1 0-3.398 3.983M18.62 22c-2 0-3.62-1.58-3.62-3.53 0-1.727 1.273-3.165 2.954-3.47a3.4 3.4 0 0 0-.24 1.264c0 1.95 1.621 3.53 3.62 3.53q.342 0 .666-.06C21.479 21.06 20.162 22 18.62 22" />
	</svg>
)

export default CameraMoonOutlineIcon
