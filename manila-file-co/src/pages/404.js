import React from "react"
import Layout from "../components/layout"
import logo from "../img/manila.svg"
import tidyUp from "../img/tidyup.svg"

export default function Home() {
  return (
    <Layout className="wrap">
      <main>
        <section className="splash">
          <h1>oops... that's a 404</h1>
          <a title="country roads" href="/">
            <h3>take me home</h3>
          </a>
        </section>
      </main>
    </Layout>
  )
}
