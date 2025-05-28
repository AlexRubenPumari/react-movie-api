import { THEME } from './constants'

export default function getConfigParticles (theme) {
  return () => ({
    background: {
      color: {
        value: 'inherit'
      }
    },
    fpsLimit: 30,
    particles: {
      number: {
        value: 200,
        density: {
          enable: true,
          area: 1000
        }
      },
      // particles color
      color: {
        value: theme === THEME.DARK ? '#fff' : '#ff0000'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: { min: 0.2, max: 0.8 },
        animation: {
          enable: true,
          speed: 2
        }
      },
      size: {
        value: { min: 2, max: 4 }
      },
      move: {
        enable: true,
        speed: 0.3,
        direction: 'none',
        random: true,
        straight: false,
        attract: {
          enable: false,
          rotate: {
            x: 600,
            y: 1200
          }
        }
      }
    },
    detectRetina: true
  })
}
