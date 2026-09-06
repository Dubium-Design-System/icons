import type { IIconComponentProps } from "./types.js"

export const Icon123Icon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="m3 10 2-2v8m4-8h3a1 1 0 0 1 1 1v2a1 1 0 0 1-1 1h-2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h3m4-8h2.5A1.5 1.5 0 0 1 21 9.5v1a1.5 1.5 0 0 1-1.5 1.5m0 0H18m1.5 0a1.5 1.5 0 0 1 1.5 1.5v1a1.5 1.5 0 0 1-1.5 1.5H17"
		/>
	</svg>
)

export default Icon123Icon
