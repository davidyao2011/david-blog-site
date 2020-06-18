import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"

export default function Home() {
  return (
    <Layout>
      <Metadata title="home" description="This is my home page" />
      <h1>Home page</h1>
      <p>I am David</p>
    </Layout>
  )
}
