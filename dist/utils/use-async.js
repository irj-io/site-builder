import { useCallback, useLayoutEffect, useReducer, useRef } from 'react';
/*
 * React currently throws a warning when using useLayoutEffect on the server.
 * To get around it, we can conditionally useEffect on the server (no-op) and
 * useLayoutEffect in the browser. We need useLayoutEffect because we want
 * `connect` to perform sync updates to a ref to save the latest props after
 * a render is actually committed to the DOM.
 */
const useBrowserLayoutEffect = typeof window !== 'undefined' ? useLayoutEffect : () => { };
const useSafeDispatch = (dispatch) => {
    const mounted = useRef(false);
    useBrowserLayoutEffect(() => {
        mounted.current = true;
        return () => {
            mounted.current = false;
        };
    }, []);
    return useCallback((...args) => (mounted.current ? dispatch(...args) : undefined), [dispatch]);
};
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
export function useAsync({ initialState, throwErrors, } = {}) {
    const defaultInitialState = { data: null, error: null, status: 'idle' };
    const initialStateRef = useRef(Object.assign(Object.assign({}, defaultInitialState), initialState));
    const [{ status, data, error }, setState] = useReducer((state, action) => (Object.assign(Object.assign({}, state), action)), initialStateRef.current);
    const safeSetState = useSafeDispatch(setState);
    const setData = useCallback((data) => safeSetState({ data, status: 'resolved' }), [safeSetState]);
    const setError = useCallback((error) => safeSetState({ error, status: 'rejected' }), [safeSetState]);
    const reset = useCallback(() => safeSetState(initialStateRef.current), [safeSetState]);
    const run = useCallback((promise) => {
        if (!promise || !promise.then) {
            throw new Error(`The argument passed to useAsync().run must be a promise. Maybe a function that's passed isn't returning anything?`);
        }
        safeSetState({ status: 'pending' });
        return promise.then((data) => {
            setData(data);
            return data;
        }, (error) => {
            setError(error);
            // Only reject if explicitly asked to. Errors are already
            // handled and passed along.
            if (throwErrors) {
                return Promise.reject(error);
            }
            else {
                return null;
            }
        });
    }, [safeSetState, setData, setError, throwErrors]);
    const methods = {
        setData,
        setError,
        run,
        reset,
    };
    switch (status) {
        case 'idle':
            return Object.assign(Object.assign({}, methods), { status: 'idle', error: null, data: null });
        case 'pending':
            return Object.assign(Object.assign({}, methods), { status: 'pending', error: null, data: null });
        case 'resolved':
            return Object.assign(Object.assign({}, methods), { status: 'resolved', error: null, data });
        case 'rejected':
            return Object.assign(Object.assign({}, methods), { status: 'rejected', error, data: null });
    }
}
//# sourceMappingURL=use-async.js.map