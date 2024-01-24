
import { gpt } from "gpti";

export default function Page({ params }) {
    console.log(params.slug.split("-").join(" ").replaceAll("%3A", ":"))
    ask(params.slug.split("-").join(" ").replaceAll("%3A", ":"));
    return <p id="article"/>;
    function ask(prompt) {
        gpt({
            messages: [
                {
                    role: "assistant",
                    content: "Hello! How are you today?"
                },
                {
                    role: "user",
                    content: "This is your task. Come up with an article about the next prompt without adding anything else to your response."
                },
                {
                    role: "assistant",
                    content: "Of course. I'll do my best to assist that function."
                }
            ],
            prompt,
            model: "gpt-3.5-turbo",
            markdown: false
        }, (err, data) => {
            if(err != null) {
                console.error(err);
            } else {
                document.getElementById("article").innerHTML = data.gpt;
            }
        });
    }
}