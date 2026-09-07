import type { IIconComponentProps } from "./types.js"

export const AlignBoxLeftBottomIcon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%"><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 17H7m6-3H7m4-3H7M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/></svg>
)

export default AlignBoxLeftBottomIcon
