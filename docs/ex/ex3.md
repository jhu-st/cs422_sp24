---
id: ex3
title: Exercise 3
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you:
* Whitebox testing techniques: 
    * Method coverage, 
    * Statement coverage, 
    * Branch coverage
* More practice with implementing test cases in JUnit 
:::

## Task 1

Consider this implementation of `countOutsideRange` method:

```java
// count how many elements of arr is NOT within the range [r1, r2] 
int countOutsideRange(int arr[], int r1, int r2) { 
   int count = 0;
   for (int i = 0; i < arr.length; ++i) {
       if (arr[i] <= r1 || arr[i] >= r2) {
          count++;
       }
    }
   return count;
}
```

Now, answer the following questions:

1. Write test case(s) that achieve (if not possible to achieve any of these coverages, explain.): 
    * method coverage 
    * statement coverage but not branch coverage
    * branch coverage but not path coverage
    * full path coverage 
2. Which of the abovementioned coverage criteria are good enough to reveal all faults (if any)?
3. Is there any faults that the test cases suggested above cannot reveal?

:::info
You do not have to implement these test cases in JUnit, but if you like more practice with Java, feel free to implement your test cases.
:::


## Task 2

Do a git pull on the [course reporsitory](https://github.com/jhu-st/jhu-st-sp23-public) to get a copy of `ExpUtils.java` file under `exercises\ex3` folder. There is one method in this class `validBrackets(String)` which you will be testing in this part.

### Design test cases
Using pen and paper only:

1. Write test cases to achieve full branch coverage.
2. Are any faults revealed using the test cases that achieve full branch coverage?
3. Can you point out any other fault(s) that is/are not necessarily detectable by acheiving 100% branch coverage?
4. Add test cases (if needed) to satisfy "Loop boundary adequacy".

:::tip
To asnwer question 3 above, read the Javadoc specs carefully and put into work your blackbox testing skills!
:::

### Implementation

Now, do the followings:

1. Implement in JUnit the test cases that you designed in the previous part.
2. Utilize a code coverage tool (e.g. Intellij Code Coverage, Jacoco etc.) to run your test cases, measure code coverage, and verify that your test cases indeed achieve 100% branch coverage.

:::tip Jacoco on Gradle project in Intellij
In order to add Jacoco to your Gradle project in Intellij, all you need to do is to add the following to your `build.gradle` under `plugins`:

```groovy
id 'jacoco'
```
Also add the following directly in `build.gradle`:

```groovy
jacocoTestReport {
    dependsOn test
    reports {
        xml.enabled true
        csv.enabled true
        html.enabled true
    }
}
```

This specifies that tests must be run before generating coverage report and also mandates generation of report in thee different formats namely `html`, `csv` and `xml`.

Then, you need to type the following (in a terminal) to run tests and generate code coverage report:

```bash
$> gradlew jacocoTestReport
```
:::

### Fix the faults

Finally, fix all the faults that you have found, run the test cases and verify you have a green test suite.

Here is the specs and implementation of `ExpUtils` for your reference:

```java
import java.util.Stack;

public class ExpUtils {
    /**
     * This method decides if an expression comprised of '(', ')', '[', ']', '{', and '}'
     * is valid or not. An input expression is valid if:
     * 1. Open brackets must be closed by the same type of brackets.
     * 2. Open brackets must be closed in the correct order.
     * 3. empty strings are considered valid
     * @param input the input expression given as a string
     * @return true if the expression is valid, false otherwise.
     */
    public static boolean validBrackets(String input) {
        if (input.isEmpty()) {
            return true;
        }
        Stack<Character> stack = new Stack<>();
        for (int i = 0; i < input.length(); i++) {
            char current = input.charAt(i);
            if (current == '(' || current == '[' || current == '{') {
                stack.push(current);
            } else {
                if(stack.isEmpty()) {
                    return false;
                }
                char peekChar = stack.peek();
                if ((current == ')' && peekChar != '(')
                        || (current == '}' && peekChar != '{')
                        || (current == ']' && peekChar != '[')) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
        return true;
    }

}
```



