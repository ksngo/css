import {
  FloatContainer,
  FloatContainer2,
  FloatContainer3,
  FloatContainer4,
  FloatMedia,
  FloatImage,
  FloatContent,
  FloatContent2
} from "./floatstyles";
import image from "./free.PNG";

function Float() {

  return (
    <>
      <br />
      <FloatContainer4>
        ::before,::after &#123;
        display: block;
        content: " pseudoblock for ::before and ::after ";
        &#125;
        ::after &#123;
        clear: both;
        &#125;


        <FloatMedia>float: left;</FloatMedia>

        <FloatMedia>2</FloatMedia>
        <FloatMedia>3</FloatMedia>
        <FloatMedia>4</FloatMedia>

      </FloatContainer4>
      <br />
      <FloatContainer>
        ::after &#123;
        clear: both;
        display: block;
        content: " pseudoblock... ";
        &#125;
        <br />


        ::after &#123; --&gt; "targets the pseudo element we create with display:block and content: "
        clear: both; --&gt; "makes pseduo block clears all floats"
        display: block; --&gt; "creates a pseudoblock with empty content to appear in document"
        content: " pseudoblock ";
        &#125;

        <FloatMedia>float: left;</FloatMedia>
        <FloatMedia>2</FloatMedia>
        <FloatMedia>3</FloatMedia>
        <FloatMedia>4</FloatMedia>

      </FloatContainer>
      <br />

      <FloatContainer2>
        overflow: auto;
        <FloatMedia>float: left;</FloatMedia>

        <FloatMedia>2</FloatMedia>
        <FloatMedia>3</FloatMedia>
        <FloatMedia>4</FloatMedia>

      </FloatContainer2>
      <br />
      <FloatContainer3>
        nothing
        <FloatMedia>float: left;</FloatMedia>
        <FloatMedia>2</FloatMedia>
        <FloatMedia>3</FloatMedia>
        <FloatMedia>4</FloatMedia>
      </FloatContainer3>
      <br /><br />
      <FloatContainer3>
        nothing
        <FloatMedia>float: left;</FloatMedia>

        <FloatMedia>
          <FloatImage src={image} />
          <FloatContent>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in neque sed diam ullamcorper consectetur eu ut magna. Suspendisse velit dui, scelerisque ac efficitur at, accumsan eu sapien. Aliquam laoreet turpis ac risus rhoncus, at rhoncus nibh tempus. Sed vel est neque. Sed non quam sem. Duis fringilla sit amet augue quis condimentum. Maecenas porta tortor sit amet diam molestie convallis. Etiam fermentum ac nibh ut euismod. Mauris sed mollis purus, ac rhoncus purus. Suspendisse vehicula, nunc a facilisis fringilla, turpis magna sagittis odio, venenatis fermentum ante nisl eu magna. Nulla a ornare risus, non facilisis ipsum. Mauris ullamcorper lectus et est sollicitudin pellentesque. Nulla bibendum porta urna, vel pretium ex commodo ut. Maecenas vehicula commodo tellus.
          </FloatContent>
        </FloatMedia>
        <FloatMedia>
          <FloatImage src={image} />
          <FloatContent2>
            overflow: auto; <br /><br />
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in neque sed diam ullamcorper consectetur eu ut magna. Suspendisse velit dui, scelerisque ac efficitur at, accumsan eu sapien. Aliquam laoreet turpis ac risus rhoncus, at rhoncus nibh tempus. Sed vel est neque. Sed non quam sem. Duis fringilla sit amet augue quis condimentum. Maecenas porta tortor sit amet diam molestie convallis. Etiam fermentum ac nibh ut euismod. Mauris sed mollis purus, ac rhoncus purus. Suspendisse vehicula, nunc a facilisis fringilla, turpis magna sagittis odio, venenatis fermentum ante nisl eu magna. Nulla a ornare risus, non facilisis ipsum. Mauris ullamcorper lectus et est sollicitudin pellentesque. Nulla bibendum porta urna, vel pretium ex commodo ut. Maecenas vehicula commodo tellus.
          </FloatContent2>
        </FloatMedia>
        <FloatMedia>
          4
        </FloatMedia>

      </FloatContainer3>
      <br />

    </>
  )
}

export default Float;