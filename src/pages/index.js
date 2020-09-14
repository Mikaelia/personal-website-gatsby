import React, { useRef } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Background from "../components/Background"
import Tree1 from "../components/svg-assets/Tree1"
import Tree2 from "../components/svg-assets/Tree2"
import Tree3 from "../components/svg-assets/Tree3"
import Tree4 from "../components/svg-assets/Tree4"
import Tree5 from "../components/svg-assets/Tree5"
import Tree6 from "../components/svg-assets/Tree6"
import Introduction from "../components/Introduction"
import Birds from "../components/Birds"
import styled from "styled-components"
import Wave from "../components/Wave"
import FooterWave from "../components/FooterWave"
import Hiker from "../components/Hiker"
import Moon from "../components/Moon"
import Star from "../components/Star"
import { keyframes } from "styled-components"
import VisibilitySensor from "react-visibility-sensor"
import { Spring } from "react-spring/renderprops"

const blink = keyframes`
0% {
  opacity: 1;
}
50% {
  opacity: 0;
 transform: scale(.5)
}

75% {
 
  transform: rotate(100deg);

}

100% {
  opacity: 1;
  transform: rotate(0deg);
}


`

const LandingPage = styled.div`
  position: relative;
  .sky-slide {
    min-width: 1500px;
    height: 100vh;
    overflow: hidden;
    position: sticky;
    top: 0;
    z-index: -1;
  }

  .information-slide {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 2000px;

    height: 60rem;
    margin-top: 20vh;
  }

  .introduction {
    position: absolute;
    left: 0;
    top: 0;
    width: 100vw;
    display: flex;
    justify-content: center;
  }

  .tree-container {
    position: absolute;
    top: 0;
    left: 0;
  }

  .night-sky {
    min-width: 2000px;
    height: 100vh;
    margin-top: -50rem;
    position: sticky;
    top: 0rem;
    z-index: -1;
    width: 100%;
    overflow: hidden;
  }

  .star {
    animation: ${blink} 2s ease infinite;
    z-index: 5;
  }

  .star:hover {
    cursor: pointer;
  }

  .project-container {
    margin-top: 30rem;
    height: 50rem;
    width: 2000px;
    position: relative;
  }

  .project-info {
    height: 36%;
    background: rgb(14, 6, 3);
    margin-top: -10rem;
  }
`

const IndexPage = () => {
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
            <VisibilitySensor partialVisibility once>
              {({ isVisible }) => (
                <Tree1
                  visible={isVisible}
                  style={{
                    position: "absolute",
                    height: "6rem",
                    width: "18rem",
                    left: "-3rem",
                  }}
                  animation={{
                    from: "0rem",
                    to: "11rem",
                    delay: "0.5",
                    changer: "bottom",
                  }}
                ></Tree1>
              )}
            </VisibilitySensor>
            <Tree1
              style={{
                position: "absolute",
                height: "14rem",
                width: "18rem",

                left: "18px",
                transform: "rotate(2deg)",
              }}
              animation={{
                changer: "bottom",
                from: "-8rem",
                to: "8rem",
              }}
            ></Tree1>
            <Tree2
              style={{
                position: "absolute",
                height: "9rem",
                width: "18rem",
                bottom: "8.2rem",
                left: "4.2rem",
              }}
            ></Tree2>
            <Tree3
              style={{
                position: "absolute",
                height: "13.5rem",
                width: "19rem",
                bottom: "6rem",
                left: "11.3rem",
                transform: "rotate(-2deg)",
              }}
            ></Tree3>
            <Tree4
              style={{
                position: "absolute",
                height: "11rem",
                width: "18rem",
                bottom: "4.6rem",
                left: "18rem",
                transform: "rotate(2deg)",
              }}
            ></Tree4>

            <Tree5
              style={{
                position: "absolute",
                height: "7rem",
                width: "18rem",
                bottom: "17rem",
                left: "72rem",
              }}
            ></Tree5>
            <Tree5
              style={{
                position: "absolute",
                height: "11rem",
                width: "18rem",
                bottom: "17rem",
                left: "76.9rem",
                transform: "rotate(2deg)",
              }}
            ></Tree5>
            <Tree6
              style={{
                position: "absolute",
                height: "15rem",
                width: "18rem",
                bottom: "19rem",
                left: "80rem",
              }}
            ></Tree6>
            <Tree6
              style={{
                position: "absolute",
                height: "14rem",
                width: "18rem",
                bottom: "18.5rem",
                left: "83.5rem",
              }}
            ></Tree6>
            <Tree6
              style={{
                position: "absolute",
                height: "9rem",
                width: "18rem",
                bottom: "19rem",
                left: "89rem",
              }}
            ></Tree6>
            <Tree6
              style={{
                position: "absolute",
                height: "10rem",
                width: "18rem",
                bottom: "17rem",
                left: "93rem",
              }}
            ></Tree6>
          </div>
          <Wave
            style={{
              width: "2000px",
              marginTop: "-20rem",
              height: "90rem",
            }}
          ></Wave>

          <div className="introduction">
            <Introduction></Introduction>
          </div>
        </div>

        <div className="night-sky">
          <Star
            style={{
              width: ".5rem",
              height: ".5rem",
              position: "absolute",
              top: "35%",
              left: "5%",
              animationDelay: ".2s",
            }}
          ></Star>
          <Star
            style={{
              width: ".5rem",
              height: ".5rem",
              position: "absolute",
              top: "10%",
              left: "5%",
              zIndex: "2",
              animationDelay: ".8s",
            }}
          ></Star>
          <Star
            style={{
              width: ".3rem",
              height: ".3rem",
              position: "absolute",
              top: "35%",
              left: "6%",
              zIndex: "2",
              animationDelay: ".6s",
            }}
          ></Star>
          <Star
            style={{
              width: ".3rem",
              height: ".3rem",
              position: "absolute",
              top: "15%",
              left: "10%",
              zIndex: "2",
              animationDelay: "8s",
            }}
          ></Star>

          <Star
            style={{
              width: ".3rem",
              height: ".3rem",
              position: "absolute",
              top: "50%",
              left: "15%",
              zIndex: "2",
              animationDelay: ".7s",
            }}
          ></Star>
          <Star
            style={{
              width: ".3rem",
              height: ".3rem",
              position: "absolute",
              top: "20%",
              left: "20%",
              zIndex: "2",
              animationDelay: ".7s",
            }}
          ></Star>
          <Star
            style={{
              width: ".5rem",
              height: ".5rem",
              position: "absolute",
              top: "10%",
              left: "25%",
              zIndex: "2",
            }}
          ></Star>
          <Star
            style={{
              width: ".5rem",
              height: ".5rem",
              position: "absolute",
              top: "30%",
              left: "20%",
              zIndex: "2",
              animationDelay: ".5s",
            }}
          ></Star>
          <Star
            style={{
              width: ".5rem",
              height: ".5rem",
              position: "absolute",
              top: "30%",
              left: "35%",
              zIndex: "2",
              animationDelay: ".9s",
            }}
          ></Star>
          <Star
            style={{
              width: ".3rem",
              height: ".3rem",
              position: "absolute",
              top: "10%",
              left: "37%",
              zIndex: "2",
              animationDelay: ".5s",
            }}
          ></Star>
          <Star
            style={{
              width: ".3rem",
              height: ".3rem",
              position: "absolute",
              top: "12%",
              left: "45%",
              zIndex: "2",
              animationDelay: ".5s",
            }}
          ></Star>
          <Star
            style={{
              width: ".3rem",
              height: ".3rem",
              position: "absolute",
              top: "23%",
              left: "55%",
              zIndex: "2",
              animationDelay: ".5s",
            }}
          ></Star>
          <Star
            style={{
              width: ".6rem",
              height: ".6rem",
              position: "absolute",
              top: "23%",
              left: "56%",
              zIndex: "2",
              animationDelay: ".5s",
            }}
          ></Star>
          <Star
            style={{
              width: ".3rem",
              height: ".3rem",
              position: "absolute",
              top: "20%",
              left: "69%",
              zIndex: "2",
              animationDelay: ".5s",
            }}
          ></Star>
          <Moon
            style={{
              width: "1rem",
              height: "1rem",
              position: "absolute",
              top: "40%",
              left: "40%",
              zIndex: "2",
              opacity: ".8",
            }}
          ></Moon>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 1600 800"
            preserveAspectRatio="none"
            style={{ transform: "rotateY(-180deg" }}
          >
            <rect fill="#000000" width="1600" height="800" />
            <g>
              <path
                fill="#07191f"
                d="M486 705.8c-109.3-21.8-223.4-32.2-335.3-19.4C99.5 692.1 49 703 0 719.8V800h843.8c-115.9-33.2-230.8-68.1-347.6-92.2C492.8 707.1 489.4 706.5 486 705.8z"
              />
              <path
                fill="#0e323e"
                d="M1600 0H0v719.8c49-16.8 99.5-27.8 150.7-33.5c111.9-12.7 226-2.4 335.3 19.4c3.4 0.7 6.8 1.4 10.2 2c116.8 24 231.7 59 347.6 92.2H1600V0z"
              />
              <path
                fill="#164a5e"
                d="M478.4 581c3.2 0.8 6.4 1.7 9.5 2.5c196.2 52.5 388.7 133.5 593.5 176.6c174.2 36.6 349.5 29.2 518.6-10.2V0H0v574.9c52.3-17.6 106.5-27.7 161.1-30.9C268.4 537.4 375.7 554.2 478.4 581z"
              />
              <path
                fill="#1d637d"
                d="M0 0v429.4c55.6-18.4 113.5-27.3 171.4-27.7c102.8-0.8 203.2 22.7 299.3 54.5c3 1 5.9 2 8.9 3c183.6 62 365.7 146.1 562.4 192.1c186.7 43.7 376.3 34.4 557.9-12.6V0H0z"
              />
              <path
                fill="#247c9c"
                d="M181.8 259.4c98.2 6 191.9 35.2 281.3 72.1c2.8 1.1 5.5 2.3 8.3 3.4c171 71.6 342.7 158.5 531.3 207.7c198.8 51.8 403.4 40.8 597.3-14.8V0H0v283.2C59 263.6 120.6 255.7 181.8 259.4z"
              />
              <path
                fill="#2a658b"
                d="M1600 0H0v136.3c62.3-20.9 127.7-27.5 192.2-19.2c93.6 12.1 180.5 47.7 263.3 89.6c2.6 1.3 5.1 2.6 7.7 3.9c158.4 81.1 319.7 170.9 500.3 223.2c210.5 61 430.8 49 636.6-16.6V0z"
              />
              <path
                fill="#304e79"
                d="M454.9 86.3C600.7 177 751.6 269.3 924.1 325c208.6 67.4 431.3 60.8 637.9-5.3c12.8-4.1 25.4-8.4 38.1-12.9V0H288.1c56 21.3 108.7 50.6 159.7 82C450.2 83.4 452.5 84.9 454.9 86.3z"
              />
              <path
                fill="#373768"
                d="M1600 0H498c118.1 85.8 243.5 164.5 386.8 216.2c191.8 69.2 400 74.7 595 21.1c40.8-11.2 81.1-25.2 120.3-41.7V0z"
              />
              <path
                fill="#3d2056"
                d="M1397.5 154.8c47.2-10.6 93.6-25.3 138.6-43.8c21.7-8.9 43-18.8 63.9-29.5V0H643.4c62.9 41.7 129.7 78.2 202.1 107.4C1020.4 178.1 1214.2 196.1 1397.5 154.8z"
              />
              <path
                fill="#430945"
                d="M1315.3 72.4c75.3-12.6 148.9-37.1 216.8-72.4h-723C966.8 71 1144.7 101 1315.3 72.4z"
              />
            </g>
          </svg>
        </div>

        <div className="project-container">
          <Tree1
            style={{
              width: "6rem",
              position: "absolute",
              top: "-1rem",
              left: "2.5rem",
            }}
          ></Tree1>
          <Tree1
            style={{
              width: "6rem",
              position: "absolute",
              top: "-3rem",
              left: "5rem",
              transform: "rotate(2deg)",
            }}
          ></Tree1>
          <Tree1
            style={{
              width: "7rem",
              position: "absolute",
              top: "-7rem",
              left: "-1rem",
            }}
          ></Tree1>
          <Tree1
            style={{
              width: "6rem",
              position: "absolute",
              top: "-5rem",
              left: "32rem",
              transform: "rotate(-2deg)",
            }}
          ></Tree1>
          <Tree1
            style={{
              width: "7rem",
              position: "absolute",
              top: "-9rem",
              left: "36rem",
            }}
          ></Tree1>
          <Tree1
            style={{
              width: "5rem",
              position: "absolute",
              top: "-6rem",
              left: "42rem",
              transform: "rotate(-2deg)",
            }}
          ></Tree1>
          <Hiker
            style={{
              width: "3rem",
              position: "absolute",
              top: "4rem",
              left: "12rem",
              transform: "rotate(2deg)",
            }}
          ></Hiker>

          <FooterWave
            style={{
              width: "100%",
              height: "100%",
            }}
          ></FooterWave>
          <div className="project-info"></div>
        </div>
      </LandingPage>
    </Layout>
  )
}

export default IndexPage
