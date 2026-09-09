import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const OctahedronOffOutlineIcon = ({
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
		<path d="m6.771 6.77-4.475 4.527a.984.984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718-.001l4.36-4.412m2.002-2.025 2.483-2.512a.984.984 0 0 0 0-1.407l-8.845-8.948a1.233 1.233 0 0 0-1.718 0L8.766 4.751" />
		<path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l1.544-.46m3.094-.92 4.207-1.252c.195-.07.294-.156.296-.243M12 2.12V8m0 4v9.88M3 3l18 18" />
	</svg>
)

export default OctahedronOffOutlineIcon
