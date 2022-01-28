
/**
 * "Mixes the given value into the given object, returning the result."
 * 
 * The function takes three arguments:
 * 
 * * `obj`: The object to mix into.
 * * `name`: The name of the property to mix into the object.
 * * `value`: The value to mix into the object.
 * 
 * The function returns the object with the given value mixed into it.
 * 
 * If the value is undefined, the function returns the object as-is.
 * 
 * If the value is defined, the function returns the object with the given value mixed into it.
 * 
 * The function is curried.
 * @param {Inp} obj - Inp
 * @param {TName} name - TName
 * @param {TValue | undefined} value - TValue | undefined
 * @returns The object with the new property.
 */
export const mix = <Inp, TName extends string, TValue extends unknown>(
    obj: Inp,
    name: TName,
    value: TValue | undefined
): Inp & { [T in TName]?: TValue } => {
    return value
        ? Object.assign(obj, { [name]: value })
        : obj;
}