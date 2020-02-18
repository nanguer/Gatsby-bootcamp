import React from "react"
import Layout from "../components/layout"
import { graphql, useStaticQuery, Link } from "gatsby"

import blogStyles from "./blog.module.scss"

const BlogPage = () => {
  const data = useStaticQuery(graphql`
    query {
      allContentfulBlogPost(sort: { fields: publishedDate, order: DESC }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString: "MMMM Do, YYYY")
          }
        }
      }
    }
  `)

  const postLinks = data.allContentfulBlogPost.edges.map(({ node }) => {
    const { slug, title, id, publishDate } = node

    return (
      <li className={blogStyles.post} key={id}>
        <Link to={`/blog/${slug}`}>
          <h2>{title}</h2>
          <p>{publishDate}</p>
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
