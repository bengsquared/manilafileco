import React from "react"
import Layout from "../components/layout"
import logo from "../img/manila.svg"
import tidyUp from "../img/tidyup.svg"
import Header from "../components/header"

export default function Home() {
  return (
    <Layout className="wrap">
      <Header currentPage="home" />
      <main>
        <section className="splash">
          <img alt="Manila logo" src={logo} className="BigImage center" />
          <h1>Manila File Company</h1>
          <h3>tools and ideas for the modern file system</h3>
        </section>
        <section className="body-section">
          <p>
            Inspired by some of the foundational figures in human computer
            interaction, Manila creates tools to make computing personal and
            innovate how we operate with our information at the most basic
            level.
          </p>
        </section>
        <section id="tools" className="body-section">
          <h4>Tools</h4>
          <hr />
        </section>
        <section className="grid-list">
          <img alt="tidyUp logo" className="gl-icon" src={tidyUp} />
          <div className="gl-name">
            <h5>
              <span className="red-title">tidyUp</span> helps you clean up your
              desktop and other large folders
            </h5>
          </div>
          <div className="gl-button1">Coming soon</div>
        </section>
      </main>
      <footer>
        <ul style={{ gridColumnStart: "4", gridColumnEnd: "6" }}>
          <li>
            <h4>Manila File Co.</h4>
          </li>
          <li>
            <h4>Made in California</h4>
          </li>
        </ul>
        <ul style={{ gridColumnStart: "8", gridColumnEnd: "10" }}>
          <li>
            <a href="https://www.notion.so/FileGraph-Tag-based-file-manager-8529875abc62435a9232b4cf1b45520b">
              <h4>About</h4>
            </a>
          </li>
          <li>
            <a href="mailto:bengg@mac.com">
              <h4>Contact</h4>
            </a>
          </li>
        </ul>
      </footer>
    </Layout>
  )
}
