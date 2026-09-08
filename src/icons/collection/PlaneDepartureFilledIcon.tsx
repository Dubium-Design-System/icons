import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const PlaneDepartureFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="m9.674 3.827 5.267 5.315 4.25-1.139a3 3 0 1 1 1.572 5.79l-14.49 3.883a1 1 0 0 1-1.006-.303l-4.45-5.02a1 1 0 0 1 .49-1.629l2.896-.776a1 1 0 0 1 .759.1l2.091 1.207 1.217-.326-3.062-5.107a1 1 0 0 1 .599-1.48l2.898-.777a1 1 0 0 1 .97.262M22 21a1 1 0 0 1-1 1H3a1 1 0 0 1 0-2h18a1 1 0 0 1 1 1"/></svg>
)

export default PlaneDepartureFilledIcon
