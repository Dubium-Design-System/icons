import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LemonOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M17.536 3.393c3.905 3.906 3.905 10.237 0 14.143-3.906 3.905-10.237 3.905-14.143 0z" />
		<path d="M5.868 15.06a6.5 6.5 0 0 0 9.193-9.192m-4.597 4.596 4.597 4.597m-4.597-4.597v6.364m0-6.364h6.364" />
	</svg>
)

export default LemonOutlineIcon
