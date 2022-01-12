export default async function tryCatch(
  promise: Promise<any>
): Promise<[any, any]> {
  try {
    const data = await promise;
    return [data, null];
  } catch (e) {
    console.error(e);
    return [null, e];
  }
}
