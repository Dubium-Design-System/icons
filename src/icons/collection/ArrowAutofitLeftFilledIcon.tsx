import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ArrowAutofitLeftFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%">
		<path d="M21 14a1 1 0 0 1-1 1H8.999v-.092a3 3 0 0 0-5.12-2.03.515.515 0 0 1-.879-.363V6a3 3 0 0 1 3-3h12a3 3 0 0 1 3 3z" />
		<path d="M21 18a1 1 0 0 1-1 1H5.416l1.291 1.293a1 1 0 0 1 .083 1.32l-.083.094a1 1 0 0 1-1.414 0l-3-3a1 1 0 0 1-.097-.112l-.071-.11-.054-.114-.035-.105-.03-.149L2 18l.003-.075.017-.126.03-.111.044-.111.052-.098.067-.096.08-.09 3-3a1 1 0 1 1 1.414 1.414L5.414 17H20a1 1 0 0 1 1 1" />
	</svg>
)

export default ArrowAutofitLeftFilledIcon
