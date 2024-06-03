import Datacamp from '/components/Datacamp';
import Image from 'next/image';
import Clink from '@/components/ui/clink';

const data = {
  name: "Data 101 Final",
  id: "data101",
  children: [],
  parent: "projects",
  icon: ""
}


export default function Data101() {

    return (
      <div>
        <p className="text-black dark:text-white">
          <strong className="flex text-3xl">Data 101 Final Project</strong>
          <br/>
          As a Rutgers student, I decided to take the class <a className='text-red-400'>data 101</a> to test the waters of data science. Here is my Final Project.
          <br/>
          <br/>
          <strong className="flex text-xl">The Database</strong>
          <Clink href='https://chckn.vercel.app/api/obdb'>Obesity or CVD risk (Classify/Regressor/Cluster)</Clink><br/>
          This database comes from the page <Clink href="https://www.kaggle.com/datasets/aravindpcoder/obesity-or-cvd-risk-classifyregressorcluster/">Kaggle</Clink>
          <strong className="flex text-l mt-3">Description</strong>
        </p>
        <blockquote className='rounded-md bg-slate-600 p-4 ml-2 mt-4 mb-4 mr-auto border border-white w-fit text-black dark:text-white'>
          the estimation of obesity levels in people from the countries of Mexico, Peru and Colombia,<br/>
          with ages between 14 and 61 and diverse eating habits and physical condition,<br/>
          data was collected using a web platform with a survey where anonymous users answered each question,<br/>
          then the information was processed obtaining 17 attributes and 2111 records.<br/>
        </blockquote>
        <p className="text-black dark:text-white"><strong className="flex text-xl">Project Guidelines</strong></p>
        <blockquote className='rounded-md bg-slate-600 p-4 ml-2 mt-4 mb-4 mr-auto border border-white w-fit text-black dark:text-white'>
          1. Before you execute rpart, describe the data using tables and plots based on techniques<br/>
          from the previous chapters of the Active Textbook. Knowing your data before just<br/>
          blindly performing rpart is always a good idea. Be sure to report the confusion matrix.<br/>
          <p className='mt-4'>2. After you generate results from rpart, perform Naïve Bayes Classification using the</p>
          classification variable and the predictors chosen for rpart. Be sure to report the confusion<br/>
          matrix. Compare the accuracy with the rpart accuracy.<br/>
          <p className="mt-4">Organize the project material along the lines of a Project Summary following the outline</p>
          below. Your classmates are the target for your Project Summary. The Project Summary<br/>
          can be in the form of a Word document or Power Point presentation.<br/>
          <p className="mt-4">A description of your methods that is targeted to your classmates, and a discussion of the</p>
          results should be generated.<br/>
        </blockquote>
        <p className="text-black dark:text-white">
          <strong className="flex text-xl">Data Description</strong>
          Below I&apos;m using the same embeds as the <Clink href="http://adiadi.pythonanywhere.com">Active Textbook</Clink> does.<br/>
          Please continue to press run buttons within the embeds and read comments.<br/>
        </p>
        <Datacamp text= {
          '# Creates a Barplot of the most popular transportation methods.\n'+
          'obesity <- read.csv("https://raw.githubusercontent.com/TheChickenKnight/data101final/master/public/ObesityDataSet.csv")\n' +
          '# Brief Description\n' +
          'head(obesity)\n' +
          't <- table(obesity$MTRANS)\n'+
          'barplot(t, xlab="transportation", ylab="Population", main="Transportation method Popularity", border="black")\n' +
          '# A majority of public transportation users usually correlates to a more urban population.'
        } className="h-96 z-10"/>
        <br/>
        <Datacamp text= {
          '# Creates a Mosaicplot of the most popular transportation methods.\n'+
          'obesity <- read.csv("https://raw.githubusercontent.com/TheChickenKnight/data101final/master/public/ObesityDataSet.csv")\n' +
          'mosaicplot(obesity$NObeyesdad~obesity$family_history_with_overweight, xlab="Obesity", ylab="Family History", main="Continuity of Family Obesity", col=c("red", "blue"), border="black")\n' +
          '# As you can see, the more obese the entry, the more of a correlation of a family history of obesity.'
        } className="h-96 z-10"/>
        <p className="text-black dark:text-white">
          <strong className="flex text-xl">RPart Execution</strong>
          The function defined below is from <Clink href="https://github.com/devanshagr/CrossValidation/blob/master/R/cross_validation.R">the Textbook&apos;s cross_validate function</Clink>.
        </p>
        <Datacamp text= {
          'library(rpart)\n' +
          'cross_validate <- function(df, tree, n_iter, split_ratio, method = \'class\')\n' +
          '{\n' +
          ' # training data frame df\n' +
          '  df <- as.data.frame(df)\n' +
          '\n' +
          '  # mean_subset is a vector of accuracy values generated from the specified features in the tree object\n' +
          '  mean_subset <- c()\n' +
          '\n' +
          '  # mean_all is a vector of accuracy values generated from all the available features in the data frame\n' +
          '  mean_all <- c()\n' +
          '\n' +
          '  # control parameters for the decision tree\n' +
          '  contro = tree$control\n' +
          '\n' +
          '  # the following snippet will create relations to generate decision trees\n' +
          '  # relation_all will create a decision tree with all the features\n' +
          '  # relation_subset will create a decision tree with only user-specified features in tree\n' +
          '  dep <- all.vars(terms(tree))[1]\n' +
          '  indep <- list()\n' +
          '  relation_all = as.formula(paste(dep, \'.\', sep = "~"))\n' +
          '  i <- 1\n' +
          '  while (i < length(all.vars(terms(tree)))) {\n' +
          '    indep[[i]] <- all.vars(terms(tree))[i + 1]\n' +
          '    i <- i + 1\n' +
          '  }\n' +
          '  b <- paste(indep, collapse = "+")\n' +
          '  relation_subset <- as.formula(paste(dep, b, sep = "~"))\n' +
          '\n' +
          '  # creating train and test samples with the given split ratio\n' +
          '  # performing cross-validation n_iter times\n' +
          '  for (i in 1:n_iter) {\n' +
          '    sample <-\n' +
          '      sample.int(n = nrow(df),\n' +
          '                size = floor(split_ratio * nrow(df)),\n' +
          '                replace = F)\n' +
          '    train <- df[sample,]\n' +
          '    testing  <- df[-sample,]\n' +
          '    type = typeof(unlist(testing[dep]))\n' +
          '\n' +
          '    # decision tree for regression if the method specified is "anova"\n' +
          '    if (method == \'anova\') {\n' +
          '      first.tree <-\n' +
          '        rpart(\n' +
          '          relation_subset,\n' +
          '          data = train,\n' +
          '          control = contro,\n' +
          '          method = \'anova\'\n' +
          '        )\n' +
          '      second.tree <- rpart(relation_all, data = train, method = \'anova\')\n' +
          '      pred1.tree <- predict(first.tree, newdata = testing)\n' +
          '      pred2.tree <- predict(second.tree, newdata = testing)\n' +
          '      mean1 <- mean((as.numeric(pred1.tree) - testing[, dep]) ^ 2)\n' +
          '      mean2 <- mean((as.numeric(pred2.tree) - testing[, dep]) ^ 2)\n' +
          '      mean_subset <- c(mean_subset, mean1)\n' +
          '      mean_all <- c(mean_all, mean2)\n' +
          '    }\n' +
          '\n' +
          '   # decision tree for classification\n' +
          '   # if the method specified is not "anova", then this block is executed\n' +
          '   # if the method is not specified by the user, the default option is to perform classification\n' +
          '   else{\n' +
          '     first.tree <-\n' +
          '       rpart(\n' +
          '          relation_subset,\n' +
          '          data = train,\n' +
          '          control = contro,\n' +
          '          method = \'class\'\n' +
          '        )\n' +
          '      second.tree <- rpart(relation_all, data = train, method = \'class\')\n' +
          '      pred1.tree <- predict(first.tree, newdata = testing, type = \'class\')\n' +
          '      pred2.tree <-\n' +
          '        predict(second.tree, newdata = testing, type = \'class\')\n' +
          '      mean1 <-\n' +
          '        mean(as.character(pred1.tree) == as.character(testing[, dep]))\n' +
          '      mean2 <-\n' +
          '        mean(as.character(pred2.tree) == as.character(testing[, dep]))\n' +
          '      mean_subset <- c(mean_subset, mean1)\n' +
          '      mean_all <- c(mean_all, mean2)\n' +
          '    }\n' +
          '  }\n' +
          '\n' +
          ' # average_accuracy_subset is the average accuracy of n_iter iterations of cross-validation with user-specified features\n' +
          ' # average_acuracy_all is the average accuracy of n_iter iterations of cross-validation with all the available features\n' +
          ' # variance_accuracy_subset is the variance of accuracy of n_iter iterations of cross-validation with user-specified features\n' +
          ' # variance_accuracy_all is the variance of accuracy of n_iter iterations of cross-validation with all the available features\n' +
          ' cross_validation_stats <-\n' +
          '   list(\n' +
          '     "average_accuracy_subset" = mean(mean_subset, na.rm = T),\n' +
          '     "average_accuracy_all" = mean(mean_all, na.rm = T),\n' +
          '     "variance_accuracy_subset" = var(mean_subset, na.rm = T),\n' +
          '     "variance_accuracy_all" = var(mean_all, na.rm = T)\n' +
          '   )\n' +
          '\n' +
          ' # creating a data frame of accuracy_subset and accuracy_all\n' +
          ' # accuracy_subset contains n_iter accuracy values on cross-validation with user-specified features\n' +
          ' # accuracy_all contains n_iter accuracy values on cross-validation with all the available features\n' +
          ' cross_validation_df <-\n' +
          '   data.frame(accuracy_subset = mean_subset, accuracy_all = mean_all)\n' +
          ' return(list(cross_validation_df, cross_validation_stats))\n' +
          '}\n' +
          '\n' +
          'obesity <- read.csv("https://raw.githubusercontent.com/TheChickenKnight/data101final/master/public/ObesityDataSet.csv")\n' +
          'tree <- rpart(NObeyesdad ~ CAEC+FAVC+NCP+MTRANS, data=obesity, method="class", control = rpart.control(minsplit = 100))  #the split is performed in a random fashion\n' +
          'pred <- predict(tree, obesity, type="class")\n' +
          'cat("-----------------------------------PREDICTION-----------------------------------")\n' +
          'head(pred)\n' +
          'mean(obesity$NObeyesdad==pred)\n' +
          'cat("-----------------------------------CROSS-VALIDATION-----------------------------------")\n' +
          'cross_validate(obesity, tree, 5, 0.7)\n'
        } className="z-10"/>
        <div className='flow-root'>
          <Image alt="rpart tree" src="/tree.png" width="1000" height="1000" className='border-4 border-slate-400 rounded-md float-left'></Image>
          <p className="text-black dark:text-white float-none text-l">On left is the tree from the above r part</p>
        </div>
        
       <strong className="flex text-xl text-black dark:text-white">Naïve Bayes Classification</strong>
        <Datacamp text = {
          'library(e1071)\n' +
          'set.seed(12345)\n' +
          '# Import Data\n' +
          'obesity <- read.csv("https://raw.githubusercontent.com/TheChickenKnight/data101final/master/public/ObesityDataSet.csv")\n' +
          '# Split Data\n' +
          'sample <- sample(c(TRUE, FALSE), nrow(obesity), replace=TRUE, prob=c(0.8,0.2))\n' +
          'training <- obesity[sample, ]\n' +
          'test <- obesity[!sample, ]\n' +
          'cat("-----------------------------------TRAINING SET-----------------------------------")\n' +
          'head(training)\n' +
          'str(training)\n' +
          'training$NObeyesdad = as.factor(training$NObeyesdad)\n' +
          'summary(training)\n' +
          'cat("-----------------------------------TEST SET-----------------------------------")\n' +
          'head(test)\n' +
          'str(test)\n' +
          'test$NObeyesdad = as.factor(test$NObeyesdad)\n' +
          'summary(test)\n' +
          '# Using e1071 for Naive Bayes\n' +
          'nb_mod <- naiveBayes(NObeyesdad ~ ., data=training)\n' +
          'pred <- predict(nb_mod, test)\n' +
          '#\n' +
          '#Generate Confusion Matrix\n' +
          'cat("-----------------------------------CONFUSION MATRIX-----------------------------------")\n' +
          'tab <- table(pred, test$NObeyesdad)\n' +
          'caret::confusionMatrix(tab)\n' +
          '#' +
          '# Plot density of each feature using nb_mod\n' +
          'cat("-----------------------------------CONFUSION MATRIX PLOT-----------------------------------")\n' +
          'opar = par(mfrow=c(2, 2), mar=c(4,0,0,0))\n' +
          'plot(nb_mod, main="")\n' +
          'par(opar)\n' +
          '#\n' +
          '# Plot the Confusion Matrix\n' +
          'library(ggplot2)\n' +
          'test$pred <- pred\n' +
          'ggplot(test, aes(NObeyesdad, pred, color = NObeyesdad)) +\n' +
          '  geom_jitter(width = 0.2, height = 0.1, size=2) +\n' +
          '  labs(title="Confusion Matrix",\n' +
          '      subtitle="Predicted vs. Observed from Obesity dataset",\n'  +
          '      y="Predicted",\n'  +
          '      x="Truth")'
        } className="z-10 mt-32"/>

        <p className="text-black dark:text-white">
          <strong className="flex text-xl">Project Summary</strong>
          <strong className="flex text-l">What did I do in a nutshell?</strong>
          I created a predictor model that identifies obesity through their lifestyle. It can be implied that living such a lifestyle could lead to obesity.
          <strong className="flex text-l">What is the problem?</strong>
          The obesity epidemic of America.
          <strong className="flex text-l">How did I solve the problem?</strong>
          By identifying the formula of lifestyle which leads to obesity.
          <strong className="flex text-l">What did I find out?</strong>
          Eating high caloric foods increases obesity, while walking decreases it and eating vegetables doesn&apos;t change anything
          <strong className="flex text-l">What does it mean?</strong>
          Being in a low or negative caloric deficit increases obesity chances, while a vegetarian diet doesn&apos;t directly relate to how obese one is.
          <strong className="flex text-l">Who helped me out?</strong>
          all on my own, including this entire website
          <strong className="flex text-l">Whose work did I refer to?</strong>
          Just work from <Clink href="http://adiadi.pythonanywhere.com/Rdata101">the active textbook</Clink>.
        </p>
      </div>
    );
  }
  