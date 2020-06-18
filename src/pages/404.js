import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

export default function NotFound() {
  return (
    <Layout>
      <h1>404: page not found</h1>
      <p>
        <Link to="/blog/">Check out our articles</Link>
      </p>
    </Layout>
  )
}
