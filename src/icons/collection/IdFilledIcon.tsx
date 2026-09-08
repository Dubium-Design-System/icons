import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const IdFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M18 3a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V7q0-.053.005-.102A3.994 3.994 0 0 1 6 3zm-1 12H7a1 1 0 0 0 0 2h10a1 1 0 0 0 0-2M9 7a2.995 2.995 0 0 0-2.995 2.898A1 1 0 0 0 6 10a3 3 0 1 0 3-3m8 4h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2m0-4h-2a1 1 0 0 0 0 2h2a1 1 0 0 0 0-2" />
	</svg>
)

export default IdFilledIcon
