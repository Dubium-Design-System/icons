import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandCucumberOutlineIcon = ({
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
		<path d="M20 10.99c-.01 5.52-4.48 10-10 10.01v-2.26l-.01-.01c-4.28-1.11-6.86-5.47-5.76-9.75a8 8 0 0 1 9.74-5.76C17.5 4.13 20 7.35 20 11zM10.5 8 10 7m3.5 7 .5 1m-5-2.5L8 13m3 1-.5 1M13 8l.5-1m2.5 5.5-1-.5m-6-2-1-.5" />
	</svg>
)

export default BrandCucumberOutlineIcon
