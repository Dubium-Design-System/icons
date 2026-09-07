import type { IIconComponentProps } from "./types.js"

export const AlignBoxCenterMiddleIcon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%"><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 15h2m-4-3h6m-5-3h4M3 19V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2"/></svg>
)

export default AlignBoxCenterMiddleIcon
