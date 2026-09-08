import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CircleArrowUpFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M17 3.34a10 10 0 1 1-14.995 8.984L2 12l.005-.324A10 10 0 0 1 17 3.34M12.02 7l-.163.01-.086.016-.142.045-.113.054-.07.043-.095.071-.058.054-4 4-.083.094a1 1 0 0 0 1.497 1.32L11 10.414V16l.007.117A1 1 0 0 0 13 16v-5.585l2.293 2.292.094.083a1 1 0 0 0 1.32-1.497l-4-4-.082-.073-.089-.064-.113-.062-.081-.034-.113-.034-.112-.02z"/></svg>
)

export default CircleArrowUpFilledIcon
