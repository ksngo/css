import styled, { keyframes } from "styled-components";

export const AnimateContainer = styled.div`
  padding: 1em;
  display: flex;
  flex-flow: row wrap;
  justify-content: flex-start;
  background-color: var(--palette-2-milk);
  
`
export const AnimateItem = styled.div`
  flex: 0 1 30%;
  border: 0.5px solid var(--palette-2-yellow);
  border-radius: 0.25em;
  display: grid;
  grid-template-rows: 1fr auto;
  margin: 1em;
`

export const AnimateLabel = styled.div`
  grid-row: 1/2;
  background-color: var(--palette-2-orange);
  font-size: 0.85em;
`
export const AnimateContent = styled.div`
  padding: 1em 0;
  grid-row: 2/3;
  background-image: radial-gradient(var(--palette-2-milk), var(--palette-2-yellow));
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  perspective: 500px;
`

export const AnimateContentGrid = styled.div`
  padding: 1em 0;
  grid-row: 2/3;
  background-image: radial-gradient(var(--palette-2-milk), var(--palette-2-yellow));
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(50px,1fr));
  grid-gap: 5px;
`
export const AnimateContentGridFill = styled(AnimateContentGrid)`
  grid-template-columns: repeat(auto-fill, minmax(50px,1fr));
`
const test1kf = keyframes`
  0% {
    background-color: var(--palette-1-pink);
    transform: translate(0);
  }
  50% {
    transform: translate(50px);
  }
  100% {
    transform: translate(0);
    background-color: var(--palette-1-mint);
  }
`

export const Test1 = styled.div`
  width: 50px;
  height: 50px;
  animation: ${test1kf} 1s ease-out 3;
`
export const TestFlex = styled.div`
  flex: 1 1 50px;
  max-width: 80px;
  margin: 2.5px;
  height: 50px;
  background-color: var(--palette-2-red);
`

export const TestGrid = styled.div`
  max-width: 80px;
  height: 50px;
  background-color: var(--palette-2-red);
`
const test2kf = keyframes`
  0% {
    transform: perspective(500px) translateZ(-800px) rotateY(90deg);
    opacity:0;
  }
  50% {
    transform: perspective(500px) translateZ(-160px) rotateY(87deg);
    opacity:1;
  }
  100% {
    transform: perspective(500px) translateZ(0) rotateY(0);
  }
`

export const Test2 = styled.div`
  width: 50px;
  height: 50px;
  background: radial-gradient(var(--palette-1-mint), var(--palette-1-blue));
  animation: ${test2kf} 1s ease-out 3;
`
const spinkf = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`
export const Test3 = styled.div`
  width: 100px;
  height: 50px;
  position: relative;
  background-image: linear-gradient(var(--palette-1-pink), var(--palette-1-blue));
  ::after {
    content: "";
    border-top: 1em solid black;
    border-left: 1em solid transparent;
    border-right: 1em solid transparent;
    border-radius: 50%;
    position: absolute;
    top: 1em;
    right: .5em;
    animation: ${spinkf} 1s linear infinite;
  }
  ::before {
    content: "A";
    border-left: 5px solid white;
    border-radius: 50%;
    width: 2em;
    height: 2em;
    background-color: var(--palette-2-red);
    font-size: 1em;
    line-height: 2em;
    text-align: center;
    position: absolute;
    top: .5em;
    left: .5em;
    animation: ${spinkf} 1s linear infinite;
  }
`
const shakekf = keyframes`
  0%,100% {
    transform: translateX(0);
  }
  10%,30%,50%,70% {
    transform: translateX(-0.5em);
  }
  20%,40%,60% {
    transform: translateX(0.5em);
  }
  80% {
    transform: translateX(-0.25em);
  }
  90% {
    transform: translateX(0.25em);
  }
`

export const Test4 = styled.button`
  margin-right: 5em;
  border: none;
  background-image: linear-gradient(var(--palette-1-mint), var(--palette-1-yellow));
  width: 100px;
  height: 50px;
  animation: ${shakekf} 1s linear 3;

`