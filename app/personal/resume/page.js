const data = {
  name: "Resume",
  id: "resume",
  children: [],
  parent: "personal",
  icon: ""
}

export default function Resume() {
    return (
      <div className="flex justify-center h-screen">
        <iframe className="max-w-4xl w-full px-4" src="/resume.html"/>
      </div>
    );
  }
  