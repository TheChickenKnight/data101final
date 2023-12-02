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
        <Link href='https://chckn.vercel.app/api/obdb' className='flex text-blue-400'>Obesity or CVD risk (Classify/Regressor/Cluster)</Link>
        <p>This database comes from the page <Link href="https://www.kaggle.com/datasets/aravindpcoder/obesity-or-cvd-risk-classifyregressorcluster/" className='text-blue-400'>Kaggle</Link></p>
        <strong className="flex text-l mt-3">Description</strong>
        <blockquote className='rounded-md bg-slate-600 p-4 ml-2 mt-4 mb-4 mr-auto border border-white w-fit'>
          <p>the estimation of obesity levels in people from the countries of Mexico, Peru and Colombia,</p>
          <p>with ages between 14 and 61 and diverse eating habits and physical condition,</p>
          <p>data was collected using a web platform with a survey where anonymous users answered each question,</p> 
          <p>then the information was processed obtaining 17 attributes and 2111 records.</p>
        </blockquote>
        <strong className="flex text-xl">Project Guidelines</strong>
        <blockquote className='rounded-md bg-slate-600 p-4 ml-2 mt-4 mb-4 mr-auto border border-white w-fit'>
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
        <strong className="flex text-xl">Data Description</strong>
        <p>Because my dataset is so large, im going to use a random sample of it for readable plots.</p>
        <p>Below I&apos;m using the same embeds as the <Link href="http://adiadi.pythonanywhere.com" className='text-blue-400'>Active Textbook</Link> does.</p>
        <Datacamp text= {
          'obesity <- read.csv("https://raw.githubusercontent.com/TheChickenKnight/data101final/master/public/ObesityDataSet.csv")\n' +
          't <- table(obesity$MTRANS)\n'+
          'barplot(t, xlab="transportation", ylab="Population", main="Transportation method Popularity", border="black")'
        } className="h-96 z-10"/>
      </div>
    );
  }
  