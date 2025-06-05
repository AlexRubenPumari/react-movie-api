import { useEffect, useState } from 'react'

export default function ToggleButton ({
  initialToggle = false,
  callbackOn,
  callbackOff
}) {
  const [toggle, setToggle] = useState(initialToggle)
  useEffect(() => (toggle ? callbackOn() : callbackOff()), [toggle])
  const toggleClassName = `toggleBtn ${toggle ? 'on' : 'off'}`
  return (
    <div className={toggleClassName} onClick={() => setToggle(!toggle)}>
      <div className='toggleBtn__thumb' />
    </div>
  )
}
