import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Background"
import Tree from "../components/Tree"
import Introduction from "../components/Introduction"
import Birds from "../components/Birds"
import { Parallax, ParallaxLayer } from "react-spring/renderprops-addons"

class IndexPage extends React.Component {
  render() {
    return (
      <Layout>
        <SEO title="Home" />
        <Parallax pages={2}>
          <ParallaxLayer factor={1.23} offset={0} speed={-0.1}>
            <div
              style={{
                minWidth: "1500px",
                height: "100%",
                overflow: "hidden",
              }}
            >
              <Background></Background>
              <Birds></Birds>
            </div>
          </ParallaxLayer>
          <ParallaxLayer factor={1} offset={1} speed={0.3}>
            <div className="second-page">
              <div className="tree-container" style={{ position: "relative" }}>
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

              <Introduction></Introduction>
            </div>
          </ParallaxLayer>
        </Parallax>
      </Layout>
    )
  }
}

export default IndexPage
