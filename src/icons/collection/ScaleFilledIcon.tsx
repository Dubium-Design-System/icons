import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ScaleFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M12 2a1 1 0 0 1 1 1v1.152l5.159.86a.98.98 0 0 1 .636.38l.041.059.058.102 3.024 6.05.035.094.025.096.016.1.005.12-.003.061A3.996 3.996 0 0 1 18 16a4 4 0 0 1-4-4 1 1 0 0 1 .106-.447l2.393-4.79L13 6.18V19h4a1 1 0 0 1 0 2H7a1 1 0 0 1 0-2h4V6.18l-3.5.583 2.418 4.84.035.094.025.096.016.1.005.12-.003.061A3.996 3.996 0 0 1 6 16a4 4 0 0 1-4-4 1 1 0 0 1 .106-.447L5.14 5.488l.039-.061.025-.034a.98.98 0 0 1 .636-.38L11 4.151V3a1 1 0 0 1 1-1"/></svg>
)

export default ScaleFilledIcon
