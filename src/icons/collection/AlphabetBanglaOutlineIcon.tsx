import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AlphabetBanglaOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14 12c.904-.027 3 2 3 7m-7-8c0-.955 0-2 .786-2.677 1.262-1.089 3.025.55 3.2 2.06.086.741-.215 3.109-1.489 4.527-.475.53-.904.992-1.711 1.074-.75.076-1.364-.122-2.076-.588-1.138-.743-2.327-1.997-3.336-3.73C4.296 9.817 3.714 8.553 3 6"/><path d="M7.37 7.072c.769-.836 5.246-4.094 8.4-.202.382.472.573.708.9 1.63.326.921.326 1.562.326 2.844V19M17 10c0-1.989 1.5-4 4-4"/></svg>
)

export default AlphabetBanglaOutlineIcon
