import React, { Component } from "react"
import { Link } from "gatsby"
class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">
          <span className="header__logo">Mikaela Gurney</span>
        </Link>
        <ul className="navlinks">
          <li className="navlinks-item">
            <a href="https://github.com/Mikaelia">Github</a>
          </li>
          <li className="navlinks-item">
            <Link to="/resume">Resume</Link>
          </li>
          <li className="navlinks-item">
            <a href="https://www.pixelsips.dev/">Blog</a>
          </li>
        </ul>
      </header>
    )
  }
}
export default Header
