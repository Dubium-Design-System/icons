import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SandboxOutlineIcon = ({
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
		<path d="M19.953 8.017 21 15v2a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-2l1.245-8.297A2 2 0 0 1 6.222 5H10M3 15h18M13 3l5.5 1.5m-2.75-.75-2 7" />
		<path d="M7 10.5q2.5-1 5 0t5 0" />
	</svg>
)

export default SandboxOutlineIcon
