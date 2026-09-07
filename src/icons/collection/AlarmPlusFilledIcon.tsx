import type { IIconComponentProps } from "./types.js"

export const AlarmPlusFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor = "var(--icon-secondary-color, currentColor)",
	...props
}: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			fill={color}
			d="M16 6.072a8 8 0 1 1-11.995 7.213L4 13l.005-.285A8 8 0 0 1 16 6.072M12 10a1 1 0 0 0-1 1v1h-1l-.117.007A1 1 0 0 0 10 14h1v1l.007.117A1 1 0 0 0 13 15v-1h1l.117-.007A1 1 0 0 0 14 12h-1v-1l-.007-.117A1 1 0 0 0 12 10"
		/>
		<path
			fill={color}
			d="M6.412 3.191a1 1 0 0 1 1.273 1.54l-.097.08-2.75 2a1 1 0 0 1-1.273-1.54l.097-.08zm9.779.221a1 1 0 0 1 1.291-.288l.106.067 2.75 2a1 1 0 0 1-1.07 1.685l-.106-.067-2.75-2a1 1 0 0 1-.221-1.397"
		/>
		<path
			stroke={secondaryColor}
			d="M16 6.072a8 8 0 1 1-11.995 7.213L4 13l.005-.285A8 8 0 0 1 16 6.072ZM12 10a1 1 0 0 0-1 1v1h-1l-.117.007A1 1 0 0 0 10 14h1v1l.007.117A1 1 0 0 0 13 15v-1h1l.117-.007A1 1 0 0 0 14 12h-1v-1l-.007-.117A1 1 0 0 0 12 10Z"
		/>
		<path
			stroke={secondaryColor}
			d="M6.412 3.191a1 1 0 0 1 1.273 1.54l-.097.08-2.75 2a1 1 0 0 1-1.273-1.54l.097-.08zm9.779.221a1 1 0 0 1 1.291-.288l.106.067 2.75 2a1 1 0 0 1-1.07 1.685l-.106-.067-2.75-2a1 1 0 0 1-.221-1.397Z"
		/>
	</svg>
)

export default AlarmPlusFilledIcon
