import { useState, useEffect } from 'react'

export default function ToggleButton ({ callbackOn, callbackOff }) {
  const [toggle, setToggle] = useState(true)
  const toggleClassName = `toggleBtn ${toggle ? 'on' : 'off'}`
  useEffect(() => {
    if (toggle) {
      callbackOn()
    } else {
      callbackOff()
    }
  }, [toggle])
  return (
    <div className={toggleClassName} onClick={() => setToggle(!toggle)}>
      <div className='toggleBtn__thumb' />
    </div>
  )
}
