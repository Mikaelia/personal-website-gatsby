/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Header from "./header.js"
import "../sass/main.scss"
import styled from "styled-components"

const StyledWrapper = styled.div`
  @media (min-width: 2000px) {
    // background: #0e0603;
  }
`

let StyledMain = styled.main`
 height: "100vh",
          overflowX: "hidden",
          maxWidth: "2000px",
  @media (min-width: 2000px) {
    transform: translate3d(0, 0, 0);
    margin: 0 auto;
  }
`

const Layout = ({ children, background }) => {
  return (
    <StyledWrapper>
      <Header background={background} />
      <StyledMain>{children}</StyledMain>
    </StyledWrapper>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
