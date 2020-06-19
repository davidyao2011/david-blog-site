import React from "react"
import Layout from "../components/layout"
import Metadata from "../components/metadata"
import ContactForm from "../components/contactForm"
export default function Contact() {
  return (
    <Layout>
      <Metadata title="contact" description="This is my contact page" />
      <h1>Contact Us</h1>
      <ContactForm title="https://www.flexyform.com/f/44b4cde2bdb01787fd304d99dc7c115099b7ed21" />
    </Layout>
  )
}
