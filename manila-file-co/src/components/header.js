import React from "react"
import logo from "../img/manila.svg"

export default function Header({ currentPage }) {
  return (
    <header>
      <div
        style={{ gridColumnStart: "2", gridColumnEnd: "6" }}
        className="header-title"
      >
        <img alt="Manila logo" className="header-icon" src={logo} />
        <h4>Manila File Co</h4>
      </div>
      <nav
        style={{
          gridColumnStart: "6",
          gridColumnEnd: "12",
        }}
        className="header-nav"
      >
        <a href="https://www.notion.so/FileGraph-Tag-based-file-manager-8529875abc62435a9232b4cf1b45520b">
          <h4>About</h4>
        </a>
        <a href="mailto:bengg@mac.com">
          <h4>Contact</h4>
        </a>
      </nav>
    </header>
  )
}
