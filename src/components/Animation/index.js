import {
  AnimateContainer,
  AnimateItem,
  AnimateLabel,
  AnimateContent,
  AnimateContentGrid,
  AnimateContentGridFill,
  Test1,
  TestFlex,
  TestGrid,
  Test2,
  Test3,
  Test4
} from "./styles.js";

function Animation() {
  return (
    <AnimateContainer>
      <AnimateItem>
        <AnimateLabel>
          @keyframes test1kf &#123;<br />
          &emsp;0% &#123;<br />
          &emsp;&emsp;background - color: var(--palette-1-pink);<br />
          &emsp;&emsp;transform: translate(0);<br />
          &emsp;&#125;<br />
          &emsp;% &#123;<br />
          &emsp;&emsp;transform: translate(50px);<br />
          &emsp;&#125;<br />
          &emsp;100% &#123;<br />
          &emsp;&emsp;transform: translate(0);<br />
          &emsp;background-color: var(--palette-1-mint);<br />
          &emsp;&#125;<br />
          &#125;
          <hr />
          animation: $&#123;test1kf&#125; 1s ease-out infinite;<br />
          <mark>name , duration, timing-function, iteration-count</mark>
        </AnimateLabel>
        <AnimateContent>
          <Test1 />
        </AnimateContent>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          @keyframes test2kf &#123;<br />
          &emsp;0% &#123;<br />
          &emsp;&emsp;transform: perspective(500px) translateZ(-800px) rotateY(90deg);<br />
          &emsp;&#125;<br />
          &emsp;50% &#123;<br />
          &emsp;&emsp;transform: perspective(500px) translateZ(-160px) rotateY(87deg);<br />
          &emsp;&#125;<br />
          &emsp;100% &#123;<br />
          &emsp;&emsp;transform: perspective(500px) translateZ(0) rotateY(0);<br />
          &emsp;&#125;<br />
          &#125;
          <hr />
          animation: $&#123;test2kf&#125; 1s ease-out 3;<br />
          <hr />
          @keyframes shakekf &#123;<br />
          &emsp;0%,100% &#123;transform: translateX(0);&#125;<br />
          &emsp;10%,30%,50%,70% &#123;transform: translateX(-0.5em);&#125;<br />
          &emsp;20%,40%,60% &#123;transform: translateX(0.5em);&#125;<br />
          &emsp;80% &#123;transform: translateX(-0.25em);&#125;<br />
          &emsp;90% &#123;transform: translateX(0.25em);&#125;<br />
          &#125;<br />
          <hr />
          animation: $&#123;shakekf&#125; 1s linear 3;
        </AnimateLabel>
        <AnimateContent>
          <Test2 />
          <Test4 />
        </AnimateContent>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          width: 100px;<br />
          height: 50px;<br />
          position: relative;<br />
          background-image: linear-gradient(var(--palette-1-pink), var(--palette-1-blue));<br />
          ::after &#123;<br />
          &emsp;content: "";<br />
          &emsp;border-top: 1em solid black;<br />
          &emsp;border-left: 1em solid transparent;<br />
          &emsp;border-right: 1em solid transparent;<br />
          &emsp;border-radius: 50%;<br />
          &emsp;position: absolute;<br />
          &emsp;top: 1em;<br />
          &emsp;right: .5em;<br />
          &emsp;animation: $&#123;spinkf&#125; 1s linear infinite;<br />
          &#125;<br />
          ::before &#123;<br />
          &emsp;content: "A";<br />
          &emsp;border-left: 5px solid white;<br />
          &emsp;border-radius: 50%;<br />
          &emsp;width: 2em;<br />
          &emsp;height: 2em;<br />
          &emsp;background-color: var(--palette-2-red);<br />
          &emsp;font-size: 1em;<br />
          &emsp;line-height: 2em;<br />
          &emsp;text-align: center;<br />
          &emsp;position: absolute;<br />
          &emsp;top: .5em;<br />
          &emsp;left: .5em;<br />
          &emsp;animation: $&#123;spinkf&#125; 1s linear infinite;<br />
          &#125;<br />
        </AnimateLabel>
        <AnimateContent>
          <Test3 />
        </AnimateContent>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          parent:<br />
          &emsp;display: flex;<br />
          &emsp;flex-flow: row wrap;<br />
          &emsp;justify-content: space-between;<br />
          child:<br />
          &emsp;flex: 1 1 50px;<br />
          &emsp;max-width: 80px;<br />
          &emsp;margin: 2.5px;<br />
          &emsp;height: 50px;<br />
        </AnimateLabel>
        <AnimateContent>
          <TestFlex />
          <TestFlex />
          <TestFlex />
          <TestFlex />
          <TestFlex />
          <TestFlex />
          <TestFlex />
          <TestFlex />
          <TestFlex />
          <TestFlex />
        </AnimateContent>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          parent:<br />
          &emsp;display: grid;<br />
          &emsp;grid-template-columns: repeat(<mark>auto-fit</mark>, minmax(50px,1fr));<br />
          &emsp;grid-gap: 5px;<br />
          child:<br />
          &emsp;max-width: 80px;<br />
          &emsp;height: 50px;
        </AnimateLabel>
        <AnimateContentGrid>
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
        </AnimateContentGrid>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          parent:<br />
          &emsp;display: grid;<br />
          &emsp;grid-template-columns: repeat(<mark>auto-fill</mark>, minmax(50px,1fr));<br />
          &emsp;grid-gap: 5px;<br />
          child:<br />
          &emsp;max-width: 80px;<br />
          &emsp;height: 50px;
        </AnimateLabel>
        <AnimateContentGridFill>
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
        </AnimateContentGridFill>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          parent:<br />
          &emsp;display: flex;<br />
          &emsp;flex-flow: row wrap;<br />
          &emsp;justify-content: space-between;<br />
          child:<br />
          &emsp;flex: 1 1 50px;<br />
          &emsp;max-width: 80px;<br />
          &emsp;margin: 2.5px;<br />
          &emsp;height: 50px;<br />
        </AnimateLabel>
        <AnimateContent>
          <TestFlex />
          <TestFlex />
          <TestFlex />
          <TestFlex />
        </AnimateContent>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          parent:<br />
          &emsp;display: grid;<br />
          &emsp;grid-template-columns: repeat(<mark>auto-fit</mark>, minmax(50px,1fr));<br />
          &emsp;grid-gap: 5px;<br />
          child:<br />
          &emsp;max-width: 80px;<br />
          &emsp;height: 50px;
        </AnimateLabel>
        <AnimateContentGrid>
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
        </AnimateContentGrid>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          parent:<br />
          &emsp;display: grid;<br />
          &emsp;grid-template-columns: repeat(<mark>auto-fill</mark>, minmax(50px,1fr));<br />
          &emsp;grid-gap: 5px;<br />
          child:<br />
          &emsp;max-width: 80px;<br />
          &emsp;height: 50px;
        </AnimateLabel>
        <AnimateContentGridFill>
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
          <TestGrid />
        </AnimateContentGridFill>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          abc
        </AnimateLabel>
        <AnimateContent>
          abc
        </AnimateContent>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          abc
        </AnimateLabel>
        <AnimateContent>
          abc
        </AnimateContent>
      </AnimateItem>
      <AnimateItem>
        <AnimateLabel>
          abc
        </AnimateLabel>
        <AnimateContent>
          abc
        </AnimateContent>
      </AnimateItem>
    </AnimateContainer>
  )
}

export default Animation;