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
          <h2>tools and ideas for the modern file system</h2>
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
          <h3>Tools</h3>
          <hr />
        </section>
        <section className="grid-list">
          <img alt="tidyUp logo" className="gl-icon" src={tidyUp} />
          <div className="gl-name">
            <h4>
              <span className="red-title">{"tidyUp "}</span>
              helps you clean up your desktop and other large folders
            </h4>
          </div>
          <div className="gl-button1">
            <h5>Coming soon</h5>
          </div>
        </section>
        <section className="body-section center">
          <h5>
            {"Want to hear when we launch more stuff? "}
            <a href="https://www.producthunt.com/upcoming/manilla">
              Sign up here for updates!
            </a>
          </h5>
        </section>
      </main>
      <footer>
        <ul id="address">
          <li>
            <h4>Manila File Co.</h4>
          </li>
          <li>
            <h4>Made in California</h4>
          </li>
        </ul>
        <ul id="aboutcontact">
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
          <li>
            <a href="https://www.producthunt.com/upcoming/manilla">
              <h4>Subscribe</h4>
            </a>
          </li>
        </ul>
      </footer>
    </Layout>
  )
}
