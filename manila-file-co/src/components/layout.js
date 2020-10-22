import React from "react"
import "./layout.css"
import Helmet from "react-helmet"
import favicon from "../../static/favicon.ico"
export default function Layout({ children }) {
  return (
    <div id="layoutWrapper">
      <Helmet>
        <link rel="icon" href={favicon} />
      </Helmet>

      {children}
    </div>
  )
}
