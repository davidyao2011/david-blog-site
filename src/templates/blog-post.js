import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import postSyles from "./blogPost.module.scss"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        title
        date(formatString: "DD MMMM, YYYY")
        description
        featured {
          childImageSharp {
            fluid(maxWidth: 750) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      timeToRead
      html
    }
  }
`

const BlogPost = props => {
  return (
    <Layout>
      <Metadata titl={props.data.markdownRemark.frontmatter.title} description = {props.data.markdownRemark.frontmatter.description} />
      <div className={postSyles.content}>
        <h1>{props.data.markdownRemark.frontmatter.title}</h1>
        <span className={postSyles.meta}>
          Posted on {props.data.markdownRemark.frontmatter.date}{" "}
          <span> / </span> {props.data.markdownRemark.timeToRead} min read
        </span>
        {props.data.markdownRemark.frontmatter.featured && (
          <Img
            className={postSyles.featured}
            fluid={
              props.data.markdownRemark.frontmatter.featured.childImageSharp
                .fluid
            }
            alt={props.data.markdownRemark.frontmatter.title}
          />
        )}
        <div
          dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}
        ></div>
      </div>
    </Layout>
  )
}

export default BlogPost
