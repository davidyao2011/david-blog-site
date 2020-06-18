import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../styles/style.scss"
import layoutStyles from "./layout.module.scss"

export default function Layout({ children }) {
  return (
    <div className={layoutStyles.container}>
      <div className={layoutStyles.content}>
        <Header />
      </div>
      <div className={layoutStyles.mainContent}>{children}</div>

      <Footer />
    </div>
  )
}
