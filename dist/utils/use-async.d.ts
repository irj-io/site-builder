interface AsyncIdleState {
    data: null;
    error: null;
    status: 'idle';
}
interface AsyncPendingState {
    data: null;
    error: null;
    status: 'pending';
}
interface AsyncResolvedState<T> {
    data: T;
    error: null;
    status: 'resolved';
}
interface AsyncRejectedState<E> {
    data: null;
    error: E;
    status: 'rejected';
}
type AsyncState<T, E> = AsyncIdleState | AsyncPendingState | AsyncResolvedState<T> | AsyncRejectedState<E>;
interface AsyncMethods<T, E> {
    setData: (data: AsyncState<T, E>['data']) => void;
    setError: (error: AsyncState<T, E>['error']) => void;
    run: (promise: Promise<AsyncState<T, E>['data']>) => Promise<T | E | null>;
    reset: () => void;
}
type AsyncIdleResult<T, E> = AsyncMethods<T, E> & AsyncIdleState;
type AsyncPendingResult<T, E> = AsyncMethods<T, E> & AsyncPendingState;
type AsyncResolvedResult<T, E> = AsyncMethods<T, E> & AsyncResolvedState<T>;
type AsyncRejectedResult<T, E> = AsyncMethods<T, E> & AsyncRejectedState<E>;
type AsyncResult<T, E> = AsyncIdleResult<T, E> | AsyncPendingResult<T, E> | AsyncResolvedResult<T, E> | AsyncRejectedResult<T, E>;
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
export declare function useAsync<T = unknown, E = string>({ initialState, throwErrors, }?: {
    initialState?: AsyncState<T, E>;
    throwErrors?: boolean;
}): AsyncResult<T, E>;
export {};
