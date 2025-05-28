import { useState, useEffect } from 'react'
import { THEME } from '../config/constants'
import { changeTheme, getThemePreference } from '../logic/theme'

export function useTheme () {
  const [theme, setTheme] = useState(getThemePreference)
  const setLightTheme = () => setTheme(THEME.LIGHT)
  const setDarkTheme = () => setTheme(THEME.DARK)
  useEffect(() => {
    if (theme === THEME.LIGHT) changeTheme(theme)
    if (theme === THEME.DARK) changeTheme(theme)
  }, [theme])

  return { theme, setLightTheme, setDarkTheme }
}
