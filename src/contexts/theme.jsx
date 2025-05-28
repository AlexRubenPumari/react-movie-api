import { createContext } from 'react'
import { useTheme } from '../hooks/useTheme'

export const ThemeContext = createContext()
export default function ThemeProvider ({ children }) {
  const { theme, setLightTheme, setDarkTheme } = useTheme()

  return (
    <ThemeContext.Provider value={{
      theme,
      setLightTheme,
      setDarkTheme
    }}
    >
      {children}
    </ThemeContext.Provider>
  )
}
