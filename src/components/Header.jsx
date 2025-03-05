import LOGO70x70 from '../assets/logo_70x70.jpg'
import ToggleButton from './ToggleButton.jsx'

export default function Header () {
  function SetGlobalVariable (variable, value) {
    const root = document.documentElement
    if (value[0] === '-') {
      value = window.getComputedStyle(root).getPropertyValue(value)
    }
    root.style.setProperty(variable, value)
  }
  function enableDarkMode () {
    SetGlobalVariable('--co-primary-10', '--co-white')
    SetGlobalVariable('--co-primary-20', '--co-white-20')
    SetGlobalVariable('--co-secondary-10', '--co-black')
    SetGlobalVariable('--co-secondary-20', '--co-black-10')
    SetGlobalVariable('--co-secondary-30', '--co-black-20')
    SetGlobalVariable('--co-terciary-40', '--co-secondary-20')
  }
  function disableDarkMode () {
    SetGlobalVariable('--co-primary-10', '--co-black')
    SetGlobalVariable('--co-primary-20', '--co-black-20')
    SetGlobalVariable('--co-secondary-10', '--co-white')
    SetGlobalVariable('--co-secondary-20', '--co-white-10')
    SetGlobalVariable('--co-secondary-30', '--co-white-20')
    SetGlobalVariable('--co-terciary-40', '--co-ligth-blue')
  }
  return (
    <header className='header'>
      <a href='#' className='header__logo' tabIndex={-1}>
        <img src={LOGO70x70} alt='Logotipo' />
      </a>
      <div className='header__btn'>
        <label>Modo oscuro</label>
        <ToggleButton callbackOn={enableDarkMode} callbackOff={disableDarkMode} />
      </div>
    </header>
  )
}
