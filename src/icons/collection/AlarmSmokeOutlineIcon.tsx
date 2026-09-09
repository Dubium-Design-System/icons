import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlarmSmokeOutlineIcon = ({
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
		<path d="m18 8-.8 3a1.25 1.25 0 0 1-1.2 1H8a1.25 1.25 0 0 1-1.2-1L6 8M3 5a1 1 0 0 1 1-1h16a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm9 11c.643.288 1.017.756 1 1.25.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25m-5-5c.643.288 1.017.756 1 1.25.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25m10-5c.643.288 1.017.756 1 1.25.017.494-.357.962-1 1.25s-1.017.756-1 1.25c-.017.494.357.962 1 1.25" />
	</svg>
)

export default AlarmSmokeOutlineIcon
