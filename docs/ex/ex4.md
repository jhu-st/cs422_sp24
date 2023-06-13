---
id: ex4
title: Exercise 4
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you practice with:
* JUnit concepts and mechanics
:::

## Quick Question 1: Find the problem

Assume the following code does not have any syntactical flaws. The goal of the test is to make sure the `sort` method works as expected. Do you see any issues with this test case?

```java
@Test
public void testSort() {
   names.add ("Laura"); 
   names.add ("Han"); 
   names.add ("Alex"); 
   names.add ("Ashley"); 
   names.sort(); 
   assertTrue ("Sort method", names.getFirst().equals("Alex"));
}
```

:::tip
In the `testSort` method, `names` is an instance of an object that stores strings and has methods `add()`, `sort()`, and `getFirst()`, which do exactly what you would expect from their names. You can assume that the object names has been properly instantiated and the `add()` and `getFirst()` methods have already been tested and work correctly.
:::


## Quick Question 2: Test Fxiture

Assume you were writing a JUnit test class to test the functionalities that `ArrayList` of Java utilities offers! Also, assume you would wanted to start with an empty `ArrayList` for each test case. Which of `@BeforeEach`, `@BeforeAll`, `@AfterEach`, and `@AfterAll` you would make use of? What exactly would go inside each (that you'd use)?


## Task 1: Parameterzied Tests machanics

Recall in task 1 of [exercise 3](ex3), you were asked to write test cases for `countOutsideRange`. Implement the test cases you developed there as a single **paramerized test**. 

:::tip
Try to look up and find out how you can write parameterized tests where an input to the function is an array. Also, how would you go about tailoring the expected value for each test case?
:::

## Task 2: Tag and Filter

Do a git pull on the [course public repo](https://github.com/jhu-st/jhu-st-sp23-public) that contains test cases in a file named `TriangleTest.java` for `Triangle.triangle` included in `jhu-triangle-0.1.0.jar` that we worked on in [exercise 2](ex2):

1. Tag each test case in `TriangleTest.java` as either `EP` i.e., equivalnce partitioning or `BA` i.e., boundary analysis or both. Then (by making adjustments in `build.gradle`) run only `EP` tests. Then, run only `BA` tests. 

2. EXTRA PRACTICE: rewrite all test cases with identical tag(s) as a single parameterized test case.

:::tip
If needed, refer to [exercise 2](ex2) on how to include a `jar` file in your gradle project!
:::






