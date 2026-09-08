import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const WheatOutlineIcon = ({
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
		<path d="M12.014 21.514v-3.75M5.93 9.504l-.43 1.604a4.986 4.986 0 0 0 3.524 6.105q1.495.402 2.99.801v-3.44a4.98 4.98 0 0 0-3.676-4.426z" />
		<path d="M13.744 11.164a4.9 4.9 0 0 0 1.433-3.46 4.88 4.88 0 0 0-1.433-3.46l-1.73-1.73-1.73 1.73a4.9 4.9 0 0 0-1.433 3.46 4.9 4.9 0 0 0 1.433 3.46" />
		<path d="m18.099 9.504.43 1.604a4.986 4.986 0 0 1-3.525 6.105l-2.99.801v-3.44a4.98 4.98 0 0 1 3.677-4.426z" />
	</svg>
)

export default WheatOutlineIcon
