import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DashboardFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 2.954a10 10 0 0 1 6.222 17.829A1 1 0 0 1 17.6 21H6.4a1 1 0 0 1-.622-.217A10 10 0 0 1 12 2.954m4.207 5.839a1 1 0 0 0-1.414 0l-2.276 2.274a2.003 2.003 0 0 0-2.514 1.815L10 13a2 2 0 1 0 3.933-.517l2.274-2.276a1 1 0 0 0 0-1.414"/></svg>
)

export default DashboardFilledIcon
