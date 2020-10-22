import React from "react"
import Layout from "../components/layout"
import logo from "../img/manila.svg"
import tidyUp from "../img/tidyup.svg"
import Header from "../components/header"
import Footer from "../components/footer"

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
          <p className="justify">
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
            <a href="/tidyUp">
              <h4>
                <span className="red-title">{"tidyUp "}</span>
                helps you clean up your desktop and other large folders
              </h4>
            </a>
          </div>
          <div className="gl-button1">
            <h5>Coming soon</h5>
          </div>
        </section>
        <section className="body-section signUpSection">
          <div className="centerText">Want to hear when we launch stuff?</div>
          <button
            className="signUpButton"
            onClick={e => {
              e.preventDefault()
              window.open("https://www.producthunt.com/upcoming/manilla")
            }}
          >
            keep me in the loop!
          </button>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}
