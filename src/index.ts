import { Worker } from "node:worker_threads"
import { availableParallelism } from "node:os"

import { chunkify } from "./utils"

const firstTimeMeasurement = performance.now()

const jobs = Array.from({ length: 100 }, () => 1e9)
const threads = availableParallelism()

let completedJobs = 0

const chunks = chunkify(jobs, threads)
chunks.forEach((chunk, index) => {
  const worker = new Worker("./build/worker.js")
  worker.postMessage(chunk)
  worker.on("message", () => {
    completedJobs++

    console.log(`Worker ${worker.threadId} with index ${index} finished`)

    if (completedJobs === threads) {
      const secondTimeMeasurement = performance.now()
      const timeInSeconds = Math.round((secondTimeMeasurement - firstTimeMeasurement) / 1000)

      console.log(`All ${threads} workers finished in approximately ${timeInSeconds} seconds`)
      process.exit(0)
    }
  })
})
