import React from "react"
import Layout from "../components/layout"
import logo from "../img/manila.svg"
import tidyUp from "../img/tidyup.svg"
import tidyUpButtons from "../img/tidyUpButtons.png"
import Header from "../components/header"
import Footer from "../components/footer"

export default function Home() {
  return (
    <Layout className="wrap">
      <Header currentPage="home" />
      <main>
        <section className="splash">
          <img alt="tidyUp logo" src={tidyUp} className="BigImage center" />
          <h1>tidyUp</h1>
          <h2>helps you clean up your desktop and other large folders</h2>
          <p className="centerText"> coming soon </p>
        </section>
        <section className="body-section">
          <p>
            tidyUp is a tiny app to swipe through any clutter you have on your
            desktop. Just choose a folder to cleanup, and swipe through your
            files using your arrow keys!
          </p>
          <br />
          <img src={tidyUpButtons} className="BigImage center" />
          <p>
            After swiping through, you can choose to sort again, or just leave
            till you need another spring cleaning
          </p>
          <p>
            Just a few swipes, and you've Tidied Up
            <span role="img" aria-label="sparkles">
              ✨
            </span>
          </p>
        </section>
      </main>
      <Footer />
    </Layout>
  )
}
