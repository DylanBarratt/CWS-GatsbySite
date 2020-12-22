import React from "react"
import { Link } from "gatsby"
import headerStyle from "./header.module.css"
import logo from "../images/pfp.jpg"

export default function Header() {
  return (
    <div className={headerStyle.header1}>
      <img src={logo} alt="Catherine Smiling" />
      <div className={headerStyle.title}>
        <h2>Coping with Psoriasis</h2>
        <h3>Tips from a psychologist with psoriasis</h3>
      </div>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/posts">Posts</Link>
        </li>
      </ul>
    </div>
  )
}
