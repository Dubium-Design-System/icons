import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WiperWashOutlineIcon = ({
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
		<path d="M11 20a1 1 0 1 0 2 0 1 1 0 1 0-2 0m-8-9 5.5 5.5a5 5 0 0 1 7 0L21 11a12 12 0 0 0-18 0m9 9V6M4 6a4 4 0 0 1 .4-1.8M7 2.1a4 4 0 0 1 2 0" />
		<path d="M12 6a4 4 0 0 0-.4-1.8" />
		<path d="M12 6a4 4 0 0 1 .4-1.8M15 2.1a4 4 0 0 1 2 0M20 6a4 4 0 0 0-.4-1.8" />
	</svg>
)

export default WiperWashOutlineIcon
