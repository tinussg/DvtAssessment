import { environment } from "src/environments/environment";

function baseUrlArray(): Primitive[] {
	return [environment.apiUrl].filter(isNonNull);
}

export function serverUrl(...parts: Primitive[]): string {
	return pathify(...baseUrlArray().concat(parts));
}

export type Primitive = string | number | boolean;

export function pathify(...parts: Primitive[]): string {
	return parts.map(part => trimSlash(part.toString())).join('/');
}

export function trimSlash(str: string): string {
	return str.replace(/^\/|\/$/g, '');
}

export function isNonNull<T>(value: T): value is NonNullable<T> {
	return value !== null && value !== undefined;
}
