"use client";

import Article from "@/components/Article";
import Clink from "@/components/ui/clink";
import Image from "next/image";

import oliver from "./oliver-wus-epic-internship-search.webp";
import model from "./model.png";

export default function CollegeWritePage() {
  const title = `Are Computer Science Students "Cooked"?`;
  const subtitle = `A delve into AI and its overwhelming presence today.`;

  const paragraphs = [
    <>
      Artificial Intelligence over the years has always reflected both the ambitions plus 
      the anxieties of computer science. From its early days of linear algebra, to the more 
      fluid and unpredictable generative AI, we have watched this kind of machine intelligence
      become more. But the latest frontier does not stop just at a closed environment. Up 
      until now, most AI have a learning phase, where data is inputted to then later be in
      a usable form, where no training will no longer take place. But, no human intelligence
      works this way. A new vision is emerging, one where these systems can autonomously adapt 
      in open environments, continuously learning without being told when. Bing Liu, a professor 
      at the University of Illinois described this leap in  
      <Clink href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/aaai.12087"> <em>AI Magazine Volume 44, Issue 2.</em></Clink> 
      “The key challenge here is how to automate the process [of training] so that it is carried 
      out continually on the agent&#39;s own initiative and through its own interactions with humans,
      other agents and the environment just like human on-the-job learning”(Liu). This is just 
      another example of the everchanging, unstoppable automation in front of us. But, what does this mean for
      the future of computer science? The field has always been a place of innovation, but now it seems to be collapsing on itself. With the introduction of AI, hundreds of thousands of employees are being laid off, causing more competition for entry-level jobs (not to mention the current large number of students in the field). This leads to an inflation of qualifications, where students are expected to have multiple internships, hackathon wins, and even startup experience just to be considered for an entry-level position. This is not only a problem for students, but also for the industry as a whole. How will the field adapt to this new reality? Will we see a shift in the way we educate and train future computer scientists? Or will we see a collapse of the field as we know it? In this article, we will explore these questions and more, as we research the current state of computer science and AI.
    </>,
  ];

  const accordionSections = [
    {
      id: "ai-takes-over",
      title: "Will the CS workforce get taken over by AI?",
      content: (
        <>
          The idea that artificial intelligence might replace software developers has evolved from a speculative 
          fear to an increasingly real concern. With the advent of powerful coding assistants like 
          <Clink href="https://github.com/features/copilot">GitHub Copilot</Clink> and 
          <Clink href="https://openai.com/index/chatgpt/">ChatGPT</Clink>, and more recently the rise of autonomous 
          agents like <Clink href="https://devin.ai">Devin</Clink>—the first AI software engineer—the boundaries of
          what AI can do in the realm of programming have shifted. But will these tools truly replace the need for 
          human computer scientists, or are they simply changing the shape of the field? Much of the anxiety stems 
          from rapid capability growth. Tools like Devin can autonomously generate, debug, and deploy code from
          high-level prompts — a development that has prompted headlines like “Software engineers beware: Devin, 
          the AI is coming for your jobs”​(Avadia). At first glance, Tanya Avadia from Stevens Institute of Technology
          seems to suggest a bleak future for human developers, one where AI agents do the coding, leaving programmers
          obsolete. However, this perspective often exaggerates the threat while underestimating the complexity of 
          real-world development work.
          <br/>
          <br/>
          Research into developer perceptions of AI tools reveals a more nuanced picture. According to 
          <Clink href="https://www.sciencedirect.com/science/article/abs/pii/S0167642324000340">a study assessing 
          ChatGPT’s role in software development</Clink>, many programmers view these tools not as threats, but as 
          collaborators. “Most participants did not perceive AI tools like ChatGPT as replacements,” notes Mohammad Amin Kuhail,
          “but rather as assistants that could enhance productivity, reduce drudgery, and support learning”​(‌Kuhail et al.).
          In other words, the function of the software engineer may be shifting, but not disappearing. Still, this 
          transformation is not without consequence. Workers exposed to new AI technologies often report negative emotional 
          impacts. <Clink href="https://link.springer.com/article/10.1007/s00146-024-01962-8">A study from the 
          <i>AI & Society journal</i></Clink> found that “real-world experiences with new technologies — rather than 
          hypothetical fears — were strongly associated with reduced expected well-being among workers”(Hinks)​. This suggests 
          that the writer, Tim Hinks, is hinting that the threat isn&#39;t merely job loss, but a deeper erosion of agency and 
          clarity in the workplace. As roles blur and expectations shift, programmers may find themselves in unfamiliar terrain 
          — expected to oversee systems that partially program themselves. Overall, as it is now, it is hard to discern whether 
          AI will really take over jobs.
          <br/>
          <p className="font-base text-slate-400 dark:text-slate-200"><Clink href="https://chckn.vercel.app/search">click here</Clink> for an AI-generation demonstration.</p>
        </>
      ),
    },
    {
      id: "job-market",
      title: "Is the CS Job Market Oversaturated?",
      content: (
        <>
          Historically, the perception of computer science was as a surefire path towards career success. However, this 
          is being challenged by piles of media, whether it be research or from computer science students themselves. 
          They all suggest that the field is experiencing a serious degree of oversaturation. Perhaps the most iconic
          case is a fellow computer science student Oliver Wu, a University of Michigan student who submitted 456 internship 
          applications in the course of 4 months, finally earning a singular offer from Ford, definitely not from some tech giant.
          <Image className="mt-5 mb-2" src={oliver} alt="Pictured here are two screenshots from Oliver Wu's tiktoks."/>
          <p className="text-slate-600 dark:text-slate-200 text-base text-center mb-5">Pictured here are two screenshots from Oliver Wu's tiktoks.</p>
          His experience is not isolated; it reflects the reality where even conventionally highly qualified students face fierce 
          competition to be allocated good internships. 
          <Clink href="https://www.nytimes.com/2022/12/06/technology/computer-students-tech-jobs-layoffs.html">As Natasha Singer of <i>The New York Times</i> reports</Clink>, 
          many students who dreamt of and tailored their education towards big Tech firms now face a “shrinking job market”, 
          riddled with layoffs at companies such as Meta, Amazon, and Google. <i>The Wall Street Journal</i> reciprocates this 
          trend, noting that software engineering roles have dried up significantly as major players reallocate resources toward 
          AI development, often hiring fewer engineers for more specialized roles. Speaking of education, demand for computer 
          science degrees continue to surge as well, leading to overcrowded classrooms and limited resources. 
          <Clink href="https://www.nytimes.com/2019/01/24/technology/computer-science-courses-college.html">Another article from <i>The New York Times</i></Clink> 
          from Natasha mentions institutions like the University of Texas and the University of Washington. Students find themselves unable 
          to enroll in core classes even due to overwhelming demand and a low supply of faculty. This signals not only the fierce 
          competition due to popularity but also a structural lag in accommodation–essentially making life even harder for upcoming CS students.
        </>
      ),
    },
    {
      id: "extrarcurriculars",
      title: "Extrarcurriculars, Demands, and the Future",
      content: (
        <>
          Historically, it took a computer science degree coupled with general skill at programming, systems, and 
          databases to be considered for an entry-level position. Today, that foundation is only the start. CS 
          majors are expected to come in today with a resume that's bursting at the seams: multiple internships, 
          GitHub repositories, hackathon wins, personal websites, side projects, and even startup experience. It's 
          no longer merely a case of being competent technologically—it's about being excellent, all the time. 
          This aggressiveness has resulted in what is now referred to by many as the "inflation" of expectations 
          for hiring into entry-level jobs.
          <br/>
          <br/>
          Evidence confirms this trend. 
          <Clink href="https://research-ebsco-com.proxy.libraries.rutgers.edu/c/nx7rpm/viewer/pdf/5twfnqsp6z">A longitudinal study conducted by Aasheim et al.</Clink> suggests that while 
          fundamental skills like security, networking, and operating systems remain relevant, the most desirable 
          qualities in new employees are soft skills like honesty, communications, and flexibility. These are 
          competencies that are not even explicitly taught in most CS programs. Meanwhile, emerging technologies 
          and complex workflows—like cloud computing, agile development, and DevOps—are routinely assumed to be 
          know-how in job advertisements, again widening the gap between academic preparation and industry requirements.
          <br/>
          <br/>
          Outside of the classroom, it becomes even more difficult. Hackathons and coding competitions have become 
          de facto required participation, some seeing them as career-building events rather than learning experiences. 
          <Clink href="https://onlinelibrary-wiley-com.proxy.libraries.rutgers.edu/doi/full/10.1002/cae.22564">A 2022 study on going to hackathons</Clink> 
          highlights that it is not because students want to learn or try things 
          out that they go, but because hackathons offer the competitive career advantage that they would otherwise 
          not gain. In other words, even extracurriculars are now being commodified and professionalized.
          <br/>
          <br/>
          The outcome? Students find themselves increasingly subject to pressure to overperform in order to make 
          it as simply "average" in a sea of competition. And still, employment opportunities loom uncertain. As 
          <Clink href="https://www.businessinsider.com/computer-science-major-myth-job-security-money-salary-2023-11">one Business Insider article by Kwan Wei Kevin Tan</Clink> unabashedly summarized, "getting a degree doesn't mean you get a job"—a 
          comment that captures bleak inequality between climbing student yield and narrowing opportunity. What 
          was once an open, accessible arena is now a high-stakes proving ground where the finish line keeps moving.
        </>
      )
    }
  ];

  return (
    <Article
      title={title}
      subtitle={subtitle}
      coverImage={{ src: model, alt: "Model of SOLA AI" }}
      paragraphs={paragraphs}
      accordionSections={accordionSections}
    />
  );
}