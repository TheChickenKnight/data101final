export default async function Home() {
  return (<div>
    {await CodeSnippet("function HelloWorld() {\n console.log(\"Hello, World\")\n}")}
  </div>);
}

async function CodeSnippet(text) {
  return(
    <div data-datacamp-exercise data-lang="js">
      <code>
          {text}
      </code>
    </div>
  );
}
