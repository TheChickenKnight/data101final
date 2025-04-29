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
        <div className='mx-40 grow'>
            <p className='text-black dark:text-white'>
                <strong className="flex text-3xl">Are Computer Science Students &#34;Cooked&#34;?</strong>
            </p>
            <p className='text-slate-600 dark:text-slate-200'>A delve into AI and its overwhelming presence today.</p>
            <Separator className="my-4"/>
            <br/>
            <p className='text-black dark:text-white'>Artificial Intelligence over the years has always reflected both the ambitions plus the anxieties of computer science. From its early days of linear algebra, to the more fluid and unpredictable generative AI, we have watched this kind of machine intelligence become more. But the latest frontier does not stop just at a closed environment. Up until now, most AI have a learning phase, where data is inputted to then later be in a usable form, where no training will no longer take place. But, no human intelligence works this way. A new vision is emerging, one where these systems can autonomously adapt in open environments, continuously learning without being told when. Bing Liu, a professor at the University of Illinois described this leap in AI Magazine Volume 44, Issue 2. “The key challenge here is how to automate the process [of training] so that it is carried out continually on the agent&#39;s own initiative and through its own interactions with humans, other agents and the environment just like human on-the-job learning”(Liu). This is just another example of the everchanging, unstoppable automation in front of us.</p>
            <br/><br/>
            <Accordion type="single" collapsible className="w-full">
                <AccordionItem value="item-1">
                    <AccordionTrigger className="text-black dark:text-white">Will the CS workforce get taken over by AI?</AccordionTrigger>
                    <AccordionContent className="text-black dark:text-white">
                        The idea that artificial intelligence might replace software developers has evolved from a 
                        speculative fear to an increasingly real concern. With the advent of powerful coding assistants 
                        like GitHub Copilot and ChatGPT, and more recently the rise of autonomous agents like 
                        Devin—the first AI software engineer—the boundaries of what AI can do in the realm of 
                        programming have shifted. But will these tools truly replace the need for human computer 
                        scientists, or are they simply changing the shape of the field? Much of the anxiety stems from 
                        rapid capability growth. Tools like Devin can autonomously generate, debug, and deploy code 
                        from high-level prompts — a development that has prompted headlines like “Software engineers 
                        beware: Devin, the AI is coming for your jobs”​(Avadia). At first glance, the author seems to 
                        suggest a bleak future for human developers, one where AI agents do the coding, leaving 
                        programmers obsolete. However, this perspective often exaggerates the threat while 
                        underestimating the complexity of real-world development work.
                    </AccordionContent>
                </AccordionItem>
                <AccordionItem value="item-2">
                    <AccordionTrigger className="text-black dark:text-white">Is the CS Job Market Oversaturated?</AccordionTrigger>
                    <AccordionContent className="text-black dark:text-white">
                        test
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
        </div>
    );
}