import type { IIconComponentProps } from "./types.js"

export const Icon360ViewIcon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M14 6a1 1 0 0 0-1-1h-2a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1h-3M3 5h2.5A1.5 1.5 0 0 1 7 6.5v1A1.5 1.5 0 0 1 5.5 9m0 0H4m1.5 0A1.5 1.5 0 0 1 7 10.5v1A1.5 1.5 0 0 1 5.5 13H3m0 3c0 1.657 4.03 3 9 3s9-1.343 9-3m-4-9v4a2 2 0 0 0 4 0V7a2 2 0 1 0-4 0"
		/>
	</svg>
)

export default Icon360ViewIcon
