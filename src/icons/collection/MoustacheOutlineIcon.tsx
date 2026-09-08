import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MoustacheOutlineIcon = ({
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
		<path d="M15 9a3 3 0 0 1 2.599 1.5c.933 1.333 2.133 1.556 3.126 1.556h.291l.77-.044h.213q-1.444 2.888-6.6 3h-.565a3 3 0 0 1 .165-6z" />
		<path d="M9 9a3 3 0 0 0-2.599 1.5c-.933 1.333-2.133 1.556-3.126 1.556h-.291l-.77-.044h-.213q1.445 2.888 6.6 3h.565a3 3 0 0 0-.165-6z" />
	</svg>
)

export default MoustacheOutlineIcon
