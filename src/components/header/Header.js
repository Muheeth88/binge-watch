import React from 'react'
import  style  from "./Header.module.css"

const Header = () => {
  return (
    <header className={style.header}>
        <h1 onClick={() => window.scroll(0,0)}>Binge Watch</h1>
    </header>
  )
}

export default Header