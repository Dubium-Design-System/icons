import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FilePowerFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm.555 9.168a1 1 0 0 0-1.387.277l-2 3-.057.097A1 1 0 0 0 10 16h2.13l-.962 1.445a1 1 0 1 0 1.664 1.11l2-3 .057-.097A1 1 0 0 0 14 14h-2.132l.964-1.445a1 1 0 0 0-.277-1.387"/><path d="M19 7h-4l-.001-4.001z"/></svg>
)

export default FilePowerFilledIcon
