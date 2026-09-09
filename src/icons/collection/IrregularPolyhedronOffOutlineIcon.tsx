import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const IrregularPolyhedronOffOutlineIcon = ({
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
		<path d="M4.706 4.73a1 1 0 0 0-.458 1.14L6 12l-1.752 6.13a1 1 0 0 0 .592 1.205l6.282 2.503a2.46 2.46 0 0 0 1.756 0l6.282-2.503q.06-.024.116-.055m-.474-4.474L18 12l1.752-6.13a1 1 0 0 0-.592-1.205l-6.282-2.503a2.46 2.46 0 0 0-1.756 0L7.578 3.574" />
		<path d="M4.5 5.5q.991.32 1.5.5m6 2c.29-.003.603-.06.878-.17L19.5 5.5M6 12l5.21 1.862a2.34 2.34 0 0 0 1.58 0l.742-.265m2.956-1.057q.468-.166 1.512-.54m-6 10V12M3 3l18 18" />
	</svg>
)

export default IrregularPolyhedronOffOutlineIcon
