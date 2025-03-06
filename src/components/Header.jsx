import LOGO70x70 from '../assets/logo_70x70.jpg'
import ToggleButton from './ToggleButton.jsx'
import { toggleDarkMode } from '../logic/darkMode.js'

export default function Header () {
  return (
    <header className='header'>
      <a href='#' className='header__logo' tabIndex={-1}>
        <img src={LOGO70x70} alt='Logotipo' />
      </a>
      <div className='header__btn'>
        <label>Modo oscuro</label>
        <ToggleButton
          callbackOn={() => toggleDarkMode(true)}
          callbackOff={() => toggleDarkMode(false)}
        />
      </div>
    </header>
  )
}
