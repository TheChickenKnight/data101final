import Clink from "@/components/ui/clink";
import Text from "@/components/ui/text";
import Link from "next/link";

export default function Home() {
  return (
    <div>
      <Text><strong>Title Place holder</strong></Text>
      <Text>Hey! As of now, I created this website to house <Clink href="https://chckn.vercel.app/projects/data101" className="text-blue-400">my Data 101 Project</Clink>.</Text>
      <Text>The website is very empty because im in kind of a rush to perfect the data 101 project instead.</Text>
    </div>
  );
}
