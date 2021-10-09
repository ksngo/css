import styled from "styled-components";
import pika from "../../assets/pika.png"
import squirtle from "../../assets/squirtle.png"

export const BgContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  background-color: var(--palette-1-blue);
  align-content: space-between;
`
export const BgItem = styled.div`
  flex: 1 1 15%;
  min-height: 225px;
  border: 0.5px solid var(--palette-1-mint);
  margin: 1em;
  display: flex;
  flex-flow: column nowrap;
  border: 1px solid var(--palette-1-pink);
  border-radius: 0.5em;
`

export const BgLabel = styled.div`
  font-size: 0.75em;
  flex: 1 1 32%;
  background-color: var(--palette-1-pink);
  padding: 0.25em;
`
  

export const BgContent1 = styled.div`
  flex: 1 1 67%;
  background-image: url(${pika});
  min-width: 200px;
`
export const BgContent2 = styled.div`
  flex: 0 0 67%;
  background-image: url(${pika});
  background-size: contain; 
`

export const BgContent3 = styled.div`
  flex: 0 0 67%;
  background-image: url(${pika});
  background-size: cover; 
`

export const BgContent4 = styled.div`
  flex: 0 0 67%;
  background-image: url(${pika});
  background-size: contain;
  background-repeat: no-repeat; 
`

export const BgContent5 = styled.div`
  flex: 0 0 67%;
  background-image: linear-gradient(to right, white, var(--palette-1-mint));
  ::after {
    content: "\\2192";
  }
`
export const BgContent6 = styled.div`
  flex: 0 0 67%;
  background-image: linear-gradient(to bottom left, white, var(--palette-1-mint));
  ::after {
    content: "\\2199";
  }
`
export const BgContent7 = styled.div`
  flex: 0 0 67%;
  background-image: linear-gradient(180deg, white, var(--palette-1-mint));
  ::after {
    content: "\\2193";
  }
`
export const BgContent8 = styled.div`
  flex: 0 0 67%;
  background-image: linear-gradient(90deg, white, var(--palette-1-mint), var(--palette-1-yellow));
  ::after {
    content: "\\2192";
  }
`
export const BgContent9 = styled.div`
  flex: 0 0 67%;
  background-image: linear-gradient(90deg, white 10%, var(--palette-1-mint) 30%, var(--palette-1-yellow) 70%);
  ::after {
    content: "\\2192";
  }
`
export const BgContent10 = styled.div`
  flex: 0 0 67%;
  background-image: linear-gradient(90deg, white 10%, var(--palette-1-mint) 10%, var(--palette-1-mint) 70%, var(--palette-1-yellow) 70%);
  ::after {
    content: "\\2192";
  }
`
export const BgContent11 = styled.div`
  flex: 0 0 67%;
  background-image: repeating-linear-gradient(90deg, var(--palette-1-mint),var(--palette-1-mint) 10px, var(--palette-1-yellow) 10px, var(--palette-1-yellow) 20px);
  ::after {
    content: "\\2192";
  }
`
export const BgContent12 = styled.div`
  flex: 0 0 67%;
  background-image: repeating-linear-gradient(135deg, var(--palette-1-mint),var(--palette-1-mint) 10px, var(--palette-1-yellow) 10px, var(--palette-1-yellow) 20px);
  ::after {
    content: "\\2198";
  }
`
export const BgContent13 = styled.div`
  flex: 2 1 67%;
  background-image: radial-gradient(var(--palette-1-mint), var(--palette-1-yellow));
`
export const BgContent14 = styled.div`
  flex: 0 0 67%;
  background-image: radial-gradient(circle,var(--palette-1-mint), var(--palette-1-yellow));
`
export const BgContent15 = styled.div`
  flex: 0 0 67%;
  background-image: radial-gradient(3em at 25% 25%,var(--palette-1-mint), var(--palette-1-yellow));
`
export const BgContent16 = styled.div`
  flex: 0 0 67%;
  background-image: radial-gradient(circle,var(--palette-1-mint) 0%, var(--purple-button) 75%, var(--palette-1-yellow) 100%);
`
export const BgContent17 = styled.div`
  flex: 0 0 67%;
  background-image: repeating-radial-gradient(circle,var(--palette-1-mint),var(--palette-1-mint) 5px, var(--palette-1-yellow) 5px, var(--palette-1-yellow) 10px);
`
export const BgContent18 = styled.div`
  flex: 1 0 67%;
  background-image: url(${pika}), url(${squirtle}), url(${squirtle});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0px, 50px, 150px;
  background-blend-mode: multiply;
`
export const BgContent18A = styled(BgContent18)`
  background-blend-mode: normal;
`

export const BgContent19 = styled(BgContent18)`
  background-blend-mode: color-burn;
`
export const BgContent20 = styled(BgContent18)`
  background-blend-mode: difference;
`
export const BgContent21 = styled(BgContent18)`
  background-blend-mode: difference;
  background-color: var(--palette-1-mint);
`
export const BgContent22 = styled.div`
  flex: 1 0 67%;
  background-image: url(${pika}), url(${squirtle}), url(${squirtle});
  background-color: var(--palette-1-mint);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0px, 50px, 150px;
  background-blend-mode: luminosity;
`
export const BgContent23 = styled.div`
  flex: 1 0 67%;
  background-image: url(${pika}), url(${squirtle}), url(${squirtle});
  background-color: var(--palette-1-mint);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: 0px, 50px, 150px;
`
export const BgContent24 = styled.div`
  flex: 1 0 67%;
  background-image: repeating-radial-gradient(var(--purple-button), var(--purple-button) 5px,var(--palette-1-yellow) 5px, var(--palette-1-yellow) 10px);
`

export const BlendText = styled.h3`
  mix-blend-mode: ${({value})=> value};
  background-color: white;
  text-align: center;
  color: black;
  height: 80%;
  font-size: 6em;
  margin:5%;
`


export const BgButton1 = styled.button`
  width: 25%;
  height: 25%;
  margin: 1em;
  box-shadow: 2px 2px 2px 2px black;
`
export const BgButton2 = styled.button`
  width: 25%;
  height: 25%;
  margin: 1em;
  box-shadow: 2px 2px 1px 2px black;
`
export const BgButton3 = styled.button`
  width: 25%;
  height: 25%;
  margin: 1em;
  box-shadow: 2px 2px 1px 4px black;
`
export const BgButton4 = styled.button`
  width: 25%;
  height: 25%;
  margin: 1em;
  border: 0;
  box-shadow: 0.1em 0.1em 0.5em #124;
  background-image: linear-gradient(180deg,#57b,#148);
  :active {
    box-shadow: inset 0 0 0.5em #124,
                0 0.5em 1em rgba(0,0,0,0.4);
  }
`
export const BgButton5 = styled.button`
  width: 25%;
  height: 25%;
  margin: 1em;
  border: 0;
  background-image: linear-gradient(180deg,#57b,#148);
  box-shadow: inset 0 0 0.5em #124,
                0 0.5em 1em rgba(0,0,0,0.4);

`

export const BgButton6 = styled.button`
  width: 25%;
  height: 25%;
  margin: 1em;
  border: 0;
  box-shadow: 0 0.2em 0.2em rgba(0,0,0,0.15);
  background-color: #57b;
  :active {
    background-color: #148;
  }
  :hover {
    background-color: #456ab6;
  }
`

export const BgButton7 = styled.button`
  width: 25%;
  height: 25%;
  margin: 1em;
  border: 0;
  border-radius: 0.5em;
  box-shadow: 0 0.4em #148;
  background-color: #57b;
  text-shadow: 1px 1px #148;
  :active {
    background-color: #456ab6;
    transform: translateY(0.1em);
    box-shadow: 0 0.3em #148;
  }
`
export const BgButton8 = styled.button`
  width: 25%;
  height: 25%;
  margin: 1em;
  border: 0;
  border-radius: 0.5em;
  text-shadow: 1px 1px #148;
  background-color: #456ab6;
  transform: translateY(0.1em);
  box-shadow: 0 0.3em #148;
`
