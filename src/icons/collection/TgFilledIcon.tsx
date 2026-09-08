import type { IIconComponentProps } from "./types.js"

/**
 * SVG-иконка с поддержкой динамического цвета.
 */
export const TgFilledIcon = ({
	color = "var(--icon-color, currentColor)",
	secondaryColor: _secondaryColor,
	...svgProps
}: IIconComponentProps) => (
	<svg {...svgProps} fill="none" viewBox="0 0 24 24" width="100%" height="100%">
		<path
			fill={color}
			d="M5.01 11.159c4.616-1.952 10.59-4.331 11.414-4.66 2.163-.862 2.826-.697 2.496 1.212-.238 1.372-.924 5.914-1.47 8.74-.324 1.677-1.052 1.876-2.196 1.15-.55-.348-3.327-2.113-3.93-2.527-.55-.378-1.309-.832-.357-1.727.339-.319 2.558-2.356 4.288-3.941.226-.208-.058-.55-.32-.383a2027 2027 0 0 0-5.974 3.816c-.621.405-1.218.591-2.29.295-.809-.223-1.6-.49-1.907-.591-1.186-.391-.904-.898.247-1.384"
		/>
	</svg>
)

export default TgFilledIcon
