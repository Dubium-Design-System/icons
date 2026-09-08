import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Rotate360OutlineIcon = ({
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
		<path d="M12 16h4v4" />
		<path d="M19.458 11.042c.86-2.366.722-4.58-.6-5.9-2.272-2.274-7.185-1.045-10.973 2.743s-5.017 8.701-2.744 10.974c2.227 2.226 6.987 1.093 10.74-2.515" />
	</svg>
)

export default Rotate360OutlineIcon
