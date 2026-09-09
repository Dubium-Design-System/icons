import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const NavigationQuestionOutlineIcon = ({
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
		<path d="M16.081 11.847 12 3 4.03 20.275c-.07.2-.017.424.135.572.15.148.374.193.57.116L12 18.5l3.037 1.03M19 22v.01M19 19a2.003 2.003 0 0 0 .914-3.782 1.98 1.98 0 0 0-2.414.483" />
	</svg>
)

export default NavigationQuestionOutlineIcon
