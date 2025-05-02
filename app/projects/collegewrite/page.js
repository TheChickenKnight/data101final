import Clink from '@/components/ui/clink';
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { Separator } from "@/components/ui/separator"

export default function CollegeWrite() {
    return (
        <div className="flex justify-center">
            <div className="max-w-4xl w-full px-4">
                <p className="text-black dark:text-white flex text-4xl font-bold">Are Computer Science Students &#34;Cooked&#34;?</p>
                <p className='text-slate-600 dark:text-slate-200'>A delve into AI and its overwhelming presence today.</p>
                <Separator className="my-4"/>
                <br/>
                <p className='text-black dark:text-white text-lg'>Artificial Intelligence over the years has always reflected both the ambitions plus the anxieties of computer science. From its early days of linear algebra, to the more fluid and unpredictable generative AI, we have watched this kind of machine intelligence become more. But the latest frontier does not stop just at a closed environment. Up until now, most AI have a learning phase, where data is inputted to then later be in a usable form, where no training will no longer take place. But, no human intelligence works this way. A new vision is emerging, one where these systems can autonomously adapt in open environments, continuously learning without being told when. Bing Liu, a professor at the University of Illinois described this leap in <Clink href="https://onlinelibrary.wiley.com/doi/epdf/10.1002/aaai.12087">AI Magazine Volume 44, Issue 2.</Clink> “The key challenge here is how to automate the process [of training] so that it is carried out continually on the agent&#39;s own initiative and through its own interactions with humans, other agents and the environment just like human on-the-job learning”(Liu). This is just another example of the everchanging, unstoppable automation in front of us.</p>
                <br/><br/>
                <Accordion type="single" collapsible className="w-full">
                    <AccordionItem value="item-1">
                        <AccordionTrigger className="text-black dark:text-white text-xl">Will the CS workforce get taken over by AI?</AccordionTrigger>
                        <AccordionContent className="text-black dark:text-white text-lg">
                        The idea that artificial intelligence might replace software developers has evolved from a speculative fear to an increasingly real concern. With the advent of powerful coding assistants like <Clink href="https://github.com/features/copilot">GitHub Copilot</Clink> and <Clink href="https://openai.com/index/chatgpt/">ChatGPT</Clink>, and more recently the rise of autonomous agents like <Clink href="https://devin.ai">Devin</Clink>—the first AI software engineer—the boundaries of what AI can do in the realm of programming have shifted. But will these tools truly replace the need for human computer scientists, or are they simply changing the shape of the field? Much of the anxiety stems from rapid capability growth. Tools like Devin can autonomously generate, debug, and deploy code from high-level prompts — a development that has prompted headlines like “Software engineers beware: Devin, the AI is coming for your jobs”​(Avadia). At first glance, the author seems to suggest a bleak future for human developers, one where AI agents do the coding, leaving programmers obsolete. However, this perspective often exaggerates the threat while underestimating the complexity of real-world development work.<br/><br/>
                        Research into developer perceptions of AI tools reveals a more nuanced picture. According to <Clink href="https://www.sciencedirect.com/science/article/abs/pii/S0167642324000340">a study assessing ChatGPT’s role in software development</Clink>, many programmers view these tools not as threats, but as collaborators. “Most participants did not perceive AI tools like ChatGPT as replacements,” the authors note, “but rather as assistants that could enhance productivity, reduce drudgery, and support learning”​(‌Kuhail et al.). In other words, the function of the software engineer may be shifting, but not disappearing. Still, this transformation is not without consequence. Workers exposed to new AI technologies often report negative emotional impacts. <Clink href="https://link.springer.com/article/10.1007/s00146-024-01962-8">A study from the AI & Society journal</Clink> found that “real-world experiences with new technologies — rather than hypothetical fears — were strongly associated with reduced expected well-being among workers”​. This suggests that the threat isn&#39;t merely job loss, but a deeper erosion of agency and clarity in the workplace. As roles blur and expectations shift, programmers may find themselves in unfamiliar terrain — expected to oversee systems that partially program themselves. Overall, as it is now, it is hard to discern whether AI will really take over jobs.
                        </AccordionContent>
                    </AccordionItem>
                    <AccordionItem value="item-2">
                        <AccordionTrigger className="text-black dark:text-white text-xl">Is the CS Job Market Oversaturated?</AccordionTrigger>
                        <AccordionContent className="text-black dark:text-white text-lg">
                            Historically, the perception of computer science was as a surefire path towards career success. However, this is being challenged by piles of media, whether it be research or from computer science students themselves. They all suggest that the field is experiencing a serious degree of oversaturation. Perhaps the most iconic case is a fellow computer science student Oliver Wu, a University of Michigan student who submitted 456 internship applications in the course of 4 months, finally earning a singular offer from Ford, definitely not from some tech giant. [add a picture of him or his tiktok here] His experience is not isolated; it reflects the reality where even conventionally highly qualified students face fierce competition to be allocated good internships. As The New York Times reports, Many students who dreamt of and tailored their education towards Big Tech firms now face a “shrinking job market,” riddled with layoffs at companies such as Meta, Amazon, and Google. The Wall Street Journal reciprocates this trend, noting that software engineering roles have dried up significantly as major players reallocate resources toward AI development, often hiring fewer engineers for more specialized roles. Speaking of education, demand for computer science degrees continue to surge as well, leading to overcrowded classrooms and limited resources. Another article from The New York Times mentions institutions like the University of Texas and the University of Washington. Students find themselves unable to enroll in core classes even due to overwhelming demand and a low supply of faculty. This signals not only the fierce competition due to popularity but also a structural lag in accommodation–essentially making life even harder for upcoming CS students.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion>
            </div>
        </div>
    );
}