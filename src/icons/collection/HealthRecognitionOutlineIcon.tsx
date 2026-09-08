import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HealthRecognitionOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M4 8V6a2 2 0 0 1 2-2h2M4 16v2a2 2 0 0 0 2 2h2m8-16h2a2 2 0 0 1 2 2v2m-4 12h2a2 2 0 0 0 2-2v-2M8.603 9.61a2.04 2.04 0 0 1 2.912 0L12 10l.5-.396a2.035 2.035 0 0 1 2.897.007 2.104 2.104 0 0 1 0 2.949L12 16l-3.397-3.44a2.104 2.104 0 0 1 0-2.95"/></svg>
)

export default HealthRecognitionOutlineIcon
