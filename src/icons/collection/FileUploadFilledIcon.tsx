import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const FileUploadFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="m12 2 .117.007a1 1 0 0 1 .876.876L13 3v4l.005.15a2 2 0 0 0 1.838 1.844L15 9h4l.117.007a1 1 0 0 1 .876.876L20 10v9a3 3 0 0 1-2.824 2.995L17 22H7a3 3 0 0 1-2.995-2.824L4 19V5a3 3 0 0 1 2.824-2.995L7 2zm0 9-.09.004-.058.007-.118.025-.105.035-.113.054-.111.071a1 1 0 0 0-.112.097l-2.5 2.5a1 1 0 0 0 0 1.414l.094.083a1 1 0 0 0 1.32-.083l.793-.793V18a1 1 0 0 0 2 0v-3.585l.793.792a1 1 0 0 0 1.414-1.414l-2.5-2.5-.082-.073-.104-.074-.098-.052-.11-.044-.112-.03-.126-.017z" />
		<path d="M19 7h-4l-.001-4.001z" />
	</svg>
)

export default FileUploadFilledIcon
