import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const EscalatorFilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M19.5 4a3.5 3.5 0 0 1 0 7h-1.086l-8.12 8.121a3 3 0 0 1-1.924.872L8.172 20H4.5a3.5 3.5 0 0 1 0-7h2.084l8.123-8.121a3 3 0 0 1 1.923-.872L16.828 4z"/></svg>
)

export default EscalatorFilledIcon
