import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeSlug from "rehype-slug";
import rehypeHighlight from "rehype-highlight";

import "highlight.js/styles/github-dark.css";

import readme from "../../../README.md?raw"

import styles from "../app.module.css"

/**
 * Документация библиотеки.
 *
 * Источником является корневой README.md.
 *
 * `remark-gfm` добавляет поддержку GitHub Flavored Markdown:
 *
 * - таблиц;
 * - зачёркивания;
 * - task list;
 * - autolink.
 */
export const Documentation = () => {
	return (
		<div className={styles.documentationViewport}>
			<article className={styles.documentation}>
				<Markdown
					remarkPlugins={[remarkGfm]}
					rehypePlugins={[rehypeSlug, rehypeHighlight]}
					components={{
						table: ({ children }) => (
							<div className={styles.tableScroll}>
								<table>{children}</table>
							</div>
						),
					}}
				>
					{readme}
				</Markdown>
			</article>
		</div>
	)
}
