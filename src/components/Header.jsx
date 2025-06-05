import LOGO70x70 from '../assets/logo70x70.jpg'
import ToggleButton from './ToggleButton.jsx'
import { useContext } from 'react'
import { ThemeContext } from '../contexts/theme'

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
          callbackOn={() => setDarkTheme(true)}
          callbackOff={() => setLightTheme(false)}
        />
      </div>
    </header>
  )
}
