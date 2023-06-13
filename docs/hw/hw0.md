---
id: hw0
title: Homework 0 
---

:::caution
* You are expected to work individually.
* Due: **Monday February 6th at 11pm EST (Baltimore time).**
* This assignment is worth 40 points.
:::

:::tip Objectives
* Software Tesing goal
* Software Testing psychology
* Software Tesing principles
* Test Oracle and the oracle problem
* Identifying faults, errors and failures
* Implementing test cases in JUnit
:::

### Task 1 (11 points)

:::info
Answer each of the following questions clearly and concisely. Note that some of the essay questions are intentionally vague and/or open-ended to stimulate your thinking. Answer these questions in your own words the best way you can.
:::

1. Why is it not possible to show program correctness using software testing? Name at least three distint reasons.
1. Should I test my own code, or should somebody else? why?
1. Which part of the code of my project should I test the most/least?
1. Can I test all possible inputs to see whether the software works?
1. What constitutes a good test case? What constitutes a bad test case?
1. Is it good or bad if a test case fails?
1. What if a test case itself has a bug in it? How can I avoid/minimize this?
1. Name three actual examples (other than the ones discussed in class) where it is not straightforward/possible to specify the expected output (i.e., correct behavior).
1. Below is a small conversation. Fill in the blanks with one of the following terms: failure, fault, or error: <br />

:::note Conversation
__Mark:__ Hey, Jane, I just observed a \_\_\_\_\_\_\_ in our software: if the user changes his/her primary email address in his/her profile more than once, our software doesn't allow them to sign back in one signed out. <br/><br />
__Jane:__ Oh, that's awful. Let me debug the code so that I can find the \_\_\_\_\_\_\_.<br /><br />
__Jane (a few minutes later):__ Mark, I found it! It was my \_\_\_\_\_\_\_. I programmed that part, but never thought of this case. Statement `X` in class `Y` in method `Z` was causing varibale `email` to take on value `v` causing a(n) \_\_\_\_\_\_\_ leading to a(n) \_\_\_\_\_\_\_. Should be fixed now! <br /><br />
__Mark:__ Got it! No worries, Jane! Thanks for fixing it!
:::

1. You are asked to test a paint brush. Write as many different test cases as you can to gain cofidence whether this is a dependable brush to paint (e.g., a bedroom) or not. Write at least 8 different test cases. HINT: Think of the main functionality you would expect from a paint brush and various conditions under which you expect it to function/survive.

:::tip deliverables
Deliverable for this part is your answers to the above questions saved in a text file named `task1.txt`. If you prefer (e.g. have drawings, diagrams etc. in your answers), submit in PDF format (i.e., `task1.pdf`)
:::


### Task 2 (29 points)
:::info
The purpose of this part is to encourage you to think of testing in a more rigorous way than you may be used to. 
:::

1. Write a Java method with the signature:

```java
public static Vector union (Vector a, Vector b)
```

The method should return a Vector of objects that are in either of the two argument Vectors.

2. Upon reflection, you may discover a variety of defects and ambiguities in the given assignment (i.e., specifications are not clear). In other words, ample opportunities for faults exist. Identify as many possible faults as you can. 

3. Create a set of test cases that you think would have a reasonable chance of revealing the faults you identified above. Document a rationale for each test in your test set. Characterize all of your rationales in a concise summary. Manually run your tests against your implementation and write down the expected and actual outputs. 

4. Rewrite the method signature and its specifications to be precise enough to clarify the defects and ambiguities identified earlier. You might wish to illustrate your specification with examples drawn from your test cases. 

:::tip deliverables
Deliverables for this part are:

1. answers to the above questions saved in a text file named `task2.txt`,
1. your final implementation of the `union` method based on your answer in part 4 of Task 2 saved in a file (i.e., Java class) named `Union.Java`, and
1. `UnionTest.java` that implements (in JUnit) your test cases offered in part 3 of Task 2.
:::

:::tip
You may change the signature of the given `union` method if needed, but you need to justify the changes (if any) that you make.
:::

:::tip
Refer to JUnit's [user manual](https://junit.org/junit5/docs/current/user-guide/) for details on JUnit 5.
:::

## Submission
:::danger submission
Create a .zip file named `hw0.zip` which contains exactly two folders namely `task1` and `task2`. Put the deliverables for task 1 in `task1` folder and the ones for task 2 in `task2` folder. Submit `hw0.zip` via Gradescope.