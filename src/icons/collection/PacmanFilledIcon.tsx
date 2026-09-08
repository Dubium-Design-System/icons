import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PacmanFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M13.557 2.015a10 10 0 0 1 7.257 3.744 1 1 0 0 1-.074 1.331L15.828 12l4.912 4.91a1 1 0 0 1 .074 1.332A10 10 0 1 1 5.702 5.164l.235-.242.07-.063a9.98 9.98 0 0 1 7.55-2.844M12.5 5.5c-1.02 0-1.86.762-1.982 1.748l-.013.15a1 1 0 0 0-.005.102 2 2 0 1 0 2-2"/></svg>
)

export default PacmanFilledIcon
