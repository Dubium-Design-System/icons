import type { IIconComponentProps } from "./types.js"

export const AlertCircleIcon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M12 8v4m0 4h.01M3 12a9 9 0 1 0 18.001 0A9 9 0 0 0 3 12"
		/>
	</svg>
)

export default AlertCircleIcon
