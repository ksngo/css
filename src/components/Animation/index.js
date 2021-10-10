import {
  AnimateContainer,
  AnimateItem,
  AnimateLabel,
  AnimateContent
} from "./styles.js";

function Animation() {
  return (
    <AnimateContainer>
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