---
id: ex5
title: Exercise 5
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you practice with:
* Coverage criterion
* Subsumption
* Combination-based criteria
:::

## Questions

The following questions are desgined to stimulate your thinking and solidify your understanding of criteria-based testing. Contemplate about each and answer them the best you can:

1. Does path coverage subsume branch coverage? If not, give an example.

1. Give an actual example (i.e., a program) where a __minimum__ test set is different from a __minimal__ test set for some program P and some coverage criterion C with the test requirement set TR.

1. Give an example of a program that is faulty and two test sets S1 and S2 where S1 achieves statement coverage and reveals the fault in the program, but S2 that achieves branch coverage does NOT reveal that fault.

1. Give an example of a program that is faulty and two test sets S1 and S2 where both S1 and S2 achieve either statement coverage or branch coverage, but only one of the test sets reveals the fault in the program.

1. Give an example of a program that is faulty and a test set S1 that acheieves path coverage but does NOT reveal the fault.

1. Recall the following function that determines the type of a traingle given its sides' lengths:

```java
int traingle(int a, int b, int c) { ... }
```
Assume we have applied EP on the input domains of the three input parameters `a`, `b` and `c` such that each domain is partitioned into three (equivalence) blocks of negative (N), zero (Z), and positive (P).

Answer the followings:

* What is the total number of test requirements for _All Combinations Coverage (ACoC)_?
* Write down test requirements for _pair-wise coverage (PWC)_.
* Assume positive (P) is the base choice for all three inputs `a`, `b`, and `c`. Write the test requirements for _Base Choice Coverage (BCC)_.