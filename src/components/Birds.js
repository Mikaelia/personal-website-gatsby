import React from "react"
import styled, { keyframes } from "styled-components"
import birdCells from "../static/bird-cells.svg"

const flyCycle = keyframes`
  100% {
    background-position: -900px 0;
    background-position-x: -900px;
    background-position-y: 0;
  }
}
`

const flyRight = keyframes`
0% {
 transform:  scale(0.3) translateX(-10vw)
}

  5% {
    transform: translateY(2vh)  translateX(10vw) scale(.4);
  }

    10% {
    transform: translateY(4vh) translateX(20vw) scale(0.5);
  }

    15% {
    transform: translateY(4vh) translateX(30vw) scale(0.6);
  }

    20% {
    transform: translateY(2vh) translateX(40vw) scale(0.6);
  }

    25% {
    transform: translateY(0vh) translateX(50vw) scale(0.4);
  }

      30% {
    transform: translateY(-2vh) translateX(60vw) scale(0.3);
  }

        35% {
    transform: translateY(-4vh) translateX(70vw) scale(0.4);
  }

          40% {
    transform: translateY(-5vh) translateX(80vw) scale(0.3);
  }
            45% {
    transform: translateY(-7vh) translateX(90vw) scale(0.1);
  }
  

50% {
  transform: translateX(100vw) translateY(-7vh) scale(0.1)
}
  100% {
  transform: translateX(100vw) translateY(-7vh) scale(0.1)
}
 `

const BirdsContainer = styled.div`
  width: 100%;
  height: 2rem;

  .bird {
    background-image: url(${birdCells});
    background-size: auto 100%;
    width: 88px;
    height: 125px;
    will-change: background-position;
    animation-name: ${flyCycle};
    animation-timing-function: steps(10);
    animation-iteration-count: infinite;
  }

  .bird--one {
    animation-duration: 1s;
  }

  .bird--two {
    animation-duration: 0.9s;
    animation-delay: -2s;
  }

  .bird-container {
    position: absolute;
    top: 20%;
    transform: scale(0) translateX(-10vw);
    will-change: transform;

    animation-name: ${flyRight};
    animation-timing-function: linear;
    animation-iteration-count: infinite;
  }
  .bird-container--one {
    animation-duration: 29s;
    animation-delay: 1s;
  }

  .bird-container--two {
    animation-duration: 30s;
    animation-delay: 3s;
  }
`

export default function Birds() {
  return (
    <BirdsContainer>
      <div className="bird-container bird-container--one">
        <div className="bird bird--one" />
      </div>

      <div className="bird-container bird-container--two">
        <div className="bird bird--two" />
      </div>
    </BirdsContainer>
  )
}
