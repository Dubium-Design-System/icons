import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TemplateFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 3a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM9 11a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-6a2 2 0 0 1 2-2zm11 0a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm0 4a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2zm0 4a1 1 0 0 1 0 2h-6a1 1 0 0 1 0-2z"/></svg>
)

export default TemplateFilledIcon
