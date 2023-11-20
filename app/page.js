
export default function Home() {
  return (<div>
    {CodeSnippet("function HelloWorld() {\n console.log(\"Hello, World\")\n}", "js")}
  </div>);
}

function CodeSnippet(text, lang) {
  return(
    <div>
      <pre>
        <code class={"language-" + lang}>
          {text}
        </code>
      </pre>
    </div>
  );
}
