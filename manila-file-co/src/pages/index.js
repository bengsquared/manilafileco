import React from "react"
import Layout from "../components/layout"
import logo from "../img/manila.svg"
import tidyUp from "../img/tidyup.svg"
import Header from "../components/header"
import Footer from "../components/footer"
import GridListItem from "../components/GridListItem"

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
            <br />
            Sometimes working with our computer can feel a bit like searching
            through a messy attic; Our goal is to help you make it a
            well-ordered study.
            <br /> <br />
            Manila helps you to harness the power of your computer to organize
            your ideas, projects, and about any other digital thing you have, so
            you can focus on what you do best, and let the computer handle the
            rest.
            <br />
            <br />
            We're here to put the "personal" back in Personal Computer.
            <br />
          </p>
        </section>
        <section id="tools" className="body-section">
          <h3>Tools</h3>
          <hr />
        </section>
        <GridListItem
          image={tidyUp}
          name={"tidyUp"}
          description={
            "helps you clean up your desktop and other large folders"
          }
          link={"/tidyUp"}
          button1={<h3>Mac Beta</h3>}
          button2={
            <a href={`tidyUp.dmg`} download="tidyUp.dmg">
              Download for Mac
            </a>
          }
        />
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
