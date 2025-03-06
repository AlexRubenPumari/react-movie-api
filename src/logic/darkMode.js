import { setPropertyValue } from './customProperties.js'
export function toggleDarkMode (isEnable) {
  if (isEnable) {
    setPropertyValue('--co-primary-10', '--co-white')
    setPropertyValue('--co-primary-20', '--co-white-20')
    setPropertyValue('--co-secondary-10', '--co-black')
    setPropertyValue('--co-secondary-20', '--co-black-10')
    setPropertyValue('--co-secondary-30', '--co-black-20')
    setPropertyValue('--co-terciary-40', '--co-secondary-20')
  } else {
    setPropertyValue('--co-primary-10', '--co-black')
    setPropertyValue('--co-primary-20', '--co-black-20')
    setPropertyValue('--co-secondary-10', '--co-white')
    setPropertyValue('--co-secondary-20', '--co-white-10')
    setPropertyValue('--co-secondary-30', '--co-white-20')
    setPropertyValue('--co-terciary-40', '--co-ligth-blue')
  }
}
