import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArchiveOutlineIcon = ({
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
		<path d="M3 6a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2 2 2 0 0 1-2 2H5a2 2 0 0 1-2-2m2 2v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V8m-9 4h4" />
	</svg>
)

export default ArchiveOutlineIcon
