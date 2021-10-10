import {
  TransContainer,
  TransItem,
  TransLabel,
  TransContent,
  TransButton,
  NormalButton,
  TransStepsButton,
  DropdownContainer,
  Dropdown,
  DropdownMenu,
  Dropdown2,
  DropdownMenu2
} from "./styles.js";


function Transitions() {

  const clickDropdown = (e)=> {
    
    e.currentTarget.classList.toggle("menu-open");
    e.currentTarget.nextElementSibling.classList.toggle("menu-open");
    // if(e.currentTarget.nextElementSibling.style.opacity === "0"){
    //   e.currentTarget.style.transition="opacity 0.2s ease 0s,visibility 0s ease 0s"
    //   e.currentTarget.nextElementSibling.style.opacity="1";
    //   e.currentTarget.nextElementSibling.style.visibility="visible";
    // } else {
    //   e.currentTarget.style.transition="opacity 0.2s ease 0s,visibility 0s ease 0.2s"
    //   e.currentTarget.nextElementSibling.style.opacity="0";
    //   e.currentTarget.nextElementSibling.style.visibility="hidden";
    // }
    
  }

  const clickDropdown2 = (e)=> {
    
    e.currentTarget.classList.toggle("menu-open");
    const menuHeight = e.currentTarget.nextElementSibling.scrollHeight;
    if(e.currentTarget.classList.contains("menu-open")){
      e.currentTarget.nextElementSibling.style.setProperty("height", menuHeight+"px");
    } else {
      e.currentTarget.nextElementSibling.style.setProperty("height", "0");
    }

    
  }
  return (
    <TransContainer>
      <TransItem>
        <TransLabel>
        transition-property: all/background-color;<br/>
        transition-duration: 0.2s;<br/>
        transition-timing-function: ease;<mark>default</mark><br/>
        transition-delay: 0s;<br/>
        (alternatively)<br/>
        transition: all 0.2s ease 0s;
        </TransLabel>
        <TransContent>
          <TransButton> with Transition(cubic beizer function) </TransButton>
          <NormalButton> normal </NormalButton>
        </TransContent>
      </TransItem>
      

      <TransItem>
        <TransLabel>
          <h3>dropdown element:</h3>
          transition: opacity 0.2s ease 0s,<br/>
            visibility 0s ease <mark>0s</mark>;<br/>
          &#38;.menu-open &#123;<mark>toggle menu-open class in dropdown element</mark><br/>
            transition: opacity 0.2s ease 0s,<br/>
            visibility 0s ease <mark>0.2s</mark>;<br/>
          &#125;<br/><br/>
          <mark>1) 0s delay transition for visibility when visibility is hidden.</mark><br/>
          <mark>When menu is hidden, we want visibility transition to take place immediately with opacity transition.</mark><br/>
          <mark>2) 0.2s delay transition for visibility when visibility is visible.</mark><br/>
          <mark>When menu is visible, we can let opacity to transition finish by 0.2s before visibility transition starts.</mark><br/>
          <br/>
          <h3>menu element:</h3>
          opacity: 0;<br/>
          visibility: hidden;<br/>
          &#38;.menu-open &#123;<mark>toggle menu-open class in menu element</mark><br/>
            opacity: 1;<br/>
            visibility: visible;<br/>
          &#125;

        </TransLabel>
        <TransContent>
          <DropdownContainer>
            <Dropdown onClick={clickDropdown}>
              dropdown (by transitioning opacity and visibility)
            </Dropdown>
            <DropdownMenu> 
              <ul>a</ul>
              <ul>b</ul>
              <ul>c</ul>
              <ul>a</ul>
              <ul>b</ul>
              <ul>c</ul>
            </DropdownMenu>
          </DropdownContainer>
        </TransContent>
      </TransItem>

      <TransItem>
        <TransLabel>
          <h3>dropdown2 element:</h3>
          <br/>
          <h3>menu2 element:</h3>
          height: 0;<br/>
          overflow: hidden;<br/>
          transition: height 0.3s ease-out;<br/>
          &#38;$&#123;Dropdown2&#125;.menu-open &#123;<br/>
          <mark>if dropdown2 element has menu-open class, set height to auto.</mark><br/>
            height:auto;<br/>
          &#125;<br/><br/>
          <h3>Script:</h3>
          <mark>Add height property to menu element so that height:auto will work.</mark><br/>
          <code>
            e.currentTarget.classList.toggle("menu-open");<br/>
            &nbsp;<mark>Add/remove menu-open class to dropdown2 element</mark><br/>
            const menuHeight = e.currentTarget.nextElementSibling.scrollHeight;
            &nbsp;<mark>Find the menu's scrollheight. </mark><br/>
            if(e.currentTarget.classList.contains("menu-open"))&#123;<br/>
            &nbsp;<mark>When dropdown2 element has menu-open class, set menu2 element with scrollheight</mark><br/>
              e.currentTarget.nextElementSibling.style.setProperty("height", menuHeight+"px");<br/>
            &#125; else &#123;<br/>
              e.currentTarget.nextElementSibling.style.setProperty("height", "0");<br/>
            &#125;
          </code>


        </TransLabel>
        <TransContent>
          <DropdownContainer>
            <Dropdown2 onClick={clickDropdown2}>
              dropdown2 (by transitioning height)
            </Dropdown2>
            <DropdownMenu2> 
              <ul>a</ul>
              <ul>b</ul>
              <ul>c</ul>
              <ul>a</ul>
              <ul>b</ul>
              <ul>c</ul>
            </DropdownMenu2>
          </DropdownContainer>
        </TransContent>
      </TransItem>

      <TransItem>
        <TransLabel>
          transition: all 0.2s steps(5, start) 0s;
        </TransLabel>
        <TransContent>
          <TransStepsButton> transition with steps function</TransStepsButton>
        </TransContent>
      </TransItem>

    </TransContainer>
  )
}

export default Transitions;