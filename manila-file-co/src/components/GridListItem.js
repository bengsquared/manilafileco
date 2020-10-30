import React from "react"

export default function Header({
  image,
  name,
  description,
  link,
  button1,
  button2,
}) {
  return (
    <section className="grid-list">
      <img alt={name + " logo"} className="gl-icon" src={image} />
      <div className="gl-name">
        <a href={link}>
          <h4>
            <span className="red-title">{name + " "}</span>

            {description}
          </h4>
        </a>
      </div>
      <div className="gl-button1">{button1}</div>
      <div className="gl-button2">{button2}</div>
    </section>
  )
}
