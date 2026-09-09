import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const MailFastOutlineIcon = ({
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
		<path d="M3 7h3m-3 4h2m4.02-2.199-.6 6A2 2 0 0 0 10.41 17h7.98a2 2 0 0 0 1.99-1.801l.6-6A2 2 0 0 0 18.99 7h-7.98a2 2 0 0 0-1.99 1.801" />
		<path d="m9.8 7.5 2.982 3.28a3 3 0 0 0 4.238.202L20.3 8" />
	</svg>
)

export default MailFastOutlineIcon
