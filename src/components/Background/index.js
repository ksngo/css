import {
  BgContainer,
  BgItem,
  BgLabel,
  BgContent1,
  BgContent2,
  BgContent3,
  BgContent4,
  BgContent5,
  BgContent6,
  BgContent7,
  BgContent8,
  BgContent9,
  BgContent10,
  BgContent11,
  BgContent12,
  BgContent13,
  BgContent14,
  BgContent15,
  BgContent16,
  BgContent17,
  BgButton1,
  BgButton2,
  BgButton3,
  BgButton4,
  BgButton5,
  BgButton6,
  BgButton7,
  BgButton8,
  BgContent18,
  BgContent18A,
  BgContent19,
  BgContent20,
  BgContent21,
  BgContent22,
  BgContent23,
  BgContent24,
  BlendText,
} from "./styles.js"

function Background() {

  const blendConfigs = [
    "multiply","darken","color-burn",
    "screen", "lighten", "color-dodge",
    "overlay", "hard-light", "soft-light",
    "hue", "saturation","luminosity","color",
    "difference","exclusion"
  ];

  return (
    <BgContainer>
      <BgItem>
        <BgLabel>
          background-image: url('pika.png');
        </BgLabel>
        <BgContent1 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: url('pika.png');<br />
          background-size: contain;
        </BgLabel>
        <BgContent2 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: url('pika.png');<br />
          background-size: cover;
        </BgLabel>
        <BgContent3 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: url('pika.png');<br />
          background-size: contain;<br />
          background-repeat: no-repeat;
        </BgLabel>
        <BgContent4 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: linear-gradient(to right, white, var(--palette-1-mint));
        </BgLabel>
        <BgContent5 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: linear-gradient(to bottom left, white, var(--palette-1-mint));
        </BgLabel>
        <BgContent6 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: linear-gradient(180deg, white, var(--palette-1-mint));
        </BgLabel>
        <BgContent7 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: linear-gradient(90deg, white, mint, yellow);
        </BgLabel>
        <BgContent8 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: linear-gradient(90deg, white 10%, mint 30%, yellow 70%);
        </BgLabel>
        <BgContent9 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: linear-gradient(90deg, white 10%, mint10%, mint 70%, yellow 70%);
        </BgLabel>
        <BgContent10 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: repeating-linear-gradient(90deg, mint, mint 10px, yellow 10px, yellow 20px);
        </BgLabel>
        <BgContent11 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: repeating-linear-gradient(90deg, mint, mint 10px, yellow 10px, yellow 20px);
        </BgLabel>
        <BgContent12 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: radial-gradient(mint, yellow);
        </BgLabel>
        <BgContent13 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: radial-gradient(circle,mint, yellow);
        </BgLabel>
        <BgContent14 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: radial-gradient(3em at 25% 25%,mint, yellow);<br />
          positioning at 25% left 25% top
        </BgLabel>
        <BgContent15 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: radial-gradient(circle,mint 0%,purple 75%, yellow 100%);
        </BgLabel>
        <BgContent16 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: repeat-radial-gradient(circle,mint,mint 5px, yellow 5px, yellow 10px);
        </BgLabel>
        <BgContent17 />
      </BgItem>
      <BgItem>
        <BgLabel>
          x y (blur radius) (spread radius) color <br />
          1) box-shadow: 2px 2px 2px 2px black; <br />
          2) box-shadow: 2px 2px 1px 2px black; <br />
          3) box-shadow: 2px 2px 1px 4px black; <br />
        </BgLabel>
        <BgContent13>
          <BgButton1>1</BgButton1>
          <BgButton2>2</BgButton2>
          <BgButton3>3</BgButton3>
        </BgContent13>
      </BgItem>
      <BgItem>
        <BgLabel>
          box-shadow: 0.1em 0.1em 0.5em #124;<br />
          background-image: linear-gradient(180deg,#57b,#148);<br />
          <mark>linear gradient bg color</mark><br />
          :active &#123;box-shadow: inset 0 0 0.5em #124,<br />
          0 0.5em 1em rgba(0,0,0,0.4);&#125;<mark>toggle box-shadow @active</mark>

        </BgLabel>
        <BgContent13>
          <BgButton4> normal </BgButton4>
          <BgButton5>active</BgButton5>
        </BgContent13>
      </BgItem>
      <BgItem>
        <BgLabel>
          box-shadow: 0 0.2em 0.2em rgba(0,0,0,0.15);<br />
          <mark>black transparent shadow vertically only</mark><br />
          background-color: #57b;<mark>flat color</mark><br />
          :active &#123;background-color: #148;&#125;<br />
          :hover &#123; background-color: #456ab6;&#125;
        </BgLabel>
        <BgContent13>
          <BgButton6 />
        </BgContent13>
      </BgItem>

      <BgItem>
        <BgLabel>
          border-radius: 0.5em;<br />
          box-shadow: 0 0.4em #148;<mark>vertical shadow</mark><br />
          background-color: #57b;<br />
          text-shadow: 1px 1px #148;<mark>text shadow</mark><br />
          :active &#123;<br />
          background-color: #456ab6;<mark>active darker color</mark><br />
          transform: translateY(0.1em);<mark>shift &#x2193; @active</mark><br />
          box-shadow: 0 0.3em #148;&#125;<mark>smaller shadow @active</mark>
        </BgLabel>
        <BgContent13>
          <BgButton7>normal</BgButton7>
          <BgButton8>active</BgButton8>
        </BgContent13>
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: url('pika.png'),url('squirtle.png'),url('squirtle.png');<br />
          background-size: contain;<br />
          background-repeat: no-repeat;<br />
          background-position: 0px,50px, 150px;<br />
        </BgLabel>
        <BgContent18A />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: url('pika.png'),url('squirtle.png'),url('squirtle.png');<br />
          background-size: contain;<br />
          background-repeat: no-repeat;<br />
          background-position: 0px,50px, 150px;<br />
          background-blend-mode: <mark>multiply;</mark><br />
        </BgLabel>
        <BgContent18 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: url('pika.png'),url('squirtle.png'),url('squirtle.png');<br />
          background-size: contain;<br />
          background-repeat: no-repeat;<br />
          background-position: 0px,50px, 150px;<br />
          background-blend-mode: <mark>color-burn;</mark><br />
        </BgLabel>
        <BgContent19 />
      </BgItem>
      <BgItem>
        <BgLabel>
          background-image: url('pika.png'),url('squirtle.png'),url('squirtle.png');<br />
          background-size: contain;<br />
          background-repeat: no-repeat;<br />
          background-position: 0px,50px, 150px;<br />
          background-blend-mode: <mark>difference;</mark><br />
        </BgLabel>
        <BgContent20 />
      </BgItem>

      <BgItem>
        <BgLabel>
          background-image: url('pika.png'),url('squirtle.png'),url('squirtle.png');<br />
          <mark>background-color: mint;</mark><br />
          background-size: contain;<br />
          background-repeat: no-repeat;<br />
          background-position: 0px,50px, 150px;<br />
        </BgLabel>
        <BgContent23 />
      </BgItem>

      <BgItem>
        <BgLabel>
          background-image: url('pika.png'),url('squirtle.png'),url('squirtle.png');<br />
          <mark>background-color: mint;</mark><br />
          background-size: contain;<br />
          background-repeat: no-repeat;<br />
          background-position: 0px,50px, 150px;<br />
          background-blend-mode: <mark>difference;</mark><br />
        </BgLabel>
        <BgContent21 />
      </BgItem>

      <BgItem>
        <BgLabel>
          background-image: url('pika.png'),url('squirtle.png'),url('squirtle.png');<br />
          <mark>background-color: mint;</mark><br />
          background-size: contain;<br />
          background-repeat: no-repeat;<br />
          background-position: 0px,50px, 150px;<br />
          background-blend-mode: <mark>luminosity;</mark><br />
        </BgLabel>
        <BgContent22 />
      </BgItem>

      {blendConfigs.map((item) =>
        <BgItem>
          <BgLabel>
            container &#x2192; repeating-radial-gradient background<br />
            text-box &#123; <br />
            background-color: white; <br />
            color: black; <br />
            <mark>mix-blend-mode: {item}</mark>&#125;<br />
          </BgLabel>
          <BgContent24>
            <BlendText value={item}>
              ABC
            </BlendText>
          </BgContent24>
        </BgItem>
      )}
      <BgItem>
        <BgLabel></BgLabel>
        <BgContent13></BgContent13>
      </BgItem>
      <BgItem>
        <BgLabel></BgLabel>
        <BgContent13></BgContent13>
      </BgItem>

    </BgContainer>
  )
}

export default Background;