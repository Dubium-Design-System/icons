const IDENTIFIER_NAME_SOURCE = "[A-Za-z_$][A-Za-z0-9_$]*"

export const REGEX = {
	IDENTIFIER: {
		CHARACTER: /[A-Za-z0-9_$]/u,
		NAME: new RegExp(`^${IDENTIFIER_NAME_SOURCE}$`, "u"),
	},

	WHITESPACE: /\s/u,
	REGEX_FLAG: /[A-Za-z]/u,

	COMMENTS: {
		MULTILINE: /\/\*[\s\S]*?\*\//gu,
		SINGLE_LINE: /\/\/[^\r\n]*/gu,
	},

	IMPORT: {
		STATEMENT: /^import\s*\{([\s\S]*?)\}\s*from\s*(["'])([^"']+)\2/u,
		ICON_SPECIFIER: new RegExp(`^Icon(?:\\s+as\\s+(${IDENTIFIER_NAME_SOURCE}))?$`, "u"),
	},

	JSX: {
		STATIC_QUOTED_NAME: /\bname\s*=\s*(["'])(.*?)\1/su,
		STATIC_EXPRESSION_NAME: /\bname\s*=\s*\{\s*(?:(["'])(.*?)\1|`([^`${}]*)`)\s*\}/su,
		NAME_ATTRIBUTE: /\bname\s*=/u,
	},
} as const
