---
id: hw2
title: Homework 2
---


:::caution
* You are expected to work individually.
* Due: **Tuesday March 7th at 11pm EST (Baltimore time).**
* This assignment is worth 80 points.
:::

:::tip Objectives
* Coverage criteria and submsuption 
* Combinatorial coverage criteria/testing
* Logic-based coverage criteria/testing
* Property-based testing
* Jacoco and Jqwik tools
:::

:::tip
You can get all the starter files for all task 2 and task 4 of this homework by doing a `git pull` on the [course public repo](https://github.com/jhu-st/jhu-st-sp23-public). The files can be found under `homework/hw2`.
:::


## Task 1: Coverage Criteria and Subsumption (15 points)

:::info
Answer each of the following questions clearly and concisely. Note that some of the essay questions are intentionally vague and/or open-ended to stimulate your thinking. Answer these questions in your own words the best way you can.
:::

1. Name at least three advantages of coverage-criteria-based testing (i.e., utilizing coverage-criteria in testing). Also, name two downsides of it.

1. Subsumption has a significant weakness. Suppose criterion C1 subsumes criterion C2 and that test set T1 satisfies C1 and test set T2 satisfies C2. It is not necessarily the case that T2 is a subset of T1. It is also not necessarily the case that T1 reveals a fault if T2 reveals that fault. Give actual examples of these two cases.

1. How else could we compare coverage criteria besides subsumption?

1. Write a predicate and a set of additional constraints so that correlative active clause coverage (CACC) is infeasible with respect to some clause, but general active clause coverage (GACC) is feasible.

:::caution Deliverables
The deliverables for this task is your answers to the questions above saved in a document named `task1` e.g. `task1.pdf` or `task1.txt`.
:::

## Task 2: Combinatorial Testing (18 points)

As dicsucced in class, combinatorial testing is applicable/relevant when there is a set of parameters (as opposed to just one or few inputs) where testing various combination values of these parameters may lead us to (potentially) detect more faults. Combinatorial testing has been successfully used in testing of highly configurable systems, Graphical User Interfaces (GUIs), security testing, testing of AI/ML systems, just to name a few! In here, to get a taste of combinatorial testing, we are going to test a simple command-line tool that does basic shape drawing on a square-shaped `1200 x 1200` canvas, where (-600, -600) are the coordinates of the bottom-left and `(600, 600)` are the coordinates of the top-right of the canvas. There are 7 mandatory command-line arguments that need to be provided when launching the tool. These parameters are:

```plain
SHAPE: [circle, rectangle, square, ellipse]
SIZE: [small, medium, large]
COLOR: [red, blue, green, yellow, cyan, white, black, orange]
THICKNESS: [1 through 5 inclusive] (integer)
X COORDINATE: [-600 through 600] (integer)
Y COORDINATE: [-600 through 600] (integer)
FILLED: [true, false]
```

:::tip
For parameters X and Y, since the number of possibilities is large, you may apply input space partioning on each of those parameters to break the entire input space into blocks and then use a representative value for each block.
:::

As an example, the program can be launched as follows assuming `draw.jar` is in the current folder:

```bash
java -cp draw.jar Main circle medium red 2 200 -220 false
```

In mac/linux, you might need to do:

```bash
java -cp ./draw.jar Main circle medium red 2 200 -220 false
```

to draw a medium-sized non-filled red circle with line thickness of 2 at location (200, -220) on the canvas. 

The program is expected to:
* print "Invalid argument!" on the console, do not show the canvas, and exit with status code 1 for any invalid or out-of-range parameter value.  
* print "Invalid num of arguments!" on the console, do not show the canvas, and exit with status code 1 for invalid number of commandline arguments.

If you were to test this command-line tool with all possible arguments, you would need to try thousands of inputs. We would instead want to leverage combinatorial coverage criteria to systematically reduce the number of combinations of test values:

1. List test requirements as well as concrete test cases for Each Choice Coverage.

1. List test requirements as well as concrete test cases for Base Choice Coverage (base choices are circle, medium, blue, 2, 0, 0, false).

1. List test requirements for 2-way (i.e., pair-wise) coverage <mark>ONLY for the three parameters: SHAPE, SIZE, and COLOR</mark>.You need NOT to provide concrete test cases here!

1. How many total test inputs we would have in order to achieve ACC (All combination coverage) if `X` is partitioned into positives, negatives, and zero and `Y` is partitioned into zero and non-zero blocks?

Here is a jar file of the shape drawing command-line tool.

:::tip Optional Bonus Part (+5 points - 1 point for each unique failure/fault)
Run the tests you have come up with in part 3 or 4 of the above and list faults (if any) that you find! Make a file named `task2.txt` or `task2.pdf` under `task2` folder and explain those failures (and possible fault(s) corresponding to those failures) along with test case(s), which is the set of input arguments that were used, that helped discovering the fault(s). 
:::

## Task 3: Logic-based Testing (17 points)

Consider the follownig predicate:

```
(x % 2 == 0 || (x > 0 && x <= 100)) ||
(y <= 0) && ( (x > y) || !isPerfectSquare(x) ) 
```
1. Write both test requirements and concrete test values for `x` and `y` to achieve predicate coverage, but not clause coverage.
1. Write both test requirements and concrete test values for `x` and `y` to achieve clause coverage, but not predicate coverage.
1. Write both test requirements and concrete test cases to achieve correlative active clause coverage (CACC).


:::info
If it is not possible to achieve/accomplish any of the above items, make sure you mention that in your answer with a detailed explanation as to why.
:::


:::tip
To make your work easier when writing test requirements for each criterion, rewrite the predicatein short form; that is for each cluase use a short notation e.g., `y <= 0` is one cluase and you can call it `A`. Similarly, use short notations for the other cluases in the predicate.
:::

:::caution Deliverables
The deliverables for this task is your answers to the questions above saved in a document named `task3` e.g. `task3.pdf` or `task3.txt`.
:::

## Task 4: Property-based Testing (30 points)

**For each of the three methods** inside `AuxiliaryMethods.java`, do the following:

1. Write three properties. Write down each property precisely as a sentence.
2. Implement in Jqwik each of the specified properties above as a separate test function annotated with `@Property` in a class named `AuxiliaryMethodsPBT.java`.
3. For any test case/test input that results in a failure, write a description of the possible fault(s) that may be causing the failure as a comment before the test method. Aim to come up with properties that actually help you find faults in the methods under test.

Then:

1. Fix the faults you have found and save the work under a separate java file named `AuxiliaryMethodsFixed.java`.
1. Run Jacoco (using your property-based tests on the fixed version of the code) to generate a report to measure code coverage. Make sure to generate your report in `html` format and save the entire generated report under a folder named `jacocoreport` under `task4` folder.

:::caution Deliverables
The deliverables for this task are 1) your answers to the question 1 above saved in a document named `task4` e.g. `task4.pdf` or `task4.txt`, 2) `AuxiliaryMethodsPBT.java`, 3) `AuxiliaryMethodsFixed.java`, and 4) `jacocoreport` folder containing the generated jacoco report.
:::

## Submission

:::danger Submission
Submissions should be made to [Gradescope](https://www.gradescope.com/). Create a zip file named `hw2.zip` which contains all the deliverables for all the parts. For each task, create a separate folder named TaskX, where X is the part number, under which you put all the deliverables for that task. For each task, make sure to submit all the necessary deliverables including `.java` files (NOT `.class` files), documents, etc.
:::

:::danger
__Important Note:__ If any of your `.Java` files is not compilable/executable for any reason, you will receive a zero for that part. Thus, please make sure all the source files you hand in successfully compile and run!
:::

