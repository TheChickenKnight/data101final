import Script from 'next/script';

export default async function Home() {
  return (
    <div>
      <Script type="text/javascript" src="//cdn.datacamp.com/dcl/lastest/dcl-react.js.gz"></Script>
      {await CodeSnippet("function HelloWorld() {\n console.log(\"Hello, World\")\n}")}
    </div>
  );
}

async function CodeSnippet(text) {
  return(
    <>
    <div data-datacamp-exercise data-lang="python">
  <code data-type="pre-exercise-code">
    # no pec
  </code>
  <code data-type="sample-code">
    # Create a variable a, equal to 5


    # Print out a

  </code>
  <code data-type="solution">
    # Create a variable a, equal to 5
    a = 5

    # Print out a
    print(a)
  </code>
  <code data-type="sct">
    test_object(&quot;a&quot;)
    test_function(&quot;print&quot;)
    success_msg(&quot;Great job!&quot;)
  </code>
  <div data-type="hint">
    Use the assignment operator (<code>=</code>) to create the variable <code>a</code>.
  </div>
</div>
    </>
  );
}
