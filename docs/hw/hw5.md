---
id: hw5
title: Homework 5
---

:::caution
* You are expected to work individually.
* Due: **Friday April 7th at 11pm EST (Baltimore time).**
* This assignment is worth 55 points.
:::

:::tip Objectives
* Debugging Basics
* Debugging by Obseveration
:::

:::tip
You can get all the starter files for task 2 this homework by doing a `git pull` on the [course public repo](https://github.com/jhu-st/jhu-st-sp23-public). The files can be found under `hw/hw5`.
:::

## Task 0 (18 points)

Answer the following questions in details:

1. What are the differences between testing and debugging? 
1. How testing and debugging complement each other? 
1. Is testing necessarily a prerequisite of debugging? Explain. 
1. The original `ddmin()` algorithm finds only one possible 1-minimal input i.e. an input where removing any single character makes the failure disappear. Sketch an extension of `ddmin()` algorithm named `ddminAll()` that finds ALL possible 1-minimal inputs.


## Task 1 (12 points)

The function `bool geegg(String s)` returns:
* `true`, i.e. failure, if the string `s` contains three `g` characters or more,
* `true`, i.e. failure, if the string `s` contains two `e` characters or more,
* `false`, i.e. no failure, otherwise.  
For instance, `geegg("good eggs tomorrow")` returns `true`, and 
`geegg("no eggs today")` returns false.

Apply ddmin() algorithm on the following inputs:
1. `a-debugging-exam`
2. `as-easy-as-pie`

Write down all the steps `ddmin()` would take to simplify these inputs.

## Task 2 (25 points)

Follow the instructions in `SudokuSolver.java`.


:::tip tip 1
As part of the requirements, you will need to work with [Log4j 2](https://logging.apache.org/log4j/2.x/). A straightforward way to do so is to add the followings to `build.gradle`.:

```groovy
implementation 'org.apache.logging.log4j:log4j-core:2.3.2'
implementation 'org.apache.logging.log4j:log4j-api:2.3.2'
```
:::

:::tip tip 2
Also, you may find [this](https://logging.apache.org/log4j/2.x/manual/architecture.html) useful which provides explanations on Log4j 2’s architecture and how it works.
:::

:::caution Deliverables 
1. `SudokuSolver.java` which contains log4j 2 logging code,
1. `SudokuSolver.log`,
1. `log4j2.xml` which contains your log4J 2 settings,
1. a short report in the form of comments at the top of `SudokuSolver.java` that explains how you used the log messages and/or a debugger of your choice and what hypotheses you developed, what breakpoints/watchpoints you used etc. Write at least a few paragraphs and make detailed explanations. Try to use a debugger in a meaningful way to find the faults. Even if you spot a bug before running the debugger, still set appropriate breakpoints/watchpints and run the debugger to verify your hypothesis. If you do so, it should feel natural and straightforward to write this short report. 
1. `SudokuSolverFixed.java` containing all fixes to all the faults found as well as detailed and clear comments for each fault at the exact corresponding location in the code.
:::

## Submission

:::danger Submission
Submissions should be made to [Gradescope](https://www.gradescope.com/). Create a zip file named `hw5.zip` which contains all the deliverables for all the parts. For each task, create a separate folder named taskX, where X is the part number, under which you put all the deliverables for that task. For each task, make sure to submit all the necessary deliverables including JUnit test classes (`.java` files NOT `.class` files), documents, reports etc.
:::


:::danger
__Important Note:__ If any of your `.java` files is not compilable/executable for any reason, you will receive a zero for that part. Thus, please make sure all the source files you hand in successfully compile and run!
:::

