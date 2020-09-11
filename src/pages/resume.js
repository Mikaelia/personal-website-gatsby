import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IframeWrapper = styled.div`
  height: calc(100vh - 4rem);
`

const ResumePage = () => (
  <Layout>
    <SEO title="Resume" />
    <IframeWrapper>
      <iframe
        title="resume-pdf"
        src="https://drive.google.com/file/d/1WtsFfVUbjCcU3b9EMq0fzYBhWeapiqPx/preview"
        width="100%"
        height="100%"
        style={{ marginTop: "4rem" }}
      ></iframe>
    </IframeWrapper>
  </Layout>
)

export default ResumePage
