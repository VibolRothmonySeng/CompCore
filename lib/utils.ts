// Function to format a number with commas
export const formatNumber = (x: number) => {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

// Function to round a number to two decimal places
export const round2 = (num: number) =>
  Math.round((num + Number.EPSILON) * 100) / 100

// Function to convert a MongoDB document's `_id` to a string
export function convertDocToObj(doc: any) {
  doc._id = doc._id.toString()
  return doc
}

export const formatId = (x: string) => {
  return `..${x.substring(20, 24)}`
}
