import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const ApprovedCheckedFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor = "var(--icon-secondary-color, currentColor)",
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			fill={color}
			d="m8.6 22.5-1.9-3.2-3.6-.8.35-3.7L1 12l2.45-2.8-.35-3.7 3.6-.8 1.9-3.2L12 2.95l3.4-1.45 1.9 3.2 3.6.8-.35 3.7L23 12l-2.45 2.8.35 3.7-3.6.8-1.9 3.2-3.4-1.45zm2.35-6.95L16.6 9.9l-1.4-1.45-4.25 4.25-2.15-2.1L7.4 12z"
		/>
		<path fill={secondaryColor} d="M10.95 15.55 16.6 9.9l-1.4-1.45-4.25 4.25-2.15-2.15-1.4 1.4z" />
	</svg>
)

export default ApprovedCheckedFilledIcon
