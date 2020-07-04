import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
const Navigation = ({ modifier }) => {
  const [checked, setChecked] = useState(false)

  // componentDidMount() {
  //   document.addEventListener("keydown", this.closeModal);
  // }

  const closeModal = event => {
    if (event.keyCode === 27) setChecked(false)
  }

  const handleCheck = () => {
    setChecked(!checked)
  }

  return (
    <div className="navigation">
      <input
        type="checkbox"
        className="navigation__checkbox"
        id="navi-toggle"
        checked={checked}
        onChange={handleCheck}
      />

      <label htmlFor="navi-toggle" className="navigation__button">
        <span className={"navigation__icon" + modifier}>&nbsp;</span>
      </label>

      <div className="navigation__background">&nbsp;</div>

      <nav className="navigation__nav">
        <ul className="navigation__list">
          <li className="navigation__item">
            <a href="https://github.com/Mikaelia" className="navigation__link">
              Github
            </a>
          </li>
          <li className="navigation__item" onClick={handleCheck}>
            <Link to="/resume" className="navigation__link">
              Resume
            </Link>
          </li>
          <li className="navigation__item" onClick={handleCheck}>
            <a href="https://www.pixelsips.dev/" className="navigation__link">
              Blog
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://www.facebook.com/mikaelaspencils/"
              className="navigation__link"
            >
              Artwork
            </a>
          </li>
          <li className="navigation__item">
            <a
              href="https://www.linkedin.com/in/mikaela-gurney-947926b9/"
              className="navigation__link"
            >
              LinkedIn
            </a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default Navigation
