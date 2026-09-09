import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AddressBookOffOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth="2"
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="M8 4h10a2 2 0 0 1 2 2v10m-.57 3.399c-.363.37-.87.601-1.43.601H8a2 2 0 0 1-2-2V6m4 10h6" />
		<path d="M11 11a2 2 0 0 0 2 2m2-2a2 2 0 0 0-2-2M4 8h3m-3 4h3m-3 4h3M3 3l18 18" />
	</svg>
)

export default AddressBookOffOutlineIcon
