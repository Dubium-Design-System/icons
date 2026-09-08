import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DumbbellOutlineIcon = ({
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
		<path d="m7.026 9.61-.95-4.18A2 2 0 0 1 8.026 3h8a2 2 0 0 1 2 2.43l-1 4.2m-8 7.371h6" />
		<path d="M18.906 20.06a7.92 7.92 0 0 0 1-5.33 8 8 0 1 0-14.77 5.33 2 2 0 0 0 1.71.94h10.36a2 2 0 0 0 1.7-.94" />
	</svg>
)

export default DumbbellOutlineIcon
