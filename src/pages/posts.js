import React from "react"
import { graphql, Link } from "gatsby"

import Layout from "../components/layout"

import Style from "./posts.module.css"

const PostIndex = ({ data }) => (
  <Layout>
    <div>
      <h1 id={Style.title}>
        Posts{" "}
        <span role="img" aria-label="Writing Hand">
          ✍️
        </span>
      </h1>
      <div className={Style.postCardGrid}>
        {data.allContentfulBlogPost.edges.map(({ node, index }) => (
          <Link to={`/posts/${node.slug}`} className={Style.postCardBody}>
            <div className={Style.postCard} key={index}>
              <Link to={`/posts/${node.slug}`}>
                <img src={node.previewImage.file.url} alt="post preview" />
                <h2>{node.title}</h2>
                <h3>{node.dateCreated}</h3>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  </Layout>
)

export default PostIndex

export const query = graphql`
  {
    allContentfulBlogPost(sort: { fields: [updatedAt] }) {
      edges {
        node {
          dateCreated(formatString: "DD/MM/YYYY")
          title
          slug
          previewImage {
            file {
              url
            }
          }
        }
      }
    }
  }
`
