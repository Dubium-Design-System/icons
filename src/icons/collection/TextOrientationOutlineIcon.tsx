import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TextOrientationOutlineIcon = ({
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
		<path d="m9 15-5-5C2.633 8.633 2.633 6.367 4 5s3.633-1.367 5 0l5 5m-8.5 1.5 5-5M21 12l-9 9m9-9v4m0-4h-4" />
	</svg>
)

export default TextOrientationOutlineIcon
