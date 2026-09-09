import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ClipboardTypographyFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M17.997 4.17A3 3 0 0 1 20 7v12a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V7a3 3 0 0 1 2.003-2.83A4 4 0 0 0 10 8h4a4 4 0 0 0 3.98-3.597zM15 10H9a1 1 0 0 0-1 1v1a1 1 0 0 0 2 0h1v4a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2v-4h1a1 1 0 0 0 2 0v-1a1 1 0 0 0-1-1m-1-8a2 2 0 1 1 0 4h-4a2 2 0 1 1 0-4z" />
	</svg>
)

export default ClipboardTypographyFilledIcon
