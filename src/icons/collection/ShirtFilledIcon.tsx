import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ShirtFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M14.883 3.007 14.978 3l.112.004.113.017.113.03 6 2a1 1 0 0 1 .677.833L22 6v5a1 1 0 0 1-.883.993L21 12h-2v7a2 2 0 0 1-1.85 1.995L17 21H7a2 2 0 0 1-1.995-1.85L5 19v-7H3a1 1 0 0 1-.993-.883L2 11V6a1 1 0 0 1 .576-.906l.108-.043 6-2A1 1 0 0 1 10 4a2 2 0 0 0 3.995.15l.009-.24.017-.113.037-.134.044-.103.05-.092.068-.093.069-.08q.083-.08.175-.14l.096-.053.103-.044.108-.032.112-.02z" />
	</svg>
)

export default ShirtFilledIcon
