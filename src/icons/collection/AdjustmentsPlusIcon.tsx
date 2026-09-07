import type { IIconComponentProps } from "./types.js"

export const AdjustmentsPlusIcon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M6 12a2 2 0 1 1 0-4m0 4a2 2 0 1 0 0-4m0 4v8M6 8V4m7.958 11.592A2 2 0 1 0 12 18v2m0-16v10m6-5a2 2 0 0 1 0-4m0 4a2 2 0 0 0 0-4m0 4v3m0-7V4m-2 15h6m-3-3v6"
		/>
	</svg>
)

export default AdjustmentsPlusIcon
