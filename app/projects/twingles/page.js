import Clink from '@/components/ui/clink';

export default function Trimps() {
    return (
        <div className="fixed w-full top-0 h-full">
            <p className="text-black dark:text-white">
                <strong className='text-3xl'>Description</strong>
                <br/>
                Below is my project <Clink href="https://github.com/TheChickenKnight/diep.io">Twingles</Clink>. <br/>
                It is an automated simulation, meaning there is not a way to interact with it, but you can watch. <br/>
                The triangles all get rewarded depending on how many circles they contact and then will be naturally <br/>
                selected out in order to create a triangle that is good at pathfinding towards thes circles.<br/>
                <br/>
                The graph below is also generated with each epoch (generation) of traingles which allows to see if progress was actually made. <br/>
                The triangles also have a vision cone in front where they can only see within.
            </p>
            <iframe className="block w-full h-full" src="/twingles/index.html"/>
        </div>
    );
}