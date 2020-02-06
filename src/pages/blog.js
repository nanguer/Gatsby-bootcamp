import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery } from "gatsby"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark {
        edges {
          node {
            frontmatter {
              title
              date
            }
          }
        }
      }
    }
  `)
  const postLinks = data.allMarkdownRemark.edges.map(blogLink => {
    const { title, date } = blogLink.node.frontmatter
    return (
      <li>
        <h2>{title}</h2>
        <p>{date}</p>
      </li>
    )
  })
  return (
    <Layout>
      <h1>BlogPage</h1>
      <ol>{postLinks}</ol>
    </Layout>
  )
}

export default BlogPage
