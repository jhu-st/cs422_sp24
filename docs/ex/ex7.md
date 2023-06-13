---
id: ex7
title: Exercise 7
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you practice with:
* Property-based Testing
* [Jqwik](https://jqwik.net/)
:::


## Task 1

Consider the following two functions (which you have already seen in [exercise 1](ex1)):

```
/**
* Count positive elements
* *
* @param x array to search
* @return count of positive elements in x
* @throws NullPointerException if x is null
*/
public static int countPositive (int[] x) {
    int count = 0;
    for (int i=0; i < x.length; i++) {
        if (x[i] >= 0) {
            count++;
        }
    }
    return count;
}
```

```
public static int countOutsideRange(int arr[], int r1, int r2) {
    int count = 0;
    for (int i = 0; i < arr.length; ++i) {
        // faults here
        if (arr[i] <= r1 || arr[i] >= r2) {
            count++;
        }
    }
    return count;
}
```    

1. Write three properties for each of these functions.
1. Both of these functions have fault(s). Does any of the properties you wrote in previous step helps with detecting any of the faults. If not, can you come up with a property that would do?
1. Implement all the properties you came up with in Jqwik and run them against the above functions.
1. Fix all the fualts so that all your property-based tests pass!

## Task 2

Using [arbitraries](https://jqwik.net/docs/current/user-guide.html#using-arbitraries-directly) and `@Provide` annotation, write "provider" functions to generate:


1. integer values 3, 5, 7, 13, 17, 23, 41 <!-- Arbitraries.of(3, 5, 7, 13, 17, 23, 41, 101); -->
1. odd integer values  <!-- Arbitraries.integers().filter(aNumber -> aNumber % 2 != 0); -->
1. a guassian distribution of integer values between 0 and 100 with a mean of 50 <!-- Arbitraries
               .integers()
               .between(0, 20)
               .shrinkTowards(10)
               .withDistribution(RandomDistribution.gaussian()); -->
1. string values only comprised of digits of min length 3 and max length 10 <!-- // Arbitraries.strings().numeric().ofMinLength(3).ofMaxLength(10); -->
1. edge cases for doubles <!-- // Arbitraries.doubles().edgeCases(); -->
1. string values of variable length with character set of letters `a` through `z` with a `0.5` probability of generating duplicate values <!-- // Arbitraries.strings().withCharRange('a', 'z').injectDuplicates(0.1); -->



