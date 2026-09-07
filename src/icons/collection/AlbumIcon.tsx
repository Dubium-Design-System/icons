import type { IIconComponentProps } from "./types.js"

export const AlbumIcon = ({ color = "var(--icon-color, currentColor)", ...props }: IIconComponentProps) => (
	<svg {...props} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			stroke={color}
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
			d="M12 4v7l2-2 2 2V4M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"
		/>
	</svg>
)

export default AlbumIcon
