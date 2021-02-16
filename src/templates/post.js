import React from "react"
import { Link, graphql } from "gatsby"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"

import Layout from "../components/layout"

import style from "./post.module.css"

function PreviewImage(data) {
  return (
    <img
      src={data.data.data.post.previewImage.file.url}
      alt="{data.post.title}"
    />
  )
}

function PreviewVideo(data) {
  return (
    <iframe
      title={data.data.data.post.videoUrl}
      width="560"
      height="315"
      src={"https://www.youtube.com/embed/" + data.data.data.post.videoUrl}
      frameBorder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
    ></iframe>
  )
}

function Preview(data) {
  if (data.data.post.videoUrl == undefined) {
    return <PreviewImage data={data} />
  } else {
    return <PreviewVideo data={data} />
  }
}
const Post = ({ data }) => {
  return (
    <Layout>
      <div className={style.postMain}>
        <Preview data={data} />
        <div className={style.title}>
          <h1>{data.post.title}</h1>
          <h2>
            {data.post.dateCreated} -{" "}
            <Link to="/about">By Dr. Catherine O'Leary</Link>
          </h2>
        </div>
        <div>
          {documentToReactComponents(JSON.parse(data.post.postBody.raw))}
        </div>
      </div>
    </Layout>
  )
}

export default Post

export const pageQuery = graphql`
  query($slug: String!) {
    post: contentfulBlogPost(slug: { eq: $slug }) {
      dateCreated(formatString: "DD/MM/YYYY")
      videoUrl
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
