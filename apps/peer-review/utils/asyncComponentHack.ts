// TODO: Remove this once either TypeScript or Next.js fixes this issue
export function asyncComponentHack<T, R>(fn: (arg: T) => Promise<R>): (arg: T) => R {
  return fn as (arg: T) => R
}
