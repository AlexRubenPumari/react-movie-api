export function getPropertyValue (property) {
  return window.getComputedStyle(document.documentElement).getPropertyValue(property)
}

export function setPropertyValue (property, newValue) {
  const root = document.documentElement
  if (newValue[0] === '-') {
    // If newValue also is a property custom
    newValue = getPropertyValue(newValue)
  }
  root.style.setProperty(property, newValue)
}
