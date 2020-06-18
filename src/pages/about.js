import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
export default function About() {
  return (
    <Layout>
      <Metadata title="about" description="This is my about page" />
      <h1>About page</h1>
      <p>About David Yao</p>
    </Layout>
  )
}
