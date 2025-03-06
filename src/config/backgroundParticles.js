const configParticles = () => ({
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
    color: {
      value: '#fff'
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
export default configParticles
