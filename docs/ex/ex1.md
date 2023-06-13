---
id: ex1
title: Exercise 1
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you:
* warm up with creating a java project using Intellij
* make use of JUnit to write test cases
* understand the difference between Fault, Error and Failure
:::


## Getting set up

1. Using `git`, clone the course [public repo](https://github.com/jhu-st/jhu-st-sp23-public) to get a copy of the files you will be working with in this exercise. To do so, you can type at a terminal (when you are in your desired folder location):

```bash
git clone https://github.com/jhu-st/jhu-st-sp23-public.git
```

:::tip
You need to have `git` installed on your machine already. If you do not have `git`, you can download it from [here](https://git-scm.com/downloads). You can follow the instructions [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git). If you need to brush up on your git skills, [this video](https://www.youtube.com/watch?v=SWYqp7iY_Tc) could be a good starting point.
:::

:::info
Once you succesffuly clone the repo, you can find ex1 files under `exercises/ex1` under which there is `ArrayUtils.Java`.
:::

2. Create a new Java Gradle project on `Intellij` and add `JUint5`. 
    * if you do not have `Intellij` installed, you may download the Ultimate version [here](https://www.jetbrains.com/community/education/#students) for free. 
    * Go to `File`->`New`->`Project` and select `Gradle`. Follow the steps to finish creating the project.
    * Go to `build.gradle` and make sure it has the following content (in particular `test` and `dependencies`):

    
    ```groovy
    plugins {
        id 'java'
    }

    group 'org.example'
    version '1.0-SNAPSHOT'

    repositories {
        mavenCentral()
    }

    test {
        useJUnitPlatform()
    }

    dependencies {
        testImplementation 'org.junit.jupiter:junit-jupiter:5.8.2'
    }
    ```
3. Copy `ArrayUtils.java` to `src/main/java` path in your project.

:::caution Alternate IDE
Feel free to use an alternate IDE other than `Intellij` if you prefer. The instructions in this exercise are based on `Intellij` though.
:::


## Task
1. Follow the instructions at the top of `ArrayUtils.java` and write your asnwers on a paper or a word document. Implement your test cases as JUnit test cases in your project. 

:::tip
In order to write JUnit tests, you would want to create a test class under `src/test/java` in your project and write your test cases in that class. Follow the skeletal/naming convention offered in the lecture notes.
:::

:::info Program State
A program state during program execution is defined as the current value of all live variables and the current location as given by program counter (PC). PC is the next statement to be executed in the program. Each time a new statement (instruction) is fetched to be executed, PC is incremented.
:::

:::tip
Recall that "error" is incorrect program state.
:::

2. Execute JUnit test cases you wrote and verify the results.

:::tip
We will study JUnit in more details in near future, but for now you can brush up on your JUnit skills by referring to its [user manual](https://junit.org/junit5/docs/current/user-guide/).
:::

<!--## Task 2-->
<!--Now turn to `Point.java` and `ColorPoint.java`. Note that `ColorPoint` is a child class of `Point`. -->
<!--1. Can you spot any issues with these two classes, in particular as related to the implementations of the `equals` methods in these two classes?-->

<!--:::tip hint-->
<!--Consider the following peice of code:-->
<!--```java-->
<!--Point p = new Point(1, 2); -->
<!--ColorPoint cp1;-->
<!--cp1 = new ColorPoint(1, 2, Color.RED);-->
<!--ColorPoint cp2;-->
<!--cp2 = new ColorPoint(1, 2, Color.BLUE);-->
<!--p.equals(cp1); -->
<!--cp1.equals(p1);  -->
<!--```-->
<!--What would you expect the last two statements in the above code to evaluate to? Do they evaluate to expected output values?-->
<!--::: -->

<!--2. Can you offer a fix to address the issue detected above? -->
<!--3. Can you suggest a fix where `equals` methods would satisfy both _symmetry_ and _transitivity_ properties? Discuss.-->




