import React from "react"
import styled from "styled-components"
import {
  TwitterIcon,
  LinkedInIcon,
  GlobeIcon,
  GithubIcon,
  CodepenIcon,
} from "../components/socialMediaIcons"
import Fade from "react-reveal/Fade"

const StyledIntro = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #080808;
  height: 51rem;
  position: relative;
`
export default function Introduction() {
  return (
    <StyledIntro>
      <article className="introduction-container" id="introduction-content">
        <Fade duration={2000} delay={300}>
          <h1 className="introduction-header">Welcome.</h1>
          <p>
            <span>
              I'm a software engineer with a particular love of everything HTML,
              CSS, JavaScript.
            </span>
            <span>
              My interests include building out design and layout systems,
              architecting component libraries, and developing tools to make
              engineers' lives easier.
            </span>
            <span>Clean, organized, and scaleable CSS brings me much joy.</span>
            <span>
              As an{" "}
              <a
                className="art-link"
                href="https://www.facebook.com/mikaelaspencils/spanhotos/a.1153897121335193/1153897111335194/?type=1&theater"
              >
                artist
              </a>
              , I'm addicted to detail. My mission is to create virtual
              experiences that'll brighten your day.
            </span>
          </p>
        </Fade>
        <div className="icons">
          <Fade duration={2000} delay={1000}>
            <a
              href="https://www.pixelsips.dev"
              rel="noopener noreferrer"
              target="_blank"
              style={{ width: "25px" }}
            >
              <GlobeIcon fill="#d57e1c" />
            </a>
          </Fade>
          <Fade duration={2000} delay={1100}>
            <a
              href="https://www.linkedin.com/in/mikaela-gurney/"
              rel="noopener noreferrer"
              target="_blank"
              style={{ width: "25px", marginLeft: "1.85rem" }}
            >
              <LinkedInIcon fill="#df962c" />
            </a>
          </Fade>
          <Fade duration={2000} delay={1200}>
            <a
              href="https://github.com/Mikaelia"
              rel="noopener noreferrer"
              target="_blank"
              style={{ width: "25px", marginLeft: "1.85rem" }}
            >
              <GithubIcon fill="#e9af3c" />
            </a>
          </Fade>
          <Fade duration={2000} delay={1300}>
            <a
              href="https://twitter.com/MikaelaGurney"
              rel="noopener noreferrer"
              target="_blank"
              style={{ width: "25px", marginLeft: "1.85rem" }}
            >
              <TwitterIcon fill="#e5be46" />
            </a>
          </Fade>
          <Fade duration={2000} delay={1400}>
            <a
              href="https://codepen.io/Mikiaela"
              rel="noopener noreferrer"
              target="_blank"
              style={{ width: "25px", marginLeft: "1.85rem" }}
            >
              <CodepenIcon fill="#ebd255" />
            </a>
          </Fade>
        </div>
      </article>
    </StyledIntro>
  )
}
