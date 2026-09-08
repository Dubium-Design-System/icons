import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TestPipe2FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M16 2a1 1 0 0 1 0 2v14a4 4 0 1 1-8 0V4a1 1 0 1 1 0-2zm-2 2h-4v7h4z"/></svg>
)

export default TestPipe2FilledIcon
