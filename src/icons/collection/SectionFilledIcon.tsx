import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SectionFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M20.01 19a1 1 0 0 1 .117 1.993L20 21a1 1 0 0 1-.117-1.993zm-16 0a1 1 0 0 1 0 2 1 1 0 0 1-.127-1.993m4 0a1 1 0 0 1 0 2 1 1 0 0 1-.127-1.993m4 0a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm4 0a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm4-16a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm-16 0a1 1 0 1 1 0 2 1 1 0 0 1-.127-1.993m4 0a1 1 0 1 1 0 2 1 1 0 0 1-.127-1.993m4 0a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm3.99 0a1 1 0 0 1 1 1 1 1 0 1 1-2 .01c0-.562.448-1.01 1-1.01m3 4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-14a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2z" />
	</svg>
)

export default SectionFilledIcon
