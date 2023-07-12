export function findIndex ({ arr = [], elementToMatch }) {
  return arr.findIndex((item) => {
    return item.id === elementToMatch
  })
}
export function increse ({ arr }) {
  arr.score++
}
export function decrese ({ arr }) {
  arr.score--
}
