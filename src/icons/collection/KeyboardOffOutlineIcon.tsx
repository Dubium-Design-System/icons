import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const KeyboardOffOutlineIcon = ({
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
		<path d="M18 18H4a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h2m4 0h10a2 2 0 0 1 2 2v8c0 .554-.226 1.056-.59 1.418M6 10v.01m4-.01v.01m4-.01v.01m4-.01v.01M6 14v.01M18 14v.01M10 14h4M3 3l18 18" />
	</svg>
)

export default KeyboardOffOutlineIcon
