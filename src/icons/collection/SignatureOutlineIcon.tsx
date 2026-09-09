import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const SignatureOutlineIcon = ({
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
		<path d="M3 17q5-5 5-8c0-3-1-3-2-3S3.968 7.085 4 9c.034 2.048 1.658 4.877 2.5 6C8 17 9 17.5 10 16l2-3q.5 4 3 4c.53 0 2.639-2 3-2q.776 0 3 2" />
	</svg>
)

export default SignatureOutlineIcon
