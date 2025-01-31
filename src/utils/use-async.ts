import { useCallback, useLayoutEffect, useReducer, useRef } from 'react'

/*
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We need useLayoutEffect because we want
 * `connect` to perform sync updates to a ref to save the latest props after
 * a render is actually committed to the DOM.
 */
const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : () => {}

const useSafeDispatch = (dispatch: (...args: unknown[]) => unknown) => {
	const mounted = useRef(false)

	useBrowserLayoutEffect(() => {
		mounted.current = true
		return () => {
			mounted.current = false
		}
	}, [])

	return useCallback(
		(...args: unknown[]) => (mounted.current ? dispatch(...args) : undefined),
		[dispatch]
	)
}

interface AsyncIdleState {
	data: null
	error: null
	status: 'idle'
}
interface AsyncPendingState {
	data: null
	error: null
	status: 'pending'
}
interface AsyncResolvedState<T> {
	data: T
	error: null
	status: 'resolved'
}
interface AsyncRejectedState<E> {
	data: null
	error: E
	status: 'rejected'
}
type AsyncState<T, E> =
	| AsyncIdleState
	| AsyncPendingState
	| AsyncResolvedState<T>
	| AsyncRejectedState<E>

interface AsyncMethods<T, E> {
	setData: (data: AsyncState<T, E>['data']) => void
	setError: (error: AsyncState<T, E>['error']) => void
	run: (promise: Promise<AsyncState<T, E>['data']>) => Promise<T | E | null>
	reset: () => void
}
type AsyncIdleResult<T, E> = AsyncMethods<T, E> & AsyncIdleState
type AsyncPendingResult<T, E> = AsyncMethods<T, E> & AsyncPendingState
type AsyncResolvedResult<T, E> = AsyncMethods<T, E> & AsyncResolvedState<T>
type AsyncRejectedResult<T, E> = AsyncMethods<T, E> & AsyncRejectedState<E>
type AsyncResult<T, E> =
	| AsyncIdleResult<T, E>
	| AsyncPendingResult<T, E>
	| AsyncResolvedResult<T, E>
	| AsyncRejectedResult<T, E>

/**
 * Example usage:
 * ```
 * const { data, error, status, run } = useAsync()
 *
 * useEffect(() => {
 *   run(actionThatReturnsPromise())
 * }, [run])
 * ```
 */
export function useAsync<T = unknown, E = string>({
	initialState,
	throwErrors,
}: {
	initialState?: AsyncState<T, E>
	throwErrors?: boolean
} = {}): AsyncResult<T, E> {
	const defaultInitialState: AsyncState<T, E> = { data: null, error: null, status: 'idle' }
	const initialStateRef = useRef({ ...defaultInitialState, ...initialState })
	const [{ status, data, error }, setState] = useReducer(
		(state, action) => ({ ...state, ...action }),
		initialStateRef.current
	)

	const safeSetState = useSafeDispatch(setState)

	const setData = useCallback(
		(data: AsyncState<T, E>['data']) => safeSetState({ data, status: 'resolved' }),
		[safeSetState]
	)
	const setError = useCallback(
		(error: AsyncState<T, E>['error']) => safeSetState({ error, status: 'rejected' }),
		[safeSetState]
	)
	const reset = useCallback(() => safeSetState(initialStateRef.current), [safeSetState])

	const run = useCallback(
		(promise: Promise<AsyncState<T, E>['data']>) => {
			if (!promise || !promise.then) {
				throw new Error(
					`The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`
				)
			}
			safeSetState({ status: 'pending' })
			return promise.then(
				(data) => {
					setData(data)
					return data
				},
				(error) => {
					setError(error)

					// Only reject if explicitly asked to. Errors are already
					// handled and passed along.
					if (throwErrors) {
						return Promise.reject(error)
					} else {
						return null
					}
				}
			)
		},
		[safeSetState, setData, setError, throwErrors]
	)

	const methods = {
		setData,
		setError,
		run,
		reset,
	}
	switch (status) {
		case 'idle':
			return {
				...methods,
				status: 'idle',
				error: null,
				data: null,
			}

		case 'pending':
			return {
				...methods,
				status: 'pending',
				error: null,
				data: null,
			}

		case 'resolved':
			return {
				...methods,
				status: 'pending',
				error: null,
				data,
			}

		case 'rejected':
			return {
				...methods,
				status: 'rejected',
				error,
				data: null,
			}
	}
}
