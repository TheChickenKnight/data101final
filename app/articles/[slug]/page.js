"use client";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { gpt } from "gpti";
import { Skeleton } from "@/components/ui/skeleton";
import Article from "@/components/Article";

export default function Page() {
  const params = useParams();
  const [slug, setSlug] = useState("");

  useEffect(() => {
    if (params.slug) {
      const formatted = params.slug
        .split("-")
        .join(" ")
        .replaceAll("%3A", ":");
      setSlug(formatted);

      gpt.v1({
        messages: [
          { role: "assistant", content: "Hello! How are you today?" },
          {
            role: "user",
            content:
              "This is your task. Come up with an article about the next prompt without adding anything else to your response. Please do not contain the title at the beginning of the article, also don't just create a paragraph but write multiple paragraphs.",
          },
          {
            role: "assistant",
            content: "Of course. I'll do my best to assist that function.",
          },
        ],
        prompt: formatted,
        model: "gpt-3.5-turbo",
        markdown: false,
      }).then((data) => {
        data.gpt = data.gpt.trim().split(" ");
        let t = data.gpt[0];
        const max = Math.floor(t.length / 2);
        for (let k = max; k >= 1; k--) {
          const first  = t.slice(0, k).toLowerCase();
          const second = t.slice(k, 2*k).toLowerCase();
          if (first === second) {
            t = t.slice(k);
            break;
          }
        }
        data.gpt[0] = t;
        data.gpt = data.gpt.join(" ");
        document
          .getElementById("article")
          .outerHTML = (data.gpt.replaceAll("\n", "<br/>"));
      });
    }
  }, [params.slug]);

  return (
    <Article
        title={slug}
        paragraphs={[{
          id: "article",
          content: "skeleton",
        }]}
    />
  );
}
