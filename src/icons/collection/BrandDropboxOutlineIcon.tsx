import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandDropboxOutlineIcon = ({
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
		<path d="M7.5 10.625 3 7.812 7.5 5 12 7.813m-4.5 2.812L12 7.812m-4.5 2.813L3 13.448l4.5 2.802m0-5.625 4.5 2.823m0-5.636 4.5 2.791L21 7.791 16.5 5zM7.5 16.25l4.5-2.802M7.5 16.25v1.123L12 20l4.5-2.627V16.25M12 13.449l4.5-2.823 4.5 2.823-4.5 2.802M12 13.449l4.5 2.802" />
	</svg>
)

export default BrandDropboxOutlineIcon
