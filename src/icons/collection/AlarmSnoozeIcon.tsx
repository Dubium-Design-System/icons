import type { IIconComponentProps } from "./types.js"

export const AlarmSnoozeIcon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%"><path stroke={color} strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 11h4l-4 4h4M7 4 4.25 6M17 4l2.75 2M5 13a7 7 0 1 0 14 0 7 7 0 0 0-14 0"/></svg>
)

export default AlarmSnoozeIcon
