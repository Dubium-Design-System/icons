import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const CertificateOffOutlineIcon = (
	{
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps
) => (
	<svg {...svgProps} fill="none" stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="100%" height="100%"><path d="M12.876 12.881a3 3 0 0 0 4.243 4.243m.588-3.42a3 3 0 0 0-1.437-1.423"/><path d="M13 17.5V22l2-1.5 2 1.5v-4.5M10 19H5a2 2 0 0 1-2-2V7c0-1.1.9-2 2-2m4 0h10a2 2 0 0 1 2 2v10M6 9h3m4 0h5M6 12h3m-3 3h2M3 3l18 18"/></svg>
)

export default CertificateOffOutlineIcon
