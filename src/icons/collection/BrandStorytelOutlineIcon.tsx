import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandStorytelOutlineIcon = ({
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
		<path d="M4.103 22c2.292-2.933 16.825-2.43 16.825-11.538C20.928 4.164 15.954 2 12.477 2S3 5.036 3 13.241C3 19.615 4.103 22 4.103 22" />
	</svg>
)

export default BrandStorytelOutlineIcon
