import { parentPort } from "node:worker_threads"

if (!parentPort)
  throw new Error("No start parent port found")

parentPort.on("message", (jobs: Array<number>) => {
  for (const job of jobs) {
    let count = 0
    for (let i = 0; i < job; i++) {
      count++
    }
  }

  if (!parentPort)
    throw new Error("No finish parent port found")

  parentPort.postMessage("done")
})
