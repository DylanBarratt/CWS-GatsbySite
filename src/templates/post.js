import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

import style from "./post.module.css"

const Post = ({ data }) => {
  return (
    <Layout>
      <div className={style.postMain}>
        <img src={data.post.previewImage.file.url} alt="{data.post.title}" />
        <div className={style.title}>
          <h1>{data.post.title}</h1>
          <h2>
            {data.post.dateCreated} -{" "}
            <Link to="/about">By Dr. Catherine O'Leary</Link>
          </h2>
        </div>
        <p>{documentToReactComponents(JSON.parse(data.post.postBody.raw))}</p>
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      dateCreated(formatString: "DD/MM/YYYY")
      title
      previewImage {
        file {
          url
        }
      }
      postBody {
        raw
      }
    }
  }
`
