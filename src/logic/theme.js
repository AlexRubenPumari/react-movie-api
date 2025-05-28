import { THEME } from '../config/constants.js'

export function changeTheme (theme) {
  console.log(`Setting theme to ${theme}...`)
  document.querySelector(':root').setAttribute('data-scheme', theme)
}

export function getThemePreference () {
  if (
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches
  ) return THEME.DARK

  return THEME.LIGHT
}
