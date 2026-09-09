import type { IStrokeIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const BrandMinecraftOutlineIcon = ({
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
		<path d="M21 16.008V7.99a1.98 1.98 0 0 0-1-1.717l-7-4.008a2.02 2.02 0 0 0-2 0L4 6.273c-.619.355-1 1.01-1 1.718v8.018c0 .709.381 1.363 1 1.717l7 4.008c.62.354 1.38.354 2 0l7-4.008c.619-.355 1-1.01 1-1.718M12 22V12m0 0 8.73-5.04m-17.46 0L12 12m0 5 3.003-1.668m3-1.667L21 12m-9 5-9-5" />
		<path d="m15 17 3-1.67v-3L15 14z" />
	</svg>
)

export default BrandMinecraftOutlineIcon
