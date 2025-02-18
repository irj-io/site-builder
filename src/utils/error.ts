interface ErrorContext {
	label?: string
	[key: string]: unknown
}

// Create guaranteed error from javascript catch result
export const createError = (
	err: unknown,
	{ fallbackMessage } = { fallbackMessage: 'Unknown error' }
) => {
	if (err instanceof Error) {
		return err
	} else if (typeof err === 'string') {
		return new Error(err)
	} else {
		return new Error(fallbackMessage, { cause: err })
	}
}

export const captureError = (err: unknown, context?: ErrorContext) => {
	const error = createError(err)
	console.error(error)
	if (context) {
		console.table(context)
	}
}
