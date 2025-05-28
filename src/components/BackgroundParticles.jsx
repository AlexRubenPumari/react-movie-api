import Particles, { initParticlesEngine } from '@tsparticles/react'
import { useState, useEffect, useMemo, useContext } from 'react'
import { ThemeContext } from '../contexts/theme'
import { loadSlim } from '@tsparticles/slim'
import getConfigParticles from '../config/particles'

export default function BackgroundParticles () {
  const { theme } = useContext(ThemeContext)
  const [init, setInit] = useState(false)
  useEffect(() => {
    initParticlesEngine(async engine => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])
  const particlesLoaded = container => {
    // console.log(container)
  }
  const options = useMemo(getConfigParticles(theme), [theme])

  if (!init) return <></>
  return (
    <Particles
      id='tsparticles'
      particlesLoaded={particlesLoaded}
      options={options}
    />
  )
}
