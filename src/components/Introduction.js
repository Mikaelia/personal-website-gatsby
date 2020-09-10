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
import Header from "./header.js"

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
                    <h1 className="introduction-header">Welcome</h1>
                    <p>
                      <span>
                        Hello! My name's Mikaela. I'm a software engineer with a
                        particular soft spot for HTML, CSS, JavaScript.
                      </span>
                      <span>
                        I've always loved the outdoors, so it's not a huge
                        suprise that I'm excited to be working towards making
                        the web feel alive, too, by building interactions that
                        are fun, intuitive, and memorable (in a good way).
                      </span>
                      <span>
                        As I've grown as a developer, I've worked alongside
                        senior designers and developers who have raised my
                        standards for creating products that are not only
                        enjoyable to use, but are written in code that's
                        maintainable and easy to understand.
                      </span>
                      <span>
                        Throughout my work, I've enjoyed removing roadblocks
                        that burn time and cause frustration. Whether it be
                        improving application performance, creating component
                        libraries, working on tools that facilitate faster
                        development, or taking a hard look at the accessibility
                        of a product, I want to make sure that what I build
                        helps others do what they need to do.
                      </span>

                      <span>
                        As an{" "}
                        <a
                          className="art-link"
                          href="https://www.facebook.com/mikaelaspencils/"
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
