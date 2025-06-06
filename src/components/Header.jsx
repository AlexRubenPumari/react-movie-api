import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import { getThemePreference } from '../logic/theme'
import { THEME } from '../config/constants'
import LOGO70x70 from '../assets/logo70x70.jpg'
import ToggleButton from './ToggleButton.jsx'

export default function Header () {
  const { setLightTheme, setDarkTheme } = useContext(ThemeContext)

  return (
    <header className='header'>
      <a href='#' className='header__logo' tabIndex={-1}>
        <img src={LOGO70x70} alt='Logotipo' />
      </a>
      <div className='header__btn'>
        <label>Modo oscuro</label>
        <ToggleButton
          initialToggle={() => getThemePreference() === THEME.DARK}
          callbackOn={() => setDarkTheme()}
          callbackOff={() => setLightTheme()}
        />
      </div>
    </header>
  )
}
