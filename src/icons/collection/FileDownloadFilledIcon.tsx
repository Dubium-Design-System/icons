import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileDownloadFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm0 8a1 1 0 0 0-1 1v3.585l-.793-.792a1 1 0 0 0-1.32-.083l-.094.083a1 1 0 0 0 0 1.414l2.5 2.5.044.042.068.055.11.071.114.054.105.035.15.03L12 18l.117-.007.117-.02.108-.033.081-.034.098-.052.092-.064.094-.083 2.5-2.5a1 1 0 0 0 0-1.414l-.094-.083a1 1 0 0 0-1.32.083l-.793.791V11a1 1 0 0 0-.883-.993zm2.999-7.001L19 7h-4z"/></svg>
)

export default FileDownloadFilledIcon
