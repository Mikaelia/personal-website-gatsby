import React, { Component } from "react"
import Navigation from "./Navigation"
import { Link } from "gatsby"

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      hasScrolled: false,
    }
  }

  // componentDidMount() {
  //   window.addEventListener("scroll", this.handleScroll)
  // }

  // handleScroll = event => {
  //   console.log("s")
  //   const scrollTop = window.pageYOffset
  //   if (scrollTop > 50) {
  //     this.setState({ hasScrolled: true })
  //   } else {
  //     this.setState({ hasScrolled: false })
  //   }
  // }

  render() {
    return (
      <header
        className={
          this.state.hasScrolled ? "header header--scrolled" : "header"
        }
      >
        <Link to="/">
          <span className="header__logo">Mikaela Gurney</span>
        </Link>
        <Navigation
          modifier={this.state.hasScrolled ? " navigation__icon--scrolled" : ""}
        />
      </header>
    )
  }
}
export default Header
