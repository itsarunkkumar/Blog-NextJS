"use client"

import React, { useContext } from 'react'
import Styles from './darkModeTooogle.module.css'
import { ThemeContex } from '../../../contex/ThemeContex'

function DarkModeToogle() {

    const {toogle, mode} = useContext(ThemeContex);

  return (
    <div className={Styles.container} onClick={toogle}>
      <div className={Styles.icon}>🌙</div>
      <div className={Styles.icon}>☀️</div>
      <div className={Styles.ball}  style={mode === "light" ? {left: "2px"} : {right: "2px"}}/>
    </div>
  )
}

export default DarkModeToogle
