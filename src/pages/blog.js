import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "./blog.module.scss"

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
            fields {
              slug
            }
          }
        }
      }
    }
  `)
  const postLinks = data.allMarkdownRemark.edges.map(({ node }) => {
    const { slug } = node.fields
    const { title, date } = node.frontmatter
    return (
      <li className={blogStyles.post} key={title}>
        <Link to={`/blog/${slug}`}>
          <h2>{title}</h2>
          <p>{date}</p>
        </Link>
      </li>
    )
  })
  return (
    <Layout>
      <h1>BlogPage</h1>
      <ol className={blogStyles.posts}>{postLinks}</ol>
    </Layout>
  )
}

export default BlogPage
