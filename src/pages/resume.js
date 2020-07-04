import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import styled from "styled-components"

const IframeWrapper = styled.div`
  height: calc(100vh - 4rem);
`

const SecondPage = () => (
  <Layout>
    <SEO title="Page two" />
    <IframeWrapper>
      <iframe
        title="resume-pdf"
        src="https://drive.google.com/file/d/1ZOhjbwYR7HnliDCpihB7JYd2urQ9PLmc/preview"
        width="100%"
        height="100%"
        style={{ marginTop: "4rem" }}
      ></iframe>
    </IframeWrapper>
  </Layout>
)

export default SecondPage
