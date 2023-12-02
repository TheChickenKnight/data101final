import Link from 'next/link';
import Datacamp from '/components/Datacamp';
import classNames from 'classnames';

export const data = {
  name: "Data 101 Final",
  id: "data101",
  children: [],
  parent: "projects",
  icon: ""
}


export default function Data101() {

    return (
      <div>
        <strong className="flex text-3xl">Data 101 Final Project</strong>
        <p>As a Rutgers student, I decided to take the class <a className='text-red-400'>data 101</a> to test the waters of data science. Here is my Final Project.</p>
        <strong className="flex text-xl">The Database</strong>
        <Link href='https://chckn.vercel.app/api/globalyt' className='flex text-blue-400'>Global Youtube Statistics</Link>
        <p>This database comes from the page <Link href="https://www.kaggle.com/datasets/nelgiriyewithana/global-youtube-statistics-2023" className='text-blue-400'>Kaggle</Link></p>
        <p>It contains entries of the top Youtube channels in order.</p>
        <strong className="flex text-xl">Project Guidelines</strong>
        <blockquote className='rounded-md bg-slate-600 p-2 ml-2 mt-4 mb-4 mr-auto border-white border'>
          <p>1. Before you execute rpart, describe the data using tables and plots based on techniques</p>
          <p>from the previous chapters of the Active Textbook. Knowing your data before just</p>
          <p>blindly performing rpart is always a good idea. Be sure to report the confusion matrix.</p>
          <p className='mt-4'>2. After you generate results from rpart, perform Naïve Bayes Classification using the</p>
          <p>classification variable and the predictors chosen for rpart. Be sure to report the confusion</p>
          <p>matrix. Compare the accuracy with the rpart accuracy.</p>
          <p className='mt-4'>Organize the project material along the lines of a Project Summary following the outline</p>
          <p>below. Your classmates are the target for your Project Summary. The Project Summary</p>
          <p>can be in the form of a Word document or Power Point presentation.</p>
          <p className='mt-4'>A description of your methods that is targeted to your classmates, and a discussion of the</p>
          <p>results should be generated.</p>
        </blockquote>
        <Datacamp text={"2+4\n5+7"}/>
      </div>
    );
  }
  