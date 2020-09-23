import React, { useRef, useEffect } from "react"
import {
  TwitterIcon,
  LinkedInIcon,
  GlobeIcon,
  GithubIcon,
  CodepenIcon,
} from "../components/socialMediaIcons"
import { Spring } from "react-spring/renderprops"
import VisibilitySensor from "react-visibility-sensor"
import gsap from "gsap"

export default function Introduction({ isVisible }) {
  const intro = useRef(null)
  const [hasAnimated, setHasAnimated] = React.useState(false)

  useEffect(() => {
    if (!hasAnimated && isVisible === true) {
      animate()
      setHasAnimated(true)
    }
  }, [isVisible])

  const animate = () => {
    console.log("animate")

    gsap.fromTo(
      intro.current,
      3,
      {
        opacity: 0,
      },
      {
        opacity: 1,

        delay: 1,
      }
    )
  }

  return (
    <>
      <article
        ref={intro}
        className="introduction-container"
        id="introduction-content"
      >
        <VisibilitySensor partialVisibility>
          {({ isVisible }) => (
            <>
              <div>
                <h1 className="introduction-header">Welcome</h1>
                <p>
                  <span>
                    Hello! My name's Mikaela. I'm a software engineer with a
                    particular love for HTML, CSS, JavaScript.
                  </span>
                  <span>
                    I've always loved the outdoors, so it's not a suprise that
                    I'm excited to be working towards making the web feel alive,
                    too, by building interactions that are fun, intuitive, and
                    have a personality of their own.
                  </span>
                  <span>
                    As I've grown as a developer, I've worked alongside senior
                    designers and developers who have raised my standards for
                    creating products that are not only enjoyable to use, but
                    are written in code that's maintainable and easy to
                    understand.
                  </span>
                  <span>
                    As an{" "}
                    <a
                      className="art-link"
                      href="https://www.facebook.com/mikaelaspencils/"
                    >
                      artist
                    </a>
                    , I'm addicted to detail. My mission is to create virtual
                    experiences that'll brighten your day.
                  </span>
                </p>
              </div>

              <div className="icons">
                <Spring
                  delay={2000}
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
                  delay={2200}
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
                  delay={2400}
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
                  delay={2600}
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
                  delay={2800}
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
