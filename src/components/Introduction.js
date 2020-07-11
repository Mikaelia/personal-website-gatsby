import React from "react"
import {
  TwitterIcon,
  LinkedInIcon,
  GlobeIcon,
  GithubIcon,
  CodepenIcon,
} from "../components/socialMediaIcons"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"

export default function Introduction() {
  return (
    <>
      <article className="introduction-container" id="introduction-content">
        <VisibilitySensor once>
          {({ isVisible }) => (
            <>
              <Spring
                delay={0}
                to={{ opacity: isVisible ? 1 : 0 }}
                config={{ duration: 1000 }}
              >
                {({ opacity }) => (
                  <div style={{ opacity }}>
                    <h1 className="introduction-header">Welcome.</h1>
                    <p>
                      <span>
                        I'm a software engineer with a particular love of
                        everything HTML, CSS, JavaScript.
                      </span>
                      <span>
                        My interests include building out design and layout
                        systems, architecting component libraries, and
                        developing tools to make engineers' lives easier.
                      </span>
                      <span>
                        Clean, organized, and scaleable CSS brings me much joy.
                      </span>
                      <span>
                        As an{" "}
                        <a
                          className="art-link"
                          href="https://www.facebook.com/mikaelaspencils/spanhotos/a.1153897121335193/1153897111335194/?type=1&theater"
                        >
                          artist
                        </a>
                        , I'm addicted to detail. My mission is to create
                        virtual experiences that'll brighten your day.
                      </span>
                    </p>
                  </div>
                )}
              </Spring>

              <div className="icons">
                <Spring
                  delay={1000}
                  to={{ opacity: isVisible ? 1 : 0 }}
                  config={{ duration: 1000 }}
                >
                  {({ opacity }) => (
                    <>
                      <a
                        href="https://www.pixelsips.dev"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{ width: "25px", opacity }}
                      >
                        <GlobeIcon fill="#d57e1c" />
                      </a>
                    </>
                  )}
                </Spring>
                <Spring
                  delay={1200}
                  to={{ opacity: isVisible ? 1 : 0 }}
                  config={{ duration: 1000 }}
                >
                  {({ opacity }) => (
                    <>
                      <a
                        href="https://www.linkedin.com/in/mikaela-gurney/"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          width: "25px",
                          marginLeft: "1.85rem",
                          opacity,
                        }}
                      >
                        <LinkedInIcon fill="#df962c" />
                      </a>
                    </>
                  )}
                </Spring>
                <Spring
                  delay={1400}
                  to={{ opacity: isVisible ? 1 : 0 }}
                  config={{ duration: 1000 }}
                >
                  {({ opacity }) => (
                    <>
                      <a
                        href="https://github.com/Mikaelia"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          width: "25px",
                          marginLeft: "1.85rem",
                          opacity,
                        }}
                      >
                        <GithubIcon fill="#e9af3c" />
                      </a>
                    </>
                  )}
                </Spring>
                <Spring
                  delay={1600}
                  to={{ opacity: isVisible ? 1 : 0 }}
                  config={{ duration: 1000 }}
                >
                  {({ opacity }) => (
                    <>
                      <a
                        href="https://twitter.com/MikaelaGurney"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          width: "25px",
                          marginLeft: "1.85rem",
                          opacity,
                        }}
                      >
                        <TwitterIcon fill="#e5be46" />
                      </a>
                    </>
                  )}
                </Spring>
                <Spring
                  delay={1800}
                  to={{ opacity: isVisible ? 1 : 0 }}
                  config={{ duration: 1000 }}
                >
                  {({ opacity }) => (
                    <>
                      <a
                        href="https://codepen.io/Mikiaela"
                        rel="noopener noreferrer"
                        target="_blank"
                        style={{
                          width: "25px",
                          marginLeft: "1.85rem",
                          opacity,
                        }}
                      >
                        <CodepenIcon fill="#ebd255" />
                      </a>
                    </>
                  )}
                </Spring>
              </div>
            </>
          )}
        </VisibilitySensor>
      </article>
    </>
  )
}
