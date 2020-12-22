import React from "react"

//components
import Header from "../components/header"

import style from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <Header />
      <main className={style.main}>{children}</main>
    </div>
  )
}
