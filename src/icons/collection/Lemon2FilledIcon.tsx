import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Lemon2FilledIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill={color} viewBox="0 0 24 24" width="100%" height="100%"><path d="M18 3a3 3 0 0 1 2.443 4.742l-.06.076.037.087c1.269 3.187.428 7.084-2.203 9.872L18 18c-2.8 2.8-6.823 3.723-10.095 2.42l-.087-.036-.133.098a3 3 0 0 1-2.11.488l-.205-.036a3 3 0 0 1-1.852-4.62l.098-.134-.036-.085c-1.269-3.187-.428-7.084 2.203-9.872L6 6c2.8-2.8 6.823-3.723 10.095-2.42l.085.037.124-.091a3 3 0 0 1 1.493-.52z"/></svg>
)

export default Lemon2FilledIcon
