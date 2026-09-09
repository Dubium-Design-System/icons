import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PointerOutlineIcon = ({
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
		<path d="M7.904 17.563a1.2 1.2 0 0 0 2.228.308l2.09-3.093 4.907 4.907a1.067 1.067 0 0 0 1.509 0l1.047-1.047a1.067 1.067 0 0 0 0-1.509l-4.907-4.907 3.113-2.09a1.2 1.2 0 0 0-.309-2.228L4 4z" />
	</svg>
)

export default PointerOutlineIcon
