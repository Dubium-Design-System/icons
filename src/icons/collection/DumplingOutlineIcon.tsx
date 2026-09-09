import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const DumplingOutlineIcon = ({
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
		<path d="M5.532 5.532a2.53 2.53 0 0 1 2.56-.623 2.532 2.532 0 0 1 4.604-.717q.146-.24.356-.45a2.532 2.532 0 0 1 4.318 1.637 2.53 2.53 0 0 1 2.844.511l.358.358c1.384 1.385-.7 5.713-4.655 9.669-3.956 3.955-8.284 6.04-9.669 4.655l-.358-.358-.114-.122a2.53 2.53 0 0 1-.398-2.724 2.532 2.532 0 0 1-1.186-4.675A2.532 2.532 0 0 1 4.91 8.09a2.53 2.53 0 0 1 .622-2.558" />
	</svg>
)

export default DumplingOutlineIcon
