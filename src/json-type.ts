//export type JsonPrimitive = string | number | boolean | null
//export type JsonArray = Json[]
//export type JsonObject = { [key: string]: Json }
//export type JsonComposite = JsonArray | JsonObject
//export type Json = JsonPrimitive | JsonComposite

import { z } from 'zod'

export const JsonPrimitiveSchema = z.union([z.string(), z.number(), z.boolean(), z.null()])
export const JsonSchema: z.ZodType<Json> = z.lazy(() =>
	z.union([JsonPrimitiveSchema, z.array(JsonSchema), z.record(JsonSchema)])
)
export const JsonArraySchema = z.array(JsonSchema)
export const JsonObjectSchema = z.record(JsonSchema)
export const JsonCompositeSchema = z.union([JsonArraySchema, JsonObjectSchema])

export type JsonPrimitive = z.infer<typeof JsonPrimitiveSchema>
export type JsonArray = z.infer<typeof JsonArraySchema>
export type JsonObject = z.infer<typeof JsonObjectSchema>
export type JsonComposite = z.infer<typeof JsonCompositeSchema>
export type Json = JsonPrimitive | { [key: string]: Json } | Json[]

export function isJsonPrimitive(json: unknown): json is JsonPrimitive {
	return JsonPrimitiveSchema.safeParse(json).success
}
export function isJsonArray(json: unknown): json is JsonArray {
	return JsonArraySchema.safeParse(json).success
}
export function isJsonObject(json: unknown): json is JsonObject {
	return JsonObjectSchema.safeParse(json).success
}
export function isJsonComposite(json: unknown): json is JsonComposite {
	return JsonCompositeSchema.safeParse(json).success
}
export function isJson(json: unknown): json is Json {
	return JsonSchema.safeParse(json).success
}
