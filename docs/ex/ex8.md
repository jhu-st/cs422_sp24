---
id: ex8
title: Exercise 8
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting and continue to work at home to finish, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you practice with:
* mutation analysis
* mutation testing
:::

## Answer the following questions

1. Elaborate the difference between mutation analysis and mutation testing.
1. How exactly do you use mutation analysis in mutation testing?
1. What is the difference between weekly killing and strongly killing a mutant?
1. What is an equivalent mutant?


## Task 1: Manual mutation analysis/testing

Consider the following method:

```java
int max(int[] values) {
	int r, i;
	r = 0;
	for(i = 1; i < values.length; i++) {
		if (values[i] > values[r])
		r = i;
	}
	return values[r];
}
```

1. Write 4 mutants using `UOI` (Unary Operator Insertion) and `ROR` (Relational Operator Replacement). 
2. Next, write tests to kill the mutants you wrote in step 1. 

## Task 2: Tool-supported mutation analysis/testing

Consider the following method:

```java
/** Given a number 'k', this method finds and returns a list of
* any two numbers from the array such that their sum equals k.
* Example: findPairsSum({2, 4, 1, 3, 2, 0}, 4) --> {(0, 4), (1, 3), (2, 2)}
* @param numbers the input array
* @param k the target sum value
**/
public static List<Pair<Integer, Integer>> findPairsSum(int[] numbers, int k) {
    if(numbers.length < 2) {
        return new ArrayList<>();
    }

    List<Pair<Integer, Integer>> list = new ArrayList<>();

    Arrays.sort(numbers);

    int left = 0;
    int right = numbers.length -1;

    while(left < right) {
        int sum = numbers[left] + numbers[right];
        if(sum == k) {
            list.add(new ImmutablePair<>(numbers[left], numbers[right]));
            left = left + 1;
            right = right -1;
        } else if (sum < k) {
            left = left + 1;
        } else {
            right = right - 1;
        }
    }
    return list;
}
```

1. Write test cases to achieve BC.
2. Do mutation analysis by running [`PIT`](https://pitest.org/) on your test suite and report the calculated mutation score as reported by `PIT`.
3. If the mutation score is anything less than 100%, add more test cases to your test suite to reach 100%. If it is not possible to do so, explain why.

:::tip
Create a `gradle` project and copy the above code into a new Java class. The following lines must be present in your `build.gradle` to be able to use `PIT` in your project:

```groovy
plugins {
    id 'java'
    id 'jacoco'
    id 'info.solidsoft.pitest' version '1.5.2'
}

pitest {
    junit5PluginVersion = '0.12'
    targetClasses = ['exercises.*']  //by default "${project.group}.*"
    targetTests = ['tests.*']
    threads = 4
    outputFormats = ['XML', 'HTML']
    timestampedReports = false
}

dependencies {
    testImplementation 'org.junit.jupiter:junit-jupiter-api:5.8.1'
    testRuntimeOnly 'org.junit.jupiter:junit-jupiter-engine:5.8.1'
    implementation 'org.apache.commons:commons-lang3:3.11'
}
```

The above assumes your source file classes are under `exercises` package and your JUnit test files are under `tests` package. Finally in order to have `PIT` generate reports for you, run `./gradlew pitest` on a terminal. If things go well, you can find the generated report under `build/reports/pitest` in your project folder.
:::


