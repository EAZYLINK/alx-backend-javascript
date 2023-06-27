export default function iterateThroughObject (reportWithIterator) {
  let result = ''
  for (const employee of reportWithIterator.allEmployees) {
    result += `${employee} `
  }
  return result
}
