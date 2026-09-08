import { type CSSProperties, type UIEvent, useEffect, useMemo, useRef, useState } from "react"

import { GRID_GAP, MIN_COLUMN_WIDTH, OVERSCAN_ROWS, ROW_STRIDE } from "../constants.js"

import type { TIconItem } from "../types.js"

/**
 * Аргументы виртуальной сетки.
 */
type TUseVirtualIconGridOptions = {
	icons: TIconItem[]

	/**
	 * При изменении значения список
	 * прокручивается в начало.
	 *
	 * Обычно содержит текущий tab и search.
	 */
	resetKey: string
}

/**
 * Размеры рабочей области virtual viewport.
 */
type TVirtualViewportMetrics = {
	/**
	 * Ширина content-area без horizontal padding.
	 */
	width: number

	/**
	 * Высота content-area без vertical padding.
	 */
	height: number

	/**
	 * Верхний padding scroll-container.
	 *
	 * Нужен для корректного преобразования scrollTop
	 * в позицию относительно virtual content.
	 */
	paddingTop: number
}

/**
 * Рассчитывает количество колонок,
 * помещающихся в доступную ширину.
 *
 * @param width Ширина content-area.
 * @returns Количество колонок.
 */
const getColumnCount = (width: number): number => {
	const count = Math.floor((width + GRID_GAP) / (MIN_COLUMN_WIDTH + GRID_GAP))

	return Math.max(1, count)
}

/**
 * Безопасно преобразует CSS pixel value в number.
 *
 * @param value CSS-значение.
 * @returns Числовое значение в px.
 */
const parsePixelValue = (value: string): number => {
	const parsed = Number.parseFloat(value)

	return Number.isFinite(parsed) ? parsed : 0
}

/**
 * Управляет адаптивной виртуализацией grid.
 *
 * Особенности:
 *
 * - количество колонок зависит от реальной ширины;
 * - учитывается padding scroll-container;
 * - количество видимых строк зависит от высоты viewport;
 * - scroll updates ограничены requestAnimationFrame;
 * - сверху и снизу используется overscan;
 * - при изменении tab/search scroll сбрасывается.
 */
export const useVirtualIconGrid = ({ icons, resetKey }: TUseVirtualIconGridOptions) => {
	const viewportRef = useRef<HTMLDivElement>(null)

	const animationFrameRef = useRef<number | null>(null)

	const latestScrollTopRef = useRef(0)

	const [scrollTop, setScrollTop] = useState(0)

	const [viewportMetrics, setViewportMetrics] = useState<TVirtualViewportMetrics>({
		width: 0,
		height: 0,
		paddingTop: 0,
	})

	/**
	 * Следим за реальными размерами scroll-container.
	 *
	 * `clientWidth` / `clientHeight` включают padding,
	 * поэтому вычитаем его перед расчётом grid.
	 */
	useEffect(() => {
		const element = viewportRef.current

		if (!element) {
			return
		}

		const updateSize = () => {
			const computedStyle = window.getComputedStyle(element)

			const paddingLeft = parsePixelValue(computedStyle.paddingLeft)

			const paddingRight = parsePixelValue(computedStyle.paddingRight)

			const paddingTop = parsePixelValue(computedStyle.paddingTop)

			const paddingBottom = parsePixelValue(computedStyle.paddingBottom)

			setViewportMetrics({
				width: Math.max(0, element.clientWidth - paddingLeft - paddingRight),

				height: Math.max(0, element.clientHeight - paddingTop - paddingBottom),

				paddingTop,
			})
		}

		updateSize()

		const observer = new ResizeObserver(updateSize)

		observer.observe(element)

		return () => {
			observer.disconnect()
		}
	}, [])

	/**
	 * При смене поиска или tab
	 * возвращаем каталог к началу.
	 */
	useEffect(() => {
		const element = viewportRef.current

		if (element) {
			element.scrollTop = 0
		}

		latestScrollTopRef.current = 0

		setScrollTop(0)
	}, [resetKey])

	/**
	 * Отменяем pending animation frame
	 * при unmount.
	 */
	useEffect(() => {
		return () => {
			if (animationFrameRef.current !== null) {
				cancelAnimationFrame(animationFrameRef.current)
			}
		}
	}, [])

	/**
	 * Количество колонок зависит
	 * только от доступной ширины.
	 */
	const columnCount = useMemo(() => getColumnCount(viewportMetrics.width), [viewportMetrics.width])

	/**
	 * Полное количество virtual rows.
	 */
	const totalRowCount = Math.ceil(icons.length / columnCount)

	/**
	 * Полная высота содержимого.
	 *
	 * После последней строки gap не нужен.
	 */
	const totalHeight = totalRowCount === 0 ? 0 : totalRowCount * ROW_STRIDE - GRID_GAP

	/**
	 * scrollTop scroll-container включает
	 * верхний padding.
	 *
	 * Переводим его в координату относительно
	 * начала непосредственно virtual content.
	 */
	const contentScrollTop = Math.max(0, scrollTop - viewportMetrics.paddingTop)

	/**
	 * Первая строка, пересекающая viewport.
	 */
	const firstVisibleRow = Math.floor(contentScrollTop / ROW_STRIDE)

	/**
	 * Конец видимой области.
	 */
	const visibleBottom = contentScrollTop + viewportMetrics.height

	/**
	 * Последняя потенциально видимая строка.
	 */
	const lastVisibleRow = Math.ceil(visibleBottom / ROW_STRIDE)

	/**
	 * Добавляем overscan сверху.
	 */
	const startRow = Math.max(0, firstVisibleRow - OVERSCAN_ROWS)

	/**
	 * Добавляем overscan снизу.
	 */
	const endRow = Math.min(totalRowCount, lastVisibleRow + OVERSCAN_ROWS)

	const startIndex = startRow * columnCount

	const endIndex = Math.min(icons.length, endRow * columnCount)

	/**
	 * Только эти иконки реально попадают в React DOM.
	 */
	const visibleIcons = icons.slice(startIndex, endIndex)

	/**
	 * Сдвиг rendered window
	 * относительно начала virtual content.
	 */
	const offsetTop = startRow * ROW_STRIDE

	const gridStyle: CSSProperties = {
		gridTemplateColumns: `repeat(${columnCount}, minmax(0, 1fr))`,

		transform: `translateY(${offsetTop}px)`,
	}

	const spacerStyle: CSSProperties = {
		height: totalHeight,
	}

	/**
	 * Scroll может срабатывать очень часто.
	 *
	 * Ограничиваем React state update
	 * одним обновлением на animation frame.
	 */
	const handleScroll = (event: UIEvent<HTMLDivElement>) => {
		latestScrollTopRef.current = event.currentTarget.scrollTop

		if (animationFrameRef.current !== null) {
			return
		}

		animationFrameRef.current = requestAnimationFrame(() => {
			setScrollTop(latestScrollTopRef.current)

			animationFrameRef.current = null
		})
	}

	return {
		columnCount,
		gridStyle,
		handleScroll,
		spacerStyle,
		viewportRef,
		visibleIcons,
	}
}
