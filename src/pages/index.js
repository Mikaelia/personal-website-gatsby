import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Background"
import Tree from "../components/Tree"
import Introduction from "../components/Introduction"
import Birds from "../components/Birds"
import styled from "styled-components"
import Wave from "../components/Wave"

const LandingPage = styled.div`
  .sky-slide {
    min-width: 1500px;
    height: 100vh;
    overflow: hidden;
    position: sticky;
    top: 0;
  }

  .tree-container {
    position: absolute;
    top: 0;
    left: 0;
  }

  .information-slide {
    display: flex;
    align-items: center;
    justify-content: center;
    background: #080808;
    height: 100vh;
    position: relative;
    width: 100vw;
    margin-top: 20vh;
  }
`

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <LandingPage>
          <div className="sky-slide">
            <Background></Background>
            <Birds></Birds>
          </div>

          <div className="information-slide">
            <div className="tree-container">
              <Tree
                style={{
                  position: "absolute",
                  height: "6rem",
                  width: "10.5rem",
                  bottom: "83px",
                  left: "-10",
                }}
              ></Tree>
              <Tree
                style={{
                  position: "absolute",
                  height: "12rem",
                  width: "18rem",
                  bottom: "76px",
                  left: "18px",
                  transform: "rotate(2deg)",
                }}
              ></Tree>
              <Tree
                style={{
                  position: "absolute",
                  height: "9.5rem",
                  width: "23rem",
                  bottom: "68px",
                  left: "90px",
                  transform: "rotate(4deg)",
                }}
              ></Tree>
            </div>
            <Wave></Wave>
            <Introduction></Introduction>
          </div>
        </LandingPage>
      </Layout>
    )
  }
}

export default IndexPage
