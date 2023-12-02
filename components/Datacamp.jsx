"use client"
import Script from "next/script";

export default function Datacamp({text, ...props}) {
    return (
        <div {...props}>
            <Script type="text/javascript" src="//cdn.datacamp.com/dcl-react.js.gz"></Script>
            <div data-datacamp-exercise data-lang="r">
                <code data-type="sample-code">
                    {text}
                </code>
            </div>
        </div>
    );
}