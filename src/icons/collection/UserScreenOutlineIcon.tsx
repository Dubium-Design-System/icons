import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const UserScreenOutlineIcon = ({
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
		<path d="M19.03 17.818A3 3 0 0 0 21 15V7a3 3 0 0 0-3-3H6a3 3 0 0 0-3 3v8c0 1.317.85 2.436 2.03 2.84" />
		<path d="M10 14a2 2 0 1 0 4 0 2 2 0 0 0-4 0m-2 7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2" />
	</svg>
)

export default UserScreenOutlineIcon
