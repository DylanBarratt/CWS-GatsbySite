import React from "react"

import { Link } from "gatsby"

import Layout from "../components/layout"

import style from "./404.module.css"

export default function Home() {
  return (
    <Layout>
      <div className={style.main}>
        <div>
          <h1>404 - Page not found</h1>
          <p>
            You seem to have stumbled upon a page that does not exist
            <span role="img" aria-label="Confused Face">
              😕
            </span>
            <br />
          </p>
          <Link to="/">Click here to return to the home page</Link>
        </div>
      </div>
    </Layout>
  )
}
