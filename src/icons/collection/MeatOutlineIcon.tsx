import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MeatOutlineIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	strokeWidth = "var(--icon-stroke-width, 1.5px)",
	...svgProps
}: IStrokeIconComponentProps) => (
	<svg
		{...svgProps}
		fill="none"
		stroke={color}
		strokeLinecap="round"
		strokeLinejoin="round"
		strokeWidth={strokeWidth}
		viewBox="0 0 24 24"
		width="100%"
		height="100%"
	>
		<path d="m13.62 8.382 1.966-1.967A2 2 0 1 1 19 5a2 2 0 1 1-1.413 3.414l-1.82 1.821m-9.863 8.361c2.733 2.734 5.9 4 7.07 2.829 1.172-1.172-.094-4.338-2.828-7.071-2.733-2.734-5.9-4-7.07-2.829-1.172 1.172.094 4.338 2.828 7.071M7.5 16l1 1" />
		<path d="M12.975 21.425c3.905-3.906 4.855-9.288 2.121-12.021-2.733-2.734-8.115-1.784-12.02 2.121" />
	</svg>
)

export default MeatOutlineIcon
