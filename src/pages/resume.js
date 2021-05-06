import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IframeWrapper = styled.div`
  height: calc(100vh - 4rem);
`

const ResumePage = () => (
  <Layout background="#0e0603">
    <SEO title="Resume" />
    <IframeWrapper>
      <iframe
        title="resume-pdf"
        src="https://drive.google.com/file/d/1yld402MkdHUavHzxyWW7ceMyR017JkPV/preview"
        width="100%"
        height="100%"
        style={{ marginTop: "1.9rem", height: "calc(100% + 1.9rem)" }}
      ></iframe>
    </IframeWrapper>
  </Layout>
)

export default ResumePage
