import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HttpTraceOutlineIcon = ({
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
		<path d="M3 8h4M5 8v8m5-4h2a2 2 0 1 0 0-4h-2v8m4 0-3-4m6 4v-6a2 2 0 1 1 4 0v6m-4-3h4" />
	</svg>
)

export default HttpTraceOutlineIcon
