const data = {
  name: "Resume",
  id: "resume",
  children: [],
  parent: "personal",
  icon: ""
}

export default function Resume() {
    return (
        <iframe className="w-full h-full" src="https://docs.google.com/gview?url=https://github.com/TheChickenKnight/data101final/raw/master/public/Mark%20Christian%20Resume.docx&embedded=true"/>
    );
  }
  