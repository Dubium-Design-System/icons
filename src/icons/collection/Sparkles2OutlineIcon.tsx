import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const Sparkles2OutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M14 6a9.3 9.3 0 0 0 1.516-.546c.911-.438 1.494-1.015 1.937-1.932.207-.428.382-.928.547-1.522.165.595.34 1.095.547 1.521.443.918 1.026 1.495 1.937 1.933.426.205.925.38 1.516.546a9.3 9.3 0 0 0-1.516.547c-.911.438-1.494 1.015-1.937 1.932A9 9 0 0 0 18 10c-.165-.594-.34-1.095-.547-1.521-.443-.918-1.026-1.494-1.937-1.932A9 9 0 0 0 14 6M3 14a21 21 0 0 0 1.652-.532c2.542-.953 3.853-2.238 4.816-4.806A20 20 0 0 0 10 7a20 20 0 0 0 .532 1.662c.963 2.567 2.275 3.853 4.816 4.806q.75.28 1.652.532a21 21 0 0 0-1.652.532c-2.542.953-3.854 2.238-4.816 4.806A20 20 0 0 0 10 21a20 20 0 0 0-.532-1.662c-.963-2.568-2.275-3.853-4.816-4.806A21 21 0 0 0 3 14"/></svg>
)

export default Sparkles2OutlineIcon
