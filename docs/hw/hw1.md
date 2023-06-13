---
id: hw1
title: Homework 1
---

:::caution
* You are expected to work individually.
* Due: **Monday February 20th at 11pm EST (Baltimore time).**
* This assignment is worth 70 points.
:::

:::tip Objectives
* Blackbox testing (EP, BA, EG)
* Whitebox testing (SC, BC, PC)
* JUnit 5 
:::

:::tip
You can get all the starter files for all the tasks for this homework by doing a `git pull` on the [course public repo](https://github.com/jhu-st/jhu-st-sp23-public). The files can be found under `homework/hw1`.
:::

## Task 1: Blackbox Testing (30 points)

The purpose of this part is to have you leverage your knowledge of Blackbox testing. There are two Java classes to test. One of the classes is named `BuggleSort` that implements the famous [Bubble Sort](https://en.wikipedia.org/wiki/Bubble_sort) algorithm to sort arrays of floating-point numbers (i.e., type `double`) in either ascending or descending order. The other class named `MyArrayList` which implements a basic dynamic-sized array (i.e., ArrayList) data structure.

Find `HW1.Jar` and the API documentation stored under `doc` folder (both under `task1` folder.) Using the specifications in API documentation (open `index.html` in a browser) your job is to 1) design effective test cases to reveal as many faults as you can in each of the classes, and 2) implement these test cases in JUnit 5, execute them on BuggleSort and `MyArrayList` classes, and write report summaries. 

:::info
Note that the two classes `BuggleSort` and `MyArrayList` are NOT related to each other in anyway, so you need to test them separately. (i.e., write a separate JUnit test class and report summary for each). 
:::

:::tip
keep in mind that the Jar file only contains `.class` files and not the `.java` files, so this has to be treated as a Blackbox testing. The best resource to consult, to develop your test cases, is the API documentation. 
:::

Deliverables for each of the `BuggleSort` and `MyArrayList` classes are: two items: 

1. A spreadsheet (e.g., excel file) that reports all the faults you have found. You need two columns in your spreadsheet.

    * __Fault & Failure Descriptions__: clearly and precisely explain what the failure is and what could be the possbile fault(s) in the code under test. Describe how (i.e., under what exact circumstances) the fault gets executed and becomes a failure.
    :::info
    When describing a fault, try to be as precise as possible.
    ::: 
    * __Test Case__: What test case(s) resulted in this failure and helped with detecting the fault.
    
1. A JUnit test class that implements the test cases you have developed and referenced in your spreadsheet report.

:::tip
You can "tag" each test case with a number and use it for referencing purposes in your JUnit class and excel report!
:::

:::info 
Name your BuggleSort test class `BuggleSortTest` and call the one for MyArrayList `MyArrayListTest`. For your test methods, use meaningful names where each test method name starts with the word "test". Moreover, keep in mind that this is unit testing, so you will need to test each method in isolation (BuggleSort has only one method but MyArrayList has a few). Make good use of Prefix/Postfix values methods in your JUnit test classes. Also, consider the following suggestions:

__Suggestion 1__: Apply the Blackbox testing techniques (EP and BA in particular) we have discussed in class. There are a number of faults in each of the `BuggleSort` and `MyArrayList` classes. The more faults you find the more points you earn! Do not forget/underestimate the "Error Guessing" technique here. Try to write as many different test cases as you can. Think about all possible scenarios and try to get the code to behave differently from what the specifications claim in the API doc.

__Suggestion 2__: When implementing test cases in JUnit, other than the prefix, postfix, and test methods, you can also have helper methods to aid you in testing. One such helper method that might be useful for testing BuggleSort is a method that checks if the returned array of BuggleSort method is in fact correct. You can call this helper method `assertSorted`! Make sure though that the `assertSorted` method itself does not have faults!
:::

:::caution
If there are any especial instructions we need to know of to be able to run your tests, make sure you include them (in the spreadsheet or a `README` file). Also, make sure you leave comments for each test method as to what exactly the test case is testing!
::::

## Task 2: StringUtils (20 points)

In this part, you will perform Whitebox testing on four methods of the class named `StringUtils.java` under `task2" folder. The source code and the specifications (in the form of javadoc comments) are given to you, so take advantage of them to do a thorough testing. Make sure to test each method of the class separately. You should achieve, at the very least, full Branch Coverage (BC) in each method. In case it is not possible to achieve full BC anywhere, you need to make a note of that in your report (you may create a spearate sheet in the same excel file for this purpose) and explain why that is the case. 

:::info 
Aside from achieving the desired coverage, try to be creative and write as many different test cases as you can. Remember, testing is a creative process and nothing should stop you from writing smart test cases that add value and help with revealing more faults. 
:::

:::info Deliverables
The deliverables for this part are the same as those of task 1 (excel report and JUnit test class) plus a file named `StringUtilsFixed.Java`. In the excel report, add a new column named __"Proposed Fix"__. Use this column to describe a possible fix to the fault. 
:::

:::caution
Note that you need to be as precise and comprehensive as possible when you propose a fix, i.e., the proposed fix cannot be a superficial/simplistic repair. In other words, try to address the root cause of the issue rather than merely getting the corresponding "failed" test cases to pass.
:::

## Task 3: IsValidSudoku (20 points)

In this part, you will be testing a method that determines whether a sudoku board is valid or not. Find `Sudoku.java` under `task3` folder and write test cases to acheive full branch coverage. In case it is not possible to achieve full BC anywhere, you need to make a note of that in your report (you may create a spearate sheet in the excel file for this purpose) and explain why that is the case. Also, read the javadoc of `isValidSudoku` and derive test cases based on the specs (i.e., Blackbox testing). Try to write as many different test cases as possible.

:::info Deliverables
The deliverables for this part are the same as those of task 1 plus `SudokuFixed.java`. In the excel report, add a new column named __"Proposed Fix"__. Use this column to describe a possible fix to the fault. 
:::

:::caution
For this task, we ask you to implement your test caseas in JUnit as paramerized tests (i.e., `@ParameterizedTest`). This means you only have one (parameterized) test method in your test class. You have the freedom however how/where from you want to feed in the data into `isValidSudoku`. To read about parameterized tests, refer to [lecture 5](https://jhu-st.github.io/cs422_sp23/slides/lecture5.pdf) slides and/or [JUnit user guide](https://junit.org/junit5/docs/current/user-guide/#writing-tests-parameterized-tests).
:::

## Submission

:::danger Submission
Submissions should be made to [Gradescope](https://www.gradescope.com/). Create a zip file named `hw1.zip` which contains all the deliverables for all the parts. For each task, create a separate folder named TaskX, where X is the part number, under which you put all the deliverables for that task. For each task, make sure to submit all the necessary deliverables including JUnit Test classes (`.java` files NOT `.class` files), Spreadsheet reports, instructions set, and any other deliverable you are asked to submit. Do not forget to include `StringUtilsFixed.java` and `SudokuFixed.java` in your submission for tasks 2 and 3. Zip the three folders Task1, Task2 and Task3 as a single `.zip` file named `hw1.zip`
:::

:::danger
__Important Note:__ If any of your `.java` files is not compilable/executable for any reason, you will receive a zero for that part. Thus, please make sure all the source files you hand in successfully compile and run!
:::