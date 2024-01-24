const firstTimeMeasurement = performance.now()

const jobs = Array.from({ length: 100 }, () => 1e9)

for (let job of jobs) {
  let count = 0

  for (let i = 0; i < job; i++) {
    count++
  }
}

const secondTimeMeasurement = performance.now()

const timeInSeconds = Math.round((secondTimeMeasurement - firstTimeMeasurement) / 1000)

console.log(`Time: ${timeInSeconds} seconds (approximately)`)
