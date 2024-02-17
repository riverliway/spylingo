
/**
 * Paginates any array into subarrays. Each subarray will have length of
 * exactly `pageLength`, except the last subarray, which may have less.
 * @param array - the array to paginate
 * @param pageLength - the length of each subarray, must be a positive number
 * @returns a list of subarrays
 */
export const paginateArray = <T>(array: T[], pageLength: number): T[][] => {
  if (pageLength <= 0) return [array]
  if (array.length === 0) return [[]]
  const len = Math.floor(pageLength)

  const ret = []
  for (let i = 0; i < array.length / len; i++) {
    ret.push(array.slice(i * len, (i + 1) * len))
  }

  return ret
}
