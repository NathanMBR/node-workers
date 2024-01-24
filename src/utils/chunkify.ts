/**
 * Splits an array into chunks of approximately equal size
 * @param array An array of jobs to be executed
 * @param threads Available threads to be used
 * @returns An array of arrays with same length as threads, with each internal array containing a piece of work to be executed by a thread
 */
export const chunkify = <T>(array: Array<T>, threads: number): Array<Array<T>> => {
  const chunks: Array<Array<T>> = []

  for (let i = threads; i > 0; i--) {
    const splicedArray = array.splice(0, Math.ceil(array.length / i))
    chunks.push(splicedArray)
  }

  return chunks
}
