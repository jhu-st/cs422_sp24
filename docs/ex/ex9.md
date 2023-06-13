---
id: ex9
title: Exercise 9
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting and continue to work at home to finish, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you practice with:
* test doubles
* mock testing
:::

## Answer the following questions

* What is a test double?
* What is the difference between stubs, mocks, and dummys? 
* What is the difference between state-based testing and behavior-based testing?
* If a dependency is available and undemanding, which kind of testing would you do and why? What if it is demanding?

## Task 1

Define a class named `A` that has a dependency on another class `B` that provides functionalities `funB1` and `funB2` i.e., class `B` has at least two public methods named `funB1()` and `funB2()`. In class `A`, there is a method named `funA(int a)` that makes <u>_No calls_</u> to any of `B`'s functions if `a` is negative. If  `0 <= a <= 10`, `funA` calls __each of__ `funB1` and `funB2` __exactly once__ <u>_in that order_</u>. if `a > 10`, then `funA` calls `funB1` <u>_multiuple times_</u>. Let us assume that the real `B` is unimplemented/demanding. Define a mock of `B` and verify using `Mockito` that the above-mentioned interactions happen exactly as described; that is :

1. `a < 0` --> no interactions between `A` and `B` at all
2. `0 <= a <= 10` --> first calls `funB1` and then calls `funB2`
3. `a > 10` --> calls `funB1` multiple times

:::tip
When verifying the interactions, make sure to verify both the number of calls i.e., never, once or more as well as the order of the interactions i.e., which call(s) is/are made before the other call(s).
:::

:::tip Mockito
To add Mockito to your gradle project, all you need to do is to add the following dependency into your `build.gradle`:

```groovy
implementation 'org.mockito:mockito-core:3.7.7'
```
:::




