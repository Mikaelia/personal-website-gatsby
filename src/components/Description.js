import React, { useRef, useEffect } from "react"
import styled from "styled-components"
import gsap from "gsap"

const Information = styled.div`
  height: 38%;
  background: #0e0603;
  margin-top: -11rem;

  .description {
    opacity: 0;
    position: absolute;
    width: 100vw;
    left: 0;
    top: 70%;
    background: orange;
    @media (min-width: 2000px) {
      width: 100%;
    }
  }

  .description article {
    position: absolute;

    color: #f0ddc0;
    max-width: 35rem;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    padding: 0 2rem;
    letter-spacing: 0.05rem;
    text-transform: none;
    line-height: 1.6;
    font-size: 1rem;
    font-weight: 100;
  }

  .description h1 {
    margin-bottom: 1rem;
    letter-spacing: 0.2rem;
    font-family: "Montserrat";
    font-weight: 400;
    color: #ddb744;
    @media only screen and (min-width: 69.25em) {
      text-align: center;
    }
  }

  .description {
    margin-bottom: 0.5rem;
  }

  .description a {
    color: #f0ddc0;
  }
`
export default function Description({ isVisible }) {
  const info = useRef(null)
  const [hasAnimated, setHasAnimated] = React.useState(false)

  useEffect(() => {
    if (!hasAnimated && isVisible === true) {
      console.log("pin")
      animate()
      setHasAnimated(true)
    }
  }, [isVisible])

  const animate = () => {
    gsap.fromTo(
      info.current,
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
    <Information>
      <div ref={info} className="description">
        <article>
          <h1>A little more...</h1>
          <p>
            Please feel feel free to check out more of my work &#8594;{" "}
            <a
              href="https://github.com/Mikaelia"
              rel="noopener noreferrer"
              target="_blank"
            >
              here
            </a>
          </p>
          <p>
            Or say hello &#8594;{" "}
            <a href="mailto:mikaelagurney@gmail.com?subject=Hi Mikaela">
              mikaelagurney@gmail.com
            </a>
          </p>
        </article>
      </div>
    </Information>
  )
}
