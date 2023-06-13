---
id: ex2
title: Exercise 2
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you:
* Blackbox testing techniques: 
    * Equivalence partitining, 
    * boundary analysis, 
    * Error guessing
* More practice with implementing test cases in JUnit 
:::

## Task 1

Answer the following questions for the method `intersection()` below:

```java
public Set intersection (Set s1, Set s2)
// Effects: If s1 or s2 is null throw NullPointerException
// else return a (non null) set equal to the intersection
// of sets s1 and s2
Characteristic: Validity of s1
- s1 = null
- s1 = {}
- s1 has at least one element
Characteristic: Relation between s1 and s2
- s1 and s2 represent the same set
- s1 is a subset of s2
- s2 is a subset of s1
- s1 and s2 do not have any elements in common
```
1. Does the characteristic "Validity of s1" satisfy the completeness property? If not, give a
value for s1 that does not fit in any block.
1. Does the characteristic "Validity of s1" satisfy the disjointness property? If not, give a value
for s1 that fits in more than one block.
1. Does the characteristic "Relation between s1 and s2" satisfy the completeness property? If
not, give a pair of values for s1 and s2 that does not fit in any block.
1. Does the characteristic "Relation between s1 and s2" satisfy the disjointness property? If
not, give a pair of values for s1 and s2 that fits in more than one block.


## Task 2

1. Do a git pull on the course [public repo](https://github.com/jhu-st/jhu-st-sp23-public) and locate a file named `jhu-triangle-0.1.0.jar` under `ex2` folder. The idea is to import this `jar` file into your Java project so that you can test a function named `triangle` located in a class named `Triangle` inside this `jar` file. In Intellij, follow these steps:

* Create a new Java Gradle project and make sure `build.gradle` is set up properly to use JUnit. If needed, see [exercise 1](ex1) to see instruction how to do so.
* Go To `build.gradle` and add the following under `dependencies`:

```groovy
implementation fileTree(dir: 'libs', include: ['*.jar'])
```

* Create a folder in your project named `libs` and place the downloaded jar file i.e. `jhu-triangle-0.1.0.jar`. Now, you can create a test class under `src/test/java` and start testing triangle function. You'd need to add this `import` to your test class file:

```java
import jhu.cs422.Triangle;
```

2. Applying the blackbox testing techniques we have talked about in class, try to "black-box" test the `triangle` function as thoroughly as possible in a systematic way and see if you can find any faults. Here is the "Javadoc style" specs for `Triangle.triangle` function:

```java
/**
* decides the type of the triangle given the lengths of the three sides
* @param a first length
* @param b second length
* @param c third length
* @return an int indicating the type of the triangle: 0 is invalid, 
          1 is scalene, 2 is isosceles, and 3 is equilateral
*/
```

:::tip HINT 1
There are are at least three faults in `Triangle.triangle`.
:::

:::tip HINT 2
If you have difficulty downloading the above `jar` file, right click on the link and select `Save link as`.
:::

:::tip HINT 3
Do not underestimate the power of boundary analysis and error guessing!
:::

