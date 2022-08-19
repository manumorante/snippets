export function debounce(func, duration) {
  let timeoutId

  return function () {
    if (timeoutId) {
      clearTimeout(timeoutId)
    }

    const context = this
    const args = arguments

    timeoutId = setTimeout(() => {
      func.apply(context, args)
    }, duration)
  }
}
