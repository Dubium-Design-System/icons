import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const VocabularyOffOutlineIcon = ({
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
		<path d="M7 3h3a2 2 0 0 1 2 2 2 2 0 0 1 2-2h6a1 1 0 0 1 1 1v13m-2 2h-5a2 2 0 0 0-2 2 2 2 0 0 0-2-2H4a1 1 0 0 1-1-1V4c0-.279.114-.53.298-.712M12 5v3m0 4v9M7 11h1m8-4h1m-1 4h1M3 3l18 18" />
	</svg>
)

export default VocabularyOffOutlineIcon
