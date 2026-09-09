import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const HomeCancelOutlineIcon = ({
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
		<path d="M16 19a3 3 0 1 0 6 0 3 3 0 1 0-6 0m1 2 4-4m-2-5h2l-9-9-9 9h2v7a2 2 0 0 0 2 2h5.5" />
		<path d="M9 21v-6a2 2 0 0 1 2-2h2c.58 0 1.103.247 1.468.642" />
	</svg>
)

export default HomeCancelOutlineIcon
