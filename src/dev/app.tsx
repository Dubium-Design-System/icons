import { type ComponentType, memo, useDeferredValue, useMemo, useRef, useState } from "react"

import * as iconCollection from "../icons/collection/index.js"
import type { IIconComponentProps } from "../icons/collection/types.js"

import "./app.css"

/**
 * Количество колонок в документации.
 *
 * 8 колонок × 8 видимых строк = 64 видимые иконки.
 */
const COLUMN_COUNT = 8

/**
 * Количество строк, которое пользователь видит внутри viewport.
 */
const VISIBLE_ROW_COUNT = 8

/**
 * Фактически React держит в DOM 16 строк:
 *
 * 16 × 8 = 128 иконок.
 *
 * Лишние строки работают как буфер для плавного скролла.
 */
const RENDER_ROW_COUNT = 16

/**
 * Половина дополнительных строк располагается сверху,
 * половина — снизу.
 */
const OVERSCAN_ROW_COUNT = (RENDER_ROW_COUNT - VISIBLE_ROW_COUNT) / 2

/**
 * Высота одной строки должна совпадать
 * со значением --icon-row-height в app.css.
 */
const ROW_HEIGHT = 244

/**
 * Суффикс имён экспортируемых компонентов иконок.
 *
 * По суффиксу отличаем компоненты иконок от прочих экспортов коллекции.
 */
const ICON_SUFFIX = "Icon"

/**
 * Тип компонента иконки из коллекции.
 */
type TIconComponent = ComponentType<IIconComponentProps>

/**
 * Метаданные одной иконки в демо-каталоге.
 */
type TIconItem = {
	/** Имя иконки без суффикса `Icon`. */
	name: string
	/** Полное имя компонента (например, `ArrowLeftIcon`). */
	componentName: string
	/** Компонент иконки для рендера. */
	Component: TIconComponent

	/**
	 * Заранее нормализованное значение для поиска.
	 *
	 * Благодаря этому при каждом вводе символа
	 * не вызываем повторно toLowerCase для тысяч иконок.
	 */
	searchValue: string
}

/**
 * Коллекция формируется только один раз при загрузке модуля.
 *
 * В неё автоматически попадут все exports вида:
 *
 * ArrowLeftIcon
 * HomeIcon
 * SearchIcon
 * ...
 */
const icons: TIconItem[] = Object.entries(iconCollection)
	.filter(([componentName, component]) => componentName.endsWith(ICON_SUFFIX) && typeof component === "function")
	.map(([componentName, Component]) => {
		/**
		 * ArrowLeftIcon -> ArrowLeft
		 */
		const name = componentName.slice(0, -ICON_SUFFIX.length)

		return {
			name,
			componentName,
			Component: Component as TIconComponent,
			searchValue: `${name} ${componentName}`.toLowerCase(),
		}
	})
	.sort((a, b) => a.name.localeCompare(b.name))

/**
 * Копирование текста в clipboard.
 *
 * document.execCommand оставлен как fallback
 * для окружений, где Clipboard API недоступен.
 */
const copyText = async (value: string): Promise<void> => {
	if (navigator.clipboard?.writeText) {
		await navigator.clipboard.writeText(value)

		return
	}

	const textarea = document.createElement("textarea")

	textarea.value = value
	textarea.readOnly = true

	textarea.style.position = "fixed"
	textarea.style.left = "-9999px"
	textarea.style.opacity = "0"

	document.body.appendChild(textarea)

	textarea.select()

	document.execCommand("copy")

	textarea.remove()
}

/**
 * Свойства кнопки копирования.
 */
type TCopyButtonProps = {
	/** Текст кнопки. */
	children: string
	/** Значение, которое копируется в clipboard при клике. */
	value: string
}

/**
 * Отдельная memo-кнопка.
 *
 * Состояние "Copied" хранится непосредственно здесь,
 * поэтому клик по одной кнопке НЕ вызывает rerender
 * всей таблицы иконок.
 */
const CopyButton = memo(({ children, value }: TCopyButtonProps) => {
	const [copied, setCopied] = useState(false)

	const timeoutRef = useRef<number | undefined>(undefined)

	const handleClick = async () => {
		try {
			await copyText(value)

			setCopied(true)

			window.clearTimeout(timeoutRef.current)

			timeoutRef.current = window.setTimeout(() => {
				setCopied(false)
			}, 1000)
		} catch (error) {
			console.error("Не удалось скопировать значение иконки:", error)
		}
	}

	return (
		<button type="button" className="icon-copy-button" onClick={handleClick} title={`Copy: ${value}`}>
			{copied ? "Copied!" : children}
		</button>
	)
})

CopyButton.displayName = "CopyButton"

/**
 * Свойства карточки иконки.
 */
type TIconCardProps = {
	/** Метаданные отображаемой иконки. */
	icon: TIconItem
}

/**
 * Карточка также memo.
 *
 * После рендера карточка изменится только если
 * изменится сам объект icon.
 */
const IconCard = memo(({ icon }: TIconCardProps) => {
	const { Component, componentName, name } = icon

	const iconUsage = `<Icon name="${name}" />`

	const componentUsage = `<${componentName} />`

	return (
		<article className="icon-card">
			<div className="icon-preview">
				<Component />
			</div>

			<div className="icon-name" title={name}>
				{name}
			</div>

			<div className="icon-actions">
				{/*
				 * Первая кнопка:
				 *
				 * Текст кнопки = настоящее имя.
				 * Clipboard = настоящее имя.
				 */}
				<CopyButton value={name}>{name}</CopyButton>

				{/*
				 * Вторая кнопка:
				 *
				 * <Icon name="ArrowLeft" />
				 */}
				<CopyButton value={iconUsage}>{iconUsage}</CopyButton>

				{/*
				 * Третья кнопка:
				 *
				 * <ArrowLeftIcon />
				 */}
				<CopyButton value={componentUsage}>{componentUsage}</CopyButton>
			</div>
		</article>
	)
})

IconCard.displayName = "IconCard"

/**
 * Свойства виртуальной сетки иконок.
 */
type TVirtualIconGridProps = {
	/** Отфильтрованный список иконок для отображения. */
	icons: TIconItem[]
}

/**
 * Виртуальная сетка.
 *
 * Важно:
 *
 * мы НЕ создаём React-компоненты для всех ~4000 SVG.
 *
 * В DOM одновременно находятся максимум:
 *
 * 16 строк × 8 колонок = 128 иконок.
 *
 * Пользователь при этом видит:
 *
 * 8 строк × 8 колонок = 64 иконки.
 */
const VirtualIconGrid = ({ icons: filteredIcons }: TVirtualIconGridProps) => {
	const [scrollTop, setScrollTop] = useState(0)

	/**
	 * Полное количество виртуальных строк.
	 */
	const totalRowCount = Math.ceil(filteredIcons.length / COLUMN_COUNT)

	/**
	 * Полная виртуальная высота.
	 *
	 * Именно благодаря этому scrollbar ведёт себя так,
	 * словно на странице реально находятся все иконки.
	 */
	const totalHeight = totalRowCount * ROW_HEIGHT

	/**
	 * Строка, которая сейчас находится сверху viewport.
	 */
	const visibleStartRow = Math.floor(scrollTop / ROW_HEIGHT)

	/**
	 * Начинаем немного выше текущей видимой области.
	 */
	const desiredStartRow = Math.max(0, visibleStartRow - OVERSCAN_ROW_COUNT)

	/**
	 * Не позволяем последнему virtual window выйти
	 * за конец списка.
	 *
	 * Благодаря этому даже в самом низу списка,
	 * если элементов достаточно, продолжаем держать
	 * около 128 карточек.
	 */
	const startRow = Math.min(desiredStartRow, Math.max(0, totalRowCount - RENDER_ROW_COUNT))

	const endRow = Math.min(totalRowCount, startRow + RENDER_ROW_COUNT)

	const startIndex = startRow * COLUMN_COUNT

	const endIndex = Math.min(filteredIcons.length, endRow * COLUMN_COUNT)

	/**
	 * Вот здесь происходит сама виртуализация.
	 *
	 * Например:
	 *
	 * filteredIcons = 4081
	 * renderedIcons ≈ 128
	 */
	const renderedIcons = filteredIcons.slice(startIndex, endIndex)

	/**
	 * Перемещаем отрисованный участок на его реальное
	 * место внутри большого виртуального контейнера.
	 */
	const offsetTop = startRow * ROW_HEIGHT

	const handleScroll = (event: React.UIEvent<HTMLDivElement>) => {
		setScrollTop(event.currentTarget.scrollTop)
	}

	return (
		<div className="virtual-viewport" onScroll={handleScroll}>
			<div
				className="virtual-space"
				style={{
					height: totalHeight,
				}}
			>
				<div
					className="virtual-grid"
					style={{
						transform: `translateY(${offsetTop}px)`,
					}}
				>
					{renderedIcons.map((icon) => (
						<IconCard key={icon.componentName} icon={icon} />
					))}
				</div>
			</div>
		</div>
	)
}

/**
 * Демо-страница документации иконок.
 *
 * Содержит поиск по названию и виртуальную сетку карточек иконок
 * с копированием имени, JSX- и компонентного использования в clipboard.
 */
const App = () => {
	const [search, setSearch] = useState("")

	/**
	 * React может немного отложить обновление тяжёлой сетки,
	 * сохраняя input максимально отзывчивым.
	 */
	const deferredSearch = useDeferredValue(search)

	const filteredIcons = useMemo(() => {
		const query = deferredSearch.trim().toLowerCase()

		if (!query) {
			return icons
		}

		return icons.filter((icon) => icon.searchValue.includes(query))
	}, [deferredSearch])

	return (
		<main className="icons-docs">
			<header className="icons-header">
				<div>
					<h1 className="icons-title">List of icons</h1>

					<div className="icons-counter">
						{filteredIcons.length === icons.length
							? `${icons.length} icons`
							: `${filteredIcons.length} of ${icons.length} icons`}
					</div>
				</div>

				<input
					className="icons-search"
					type="search"
					value={search}
					onChange={(event) => setSearch(event.target.value)}
					placeholder={`Search ${icons.length} icons`}
					autoComplete="off"
					spellCheck={false}
				/>
			</header>

			{filteredIcons.length > 0 ? (
				<VirtualIconGrid icons={filteredIcons} />
			) : (
				<div className="icons-empty">
					No icons found for &quot;
					{search}
					&quot;
				</div>
			)}
		</main>
	)
}

export default App
