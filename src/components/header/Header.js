import React from 'react'
import  style  from "./Header.module.css"

const Header = () => {
  return (
    <header className={style.header}>
        <div onClick={() => window.scroll(0,0)}>BINGE WATCH</div>
    </header>
  )
}

export default Header