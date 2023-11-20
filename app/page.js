import Prism from "prismjs";
import "prismjs/components/prism-jsx";

export default async function Home() {
  return (<div>
    {await CodeSnippet("function HelloWorld() {\n console.log(\"Hello, World\")\n}", "js")}
  </div>);
}

async function CodeSnippet(text, lang) {
  await Prism.highlightAll();
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
