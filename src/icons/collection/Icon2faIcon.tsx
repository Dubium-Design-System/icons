import type { IIconComponentProps } from "./types.js"

export const Icon2faIcon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M7 16H3l3.47-4.66A2 2 0 1 0 3 9.8m7 6.2V8h4m-4 4h3m4 4v-6a2 2 0 1 1 4 0v6m-4-3h4"
		/>
	</svg>
)

export default Icon2faIcon
