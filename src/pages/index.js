import React from "react"
import { Link } from "gatsby"

import style from "./index.module.css"

import Layout from "../components/layout"

export default function Home() {
  return (
    <Layout>
      <div className={style.one}>
        <div className={style.desc}>
          <h1>Coping with Psoriasis</h1>
          <h4>Tips from a psychologist with psoriasis</h4>
        </div>
        <button>
          <Link to="#">View Posts</Link>
        </button>
      </div>
    </Layout>
  )
}
