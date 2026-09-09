import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const OctahedronPlusOutlineIcon = ({
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
		<path d="m21.498 12.911.206-.208a.984.984 0 0 0 0-1.407l-8.845-8.948a1.233 1.233 0 0 0-1.718 0l-8.845 8.949a.984.984 0 0 0 0 1.407l8.845 8.949a1.234 1.234 0 0 0 1.718-.001l.08-.081" />
		<path d="M2 12c.004.086.103.178.296.246l8.845 2.632c.459.163 1.259.163 1.718 0l2.634-.784m5.41-1.61.801-.238c.195-.07.294-.156.296-.243M12 2.12v19.76M16 19h6m-3-3v6" />
	</svg>
)

export default OctahedronPlusOutlineIcon
