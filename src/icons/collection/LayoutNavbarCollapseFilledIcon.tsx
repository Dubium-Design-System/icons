import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const LayoutNavbarCollapseFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M18 3a3 3 0 0 1 2.995 2.824L21 6v12a3 3 0 0 1-2.824 2.995L18 21H6a3 3 0 0 1-2.995-2.824L3 18V6a3 3 0 0 1 2.824-2.995L6 3zm1 6H5v9a1 1 0 0 0 .883.993L6 19h12a1 1 0 0 0 .993-.883L19 18zm-6.387 3.21.094.083 2 2a1 1 0 0 1-1.32 1.497l-.094-.083L12 14.415l-1.293 1.292a1 1 0 0 1-1.32.083l-.094-.083a1 1 0 0 1-.083-1.32l.083-.094 2-2a1 1 0 0 1 1.32-.083" />
	</svg>
)

export default LayoutNavbarCollapseFilledIcon
