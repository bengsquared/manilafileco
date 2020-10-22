import React from "react"
import logo from "../img/manila.svg"

export default function Footer() {
  return (
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
  )
}
