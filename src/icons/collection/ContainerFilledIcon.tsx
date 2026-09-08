import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ContainerFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M20 3a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V4a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V20a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V16a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V8a1 1 0 0 1 1-1m-5-4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H9a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2zM4 3a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V4a1 1 0 0 1 1-1m0 16a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V20a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V16a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 0 1-2 0V12a1 1 0 0 1 1-1m0-4a1 1 0 0 1 1 1v.01a1 1 0 1 1-2 0V8a1 1 0 0 1 1-1"/></svg>
)

export default ContainerFilledIcon
