import React from "react"

import Layout from "../components/layout"

import style from "./about.module.css"

import heroImage from "../images/psoriasisanddiet.jpg"

export default function about() {
  return (
    <Layout>
      <div className={style.main}>
        <h1 className={style.title}>About Me</h1>
        <img
          src={heroImage}
          className={style.img}
          alt="Books, tea, and nuts!"
        />
        <br />
        <p>
          I’ve had psoriasis since childhood – for over thirty years – and I am
          also a Consultant Clinical Psychologist. <br /> This is not another
          ‘Cure for Psoriasis’ website. Like you, I would love to discover a
          cure but in the mean time, I need to learn to live with my condition.{" "}
          <br />
          For many years I’ve worked with people living with chronic illness,
          from heart failure to cystic fibrosis, and I’ve learned a lot about
          how to cope with poor health and appearance differences. <br />
          I’ve created this blog to share my experience as a clinician as well
          as someone with psoriasis. I hope it will help you to cope too. <br />
          <br />
          Check out my academic publications{" "}
          <a href="https://www.researchgate.net/profile/Catherine_Oleary8">
            here.
          </a>
        </p>
      </div>
    </Layout>
  )
}
