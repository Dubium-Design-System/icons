import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const AssetOutlineIcon = ({
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
		<path d="M3 15a6 6 0 1 0 12 0 6 6 0 1 0-12 0" />
		<path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0M17 5a2 2 0 1 0 4 0 2 2 0 1 0-4 0m-2.782 12.975 6.619-12.174M6.079 9.756l12.217-6.631" />
		<path d="M7 15a2 2 0 1 0 4 0 2 2 0 1 0-4 0" />
	</svg>
)

export default AssetOutlineIcon
