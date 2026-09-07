import type { TIconLoader, TIconRegistry } from "../icon/Icon.types.js"

/**
 * Одна регистрация иконки конкретным владельцем.
 */
interface IRuntimeIconRegistration {
	/** Ленивый загрузчик иконки. */
	loader: TIconLoader

	/** Уникальный идентификатор конкретной регистрации. */
	token: symbol
}

/**
 * Внутреннее состояние runtime-реестра иконок.
 *
 * @remarks
 * Единый экземпляр хранится на `globalThis` под глобальным символом, благодаря чему
 * все копии пакета `@dubium/icons` в одной browser realm разделяют одно состояние.
 */
interface IRuntimeIconStore {
	/** Набор подписчиков, уведомляемых об изменении реестра. */
	listeners: Set<VoidFunction>

	/** Связь «владелец -> набор имён зарегистрированных иконок». */
	owners: Map<string, Set<string>>

	/** Связь «имя иконки -> (владелец -> регистрация иконки)». */
	registrations: Map<string, Map<string, IRuntimeIconRegistration>>

	/** Связь «владелец -> токен текущей активной регистрации». */
	ownerTokens: Map<string, symbol>

	/** Монотонно растущий номер версии реестра. */
	version: number
}

/**
 * Глобальный символ-ключ, под которым состояние реестра хранится на `globalThis`.
 */
const STORE_KEY = Symbol.for("@dubium/icons/runtime-registry")

/**
 * Создаёт новое пустое состояние runtime-реестра иконок.
 *
 * @returns Новое состояние реестра
 */
const createStore = (): IRuntimeIconStore => ({
	listeners: new Set(),
	owners: new Map(),
	registrations: new Map(),
	ownerTokens: new Map(),
	version: 0,
})

/**
 * Возвращает общее состояние runtime-реестра, создавая его при первом обращении.
 *
 * @returns Состояние реестра, общее для всех копий пакета в текущей browser realm
 */
const getStore = (): IRuntimeIconStore => {
	const runtime = globalThis as typeof globalThis & {
		[STORE_KEY]?: IRuntimeIconStore
	}

	runtime[STORE_KEY] ??= createStore()

	return runtime[STORE_KEY]
}

/**
 * Увеличивает версию реестра и уведомляет всех подписчиков об изменении.
 */
const notify = (): void => {
	const store = getStore()

	store.version += 1

	for (const listener of store.listeners) {
		listener()
	}
}

/**
 * Удаляет регистрацию владельца из реестра.
 *
 * @remarks
 * Если передан `token`, удаление выполняется только при совпадении с текущим
 * токеном владельца — это защищает свежую регистрацию от cleanup старой.
 *
 * @param owner - Идентификатор владельца
 * @param token - Ожидаемый токен текущей регистрации (опционально)
 * @returns `true`, если регистрация была удалена
 */
const removeOwner = (owner: string, token?: symbol): boolean => {
	const store = getStore()
	const currentToken = store.ownerTokens.get(owner)

	if (!currentToken) {
		return false
	}

	if (token && currentToken !== token) {
		return false
	}

	const names = store.owners.get(owner)

	if (names) {
		for (const name of names) {
			const registrations = store.registrations.get(name)

			if (!registrations) {
				continue
			}

			const registration = registrations.get(owner)

			if (!registration) {
				continue
			}

			if (registration.token !== currentToken) {
				continue
			}

			registrations.delete(owner)

			if (registrations.size === 0) {
				store.registrations.delete(name)
			}
		}
	}

	store.owners.delete(owner)
	store.ownerTokens.delete(owner)

	return true
}

/**
 * Регистрирует ленивый реестр иконок конкретного приложения или микрофронтенда.
 *
 * @remarks
 * Состояние реестра хранится на `globalThis` под символом `Symbol.for(...)`,
 * поэтому Host и Remote в одной browser realm видят одну регистрацию даже при
 * разных копиях пакета `@dubium/icons` в бандле.
 *
 * Повторная регистрация того же `owner` заменяет предыдущую.
 * Cleanup от старой регистрации не может удалить более новую регистрацию.
 *
 * @param owner - Идентификатор владельца реестра
 * @param icons - Реестр иконок с ленивыми загрузчиками
 * @returns Функция отмены именно этой регистрации; повторный вызов безопасен
 */
export const registerIcons = (owner: string, icons: TIconRegistry): VoidFunction => {
	const store = getStore()

	removeOwner(owner)

	const token = Symbol(owner)
	const names = new Set<string>()

	for (const [name, loader] of Object.entries(icons)) {
		const registrations = store.registrations.get(name) ?? new Map<string, IRuntimeIconRegistration>()

		registrations.set(owner, {
			loader,
			token,
		})

		store.registrations.set(name, registrations)
		names.add(name)
	}

	store.owners.set(owner, names)
	store.ownerTokens.set(owner, token)

	notify()

	let active = true

	return () => {
		if (!active) {
			return
		}

		active = false

		if (removeOwner(owner, token)) {
			notify()
		}
	}
}

/**
 * Удаляет текущую регистрацию владельца из runtime-реестра.
 *
 * @remarks
 * Удаляет все иконки, зарегистрированные указанным владельцем, и уведомляет
 * подписчиков об изменении реестра.
 *
 * @param owner - Идентификатор владельца реестра
 * @returns `true`, если регистрация существовала и была удалена
 */
export const removeIconOwner = (owner: string): boolean => {
	const removed = removeOwner(owner)

	if (removed) {
		notify()
	}

	return removed
}

/**
 * Возвращает ленивый загрузчик иконки по имени.
 *
 * @remarks
 * При совпадении имени у нескольких владельцев используется последняя регистрация.
 *
 * @param name - Имя иконки
 * @returns Загрузчик иконки или `undefined`, если иконка не зарегистрирована
 */
export const getRuntimeIconLoader = (name: string): TIconLoader | undefined => {
	const registrations = getStore().registrations.get(name)

	if (!registrations) {
		return undefined
	}

	let loader: TIconLoader | undefined

	for (const registration of registrations.values()) {
		loader = registration.loader
	}

	return loader
}

/**
 * Возвращает текущую версию runtime-реестра иконок.
 *
 * @remarks
 * Версия увеличивается при каждом изменении регистраций.
 *
 * @returns Текущая версия реестра
 */
export const getRuntimeIconsVersion = (): number => getStore().version

/**
 * Подписывается на изменения runtime-реестра иконок.
 *
 * @param listener - Функция, вызываемая при каждом изменении реестра
 * @returns Функция отписки
 */
export const subscribeRuntimeIcons = (listener: VoidFunction): VoidFunction => {
	const store = getStore()

	store.listeners.add(listener)

	return () => {
		store.listeners.delete(listener)
	}
}
