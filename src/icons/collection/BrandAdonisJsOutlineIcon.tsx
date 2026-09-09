import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandAdonisJsOutlineIcon = ({
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
		<path d="M12 3c7.2 0 9 1.8 9 9s-1.8 9-9 9-9-1.8-9-9 1.8-9 9-9" />
		<path d="M8.863 16.922C10 16.5 10.5 16 12 16s2 .5 3.138.922c.713.264 1.516-.102 1.778-.772.126-.32.11-.673-.044-.983l-3.708-7.474c-.297-.598-1.058-.859-1.7-.583a1.24 1.24 0 0 0-.627.583l-3.709 7.474c-.321.648-.017 1.415.679 1.714.332.143.715.167 1.056.04z" />
	</svg>
)

export default BrandAdonisJsOutlineIcon
