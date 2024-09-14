import React from 'react'
import { useState, useEffect } from 'react'

function Darkmode() {

const [theme, setTheme] = useState('light-theme')

  const toggleTheme = () => {

    theme === "dark-theme" ? setTheme("light-theme") : setTheme("dark-theme");
    }
       useEffect(()=>{
          document.body.className = theme;
       }, [theme])

  return (
    <div>
      <h1>Light and Dark Mode</h1>
      <a href="#" className='dark-light-btn' onClick={() => toggleTheme()}>Dark Mode</a>
    </div>
  )
}

export default Darkmode
