import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const RelationManyToManyFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19 4a3 3 0 0 1 3 3v10a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V7a3 3 0 0 1 3-3zm-3.2 5.4c-.577-.769-1.8-.361-1.8.6v4a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 16 14v-1l1.2 1.6c.577.769 1.8.361 1.8-.6v-4a1 1 0 0 0-1-1l-.117.007A1 1 0 0 0 17 10v1zm-9 0C6.223 8.631 5 9.039 5 10v4a1 1 0 0 0 1 1l.117-.007A1 1 0 0 0 7 14v-1l1.2 1.6c.577.769 1.8.361 1.8-.6v-4a1 1 0 0 0-1-1l-.117.007A1 1 0 0 0 8 10v1zm5.2 3.1a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0-1-1m0-3a1 1 0 0 0-1 1v.01a1 1 0 0 0 2 0v-.01a1 1 0 0 0-1-1"/></svg>
)

export default RelationManyToManyFilledIcon
