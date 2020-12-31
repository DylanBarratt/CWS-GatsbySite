import React from "react"
import { Helmet } from "react-helmet"

//components
import Header from "../components/header"

import style from "./layout.module.css"

export default function Layout({ children }) {
  return (
    <div>
      <Helmet>
        <meta charset="UTF-8" />
        <meta
          name="description"
          content="Tips from a psychologist with psoriasis"
        />
        <meta name="keywords" content="Psoriasis, Psychology, Coping" />
        <meta name="author" content="Catherine O'leary" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" type="image/png" href="favicon.ico" sizes="16x16" />
        <title>Coping With Psoriasis</title>
      </Helmet>
      <Header />
      <main className={style.main}>{children}</main>
    </div>
  )
}
