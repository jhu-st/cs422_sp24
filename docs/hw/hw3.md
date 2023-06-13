---
id: hw3
title: Homework 3
---

:::caution
* You are expected to work individually.
* Due: **Friday March 17th at 11pm EST (Baltimore time).**
* This assignment is worth 70 points.
:::

:::tip Objectives
* Mutation Analysis/Testing
* Mock Testing
* PIT and Mockito tools
:::

:::tip
You can get all the starter files for task 2 and task 3 of this homework by doing a `git pull` on the [course public repo](https://github.com/jhu-st/jhu-st-sp23-public). The files can be found under `hw/hw3`.
:::


## Task 1 (20 points)

Answer the following quesiotns:


1. Why does it make sense to remove ineffective test cases (those that do not kill any mutant) from the test suite? 

2. The fundamental premise of mutation testing is stated as: __“In practice, if the software contains a fault, there will usually be a set of mutants that can be killed only by a test case that also detects that fault.”__
    * Give a brief argument in support of this premise.
    * Give a brief argument against this premise.

3. Name two benefits and two downsides of Interaction-based testing (aka Behavior-based testing), especially in contrast with State-based testing.


4. Write test cases to kill (strongly) mutant 1, 2, 3, and 4 in the following code:

```java
int min (int A, int B) 
{
     int minVal;
     minVal = A;
     if (B < A)
🔺1  if (B > A) {
        minVal = B;
🔺2     Bomb();
🔺3     minVal = A;
🔺4     minval = failOnZero(B);
      }
    return minVal;
}         
```
:::info
A test case in this case is comprised of test input values and the corresponding expected value.
:::

5. Answer questions `a` through `d` for the mutant on line `5’` in the method `sum()`.
    * a) If possible, find a test case that do not reach the mutant.                 
    * b) If possible, find a test case  that satisfy reachability but not infection for the mutant.
    * c) If possible, find a test case that satisfy infection, but not propagation for the mutant.
    * d) If possible, find a test case that strongly kill the mutant.

```java
/** 
* Sum the values in an array 
* 
* @param x array to sum 
* 
* @return sum of values in x 
* @throws NullPointerException if x is null 
*/
1. public static int sum(int[] x) { 
2.    int s = 0; 
3.    for (int i=0; i < x.length; i++) { 
4.       s = s + x[i];
5’.      // s = s - x[i]; //AOR 
6.    } 
7.    return s; 
8. }
```

:::caution Deliverables
The deliverables for this task is your answers to the questions above saved in a document named `task1` e.g. `task1.pdf`.
:::

## Task 2 (30 points)

You will be working with `MathUtils.java` for this task:
1. Write as mnay test cases as you can think of (in Junit 5) for the `MathUtils` class based on specifications of each method.

:::info
Try to write as many different test cases as you can; think about all main/special/corner/edge/boundary etc. cases.
:::

Store your test cases into `MathUtilsTest.java`.

2. When doing (1), you should be able to find ambiguity, inconsistencies, mistakes, and/or lack of details in the specifications and/or the code. Fix the issues that you find and save your work in a separate class named `MathUtilsFixed.java`. Make sure to make a note of all the modifications you make in the form of comments in the new file.
 
3. Manually generate one equivalent mutant for each method of `MathUtils` class and save them in a new file named `MathUtilsEquivalent.java`. If you think it is not possible to write an equivalent mutant for a method, provide an explanation why in `MathUtilsEquivalent.java` as a comment.

:::tip
Typically, mutation is just one small change to the original code. But, if it is not possible to produce an equivalent mutant by applying one mutation operator once, then feel free to use multiple mutations.
:::

4. Run [`PIT`](http://pitest.org/) on `MathUtilsFixed.java` and your JUnit tests. What is line coverage and what is the mutation score of your test suite as reported by PIT? 

:::info
Write line coverage and mutation percentage score numbers as comment lines on top of `MathUtilsTest.java` in this form:
```java
/* 
   Line coverage before improvement: XX%
   Mutation score before improvement: YY%
*/
```
:::

5. Next, reflect on those numbers by analyzing the PIT-generated report and try to improve them further. If needed, add more test cases to your JUnit file to increase the mutation score. If you add any new JUnit tests, make sure you leave a comment on top of it that reads: __"added after Mutation analysis"__. Aim for `100%` mutation score (killing all the mutants). If it is not possible to achieve that, explain why in the form comments on the top of the JUnit class file. Finally, generate a new PIT report using your improved `MathUtilsTest.java` and `MathUtilsFixed.java` and save it in html format. 


:::caution Deliverables
Deliverables for this task are `MathUtilsFixed.java`, `MathUtilsTest.java`, `MathUtilsEquivalent.java`, and the (final) PIT report in html format saved in `pitreport` folder all saved under `task2` folder.
:::


## Task 3 (20 points)

In this part, you will do mock testing on the code available on the [public repo](https://github.com/jhu-st/jhu-st-sp23-public/). In particular, we would like to test the `Customer` class (i.e., `Customer` is the class under test). Classes `Account`, `Checking`, `Savings`, `Loan`, and `CreditReport` are collaborators (i.e., dependencies) of the `Customer` class. Class `Checking` and `Savings` are subclasses of the `Account` class. Unfortunately, the real "Account" classes and the `Loan` class would make unrecoverable updates to the database and `CreditReport` needs fee payments to a credit reporting agency. For these reasons, we would like to use mocks instead of the real classes; the ones given to you are not the real ones. Your job is to write mock tests to check all the possible interactions between the `Customer` class and its collaborator classes. An interaction is when a method of some class calls a method of another class. In this case, we are only interested in interactions between `Customer` and the other classes. Note that for any possible interaction, you need to have at least one test case i.e. all interactions must be covered in your tests. To accomplish this, you are required to use [`Mockito`](https://site.mockito.org/). For consistency reasons in grading, you cannot use other mock testing tools. 


:::caution order of interactions
If there are multiple interactions that are triggered together, you must verify the correct order of interactions in your mock tests.
::: 

:::caution Deliverables
The deliverables for this part are 1) a list of all possible interactions between `Customer` class with all account classes (`Account`, `Savings` and `Checking`), the `Loan` class, and the `CreditReport` class, and 2) a JUnit test class named `CustomerMockTest.java` that uses Mockito constructs where there is at least one _interaction-based_ test case verifying each possible interaction. For (1), list all the interactions at the top of the JUnit test class as comments. Also, for each of the listed interactions, make sure to specify the condition(s) under which the interaction is triggerred. Finally, leave a comment before each test case to explain what interaction you are exactly testing in that particular test case. Please note in order to get full points here you need to cover all the possible interactions. Save the file under `task3` folder.
:::


## Submission

:::danger Submission
Submissions should be made to [Gradescope](https://www.gradescope.com). Create a zip file named `hw3.zip` which contains all the deliverables for all the parts. For each task, create a separate folder named TaskX, where X is the part number, under which you put all the deliverables for that task. For each task, make sure to submit all the necessary deliverables including JUnit test classes (`.java` files NOT `.class` files), documents, reports etc.
:::

:::danger
__Important Note:__ If any of your `.java` files is not compilable/executable for any reason, you will receive a zero for that part. Thus, please make sure all the source files you hand in successfully compile and run!
:::




