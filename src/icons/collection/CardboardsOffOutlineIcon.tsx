import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CardboardsOffOutlineIcon = ({
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
		<path d="M20.96 16.953q.04-.22.04-.453V8a2 2 0 0 0-2-2h-9M6 6H5a2 2 0 0 0-2 2v8.5A2.5 2.5 0 0 0 5.5 19h1.06a3 3 0 0 0 2.34-1.13l1.54-1.92a2 2 0 0 1 3.12 0l1.54 1.92A3 3 0 0 0 17.44 19h1.06q.233 0 .454-.041" />
		<path d="M7 12a1 1 0 1 0 2 0 1 1 0 1 0-2 0m9.714.7a1 1 0 0 0-1.417-1.411zM3 3l18 18" />
	</svg>
)

export default CardboardsOffOutlineIcon
