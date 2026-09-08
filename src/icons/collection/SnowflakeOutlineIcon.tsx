import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SnowflakeOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="m10 4 2 1 2-1"/><path d="M12 2v6.5l3 1.72m2.928-3.952.134 2.232 1.866 1.232"/><path d="m20.66 7-5.629 3.25.01 3.458m4.887.56L18.062 15.5l-.134 2.232"/><path d="m20.66 17-5.629-3.25-2.99 1.738M14 20l-2-1-2 1"/><path d="M12 22v-6.5l-3-1.72m-2.928 3.952L5.938 15.5l-1.866-1.232"/><path d="m3.34 17 5.629-3.25-.01-3.458m-4.887-.56L5.938 8.5l.134-2.232"/><path d="m3.34 7 5.629 3.25 2.99-1.738"/></svg>
)

export default SnowflakeOutlineIcon
