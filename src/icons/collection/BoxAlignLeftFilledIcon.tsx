import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BoxAlignLeftFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M10.002 3.003h-5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h5a1 1 0 0 0 1-1v-16a1 1 0 0 0-1-1m5 16a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993zm5.001 0a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5.001a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-6a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm0-5a1 1 0 0 1 .117 1.993l-.128.007a1 1 0 0 1-.117-1.993zm-5.001 0a1 1 0 0 1 .117 1.993l-.127.007a1 1 0 0 1-.117-1.993z" />
	</svg>
)

export default BoxAlignLeftFilledIcon
