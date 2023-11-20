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
    <div data-datacamp-exercise data-lang="js">
      <code>
          {text}
      </code>
    </div>
  );
}
