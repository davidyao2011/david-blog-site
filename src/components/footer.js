import React from "react"
import footerStyles from "./footer.module.scss"
import { useStaticQuery, graphql } from "gatsby"

export default function Footer() {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
          }
        }
      }
    `
  )
  return (
    <footer className={footerStyles.siteFooter}>
      <div className={footerStyles.container}>
        <p>
          Site developed by {data.site.siteMetadata.author} &copy; {new Date().getFullYear().toString()}{" "}
        </p>
      </div>
    </footer>
  )
}
