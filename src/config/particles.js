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
        value: 400,
        density: {
          enable: true,
          area: 1000
        }
      },
      // particles color
      color: {
        value: theme === THEME.DARK ? '#fff' : 'hsl(200, 25%, 35%)'
      },
      shape: {
        type: 'circle'
      },
      opacity: {
        value: { min: theme === THEME.DARK ? 0.2 : 0.4, max: 0.8 },
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
