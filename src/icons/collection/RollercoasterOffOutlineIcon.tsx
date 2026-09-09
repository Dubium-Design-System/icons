import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RollercoasterOffOutlineIcon = ({
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
		<path d="M3 21a5.55 5.55 0 0 0 5.265-3.795L9 15a8.76 8.76 0 0 1 2.35-3.652m2.403-1.589A8.8 8.8 0 0 1 17.325 9H21m-1 0v7m0 4v1M8 21v-3m4 3v-9m4-2.5V12m0 4v5M15 3h5v3h-5zM9.446 5.415 10 5l2 2.5-.285.213M9.447 9.415 8 10.5 6.2 10 6 8l1.139-.854M3 3l18 18" />
	</svg>
)

export default RollercoasterOffOutlineIcon
