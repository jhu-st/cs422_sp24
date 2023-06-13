---
id: hw4
title: Homework 4
---

:::caution
* You are expected to work individually.
* Due: **Friday March 31th at 11pm EST (Baltimore time).**
* This assignment is worth 80 points.
:::

:::tip Objectives
* GUI Testing
* Testing Randomness and I/O
* Rest API Testing
* Load Testing metrics
* Selenium and rest-assured tools
:::

:::tip
You can get all the starter files for task 4 this homework by doing a `git pull` on the [course public repo](https://github.com/jhu-st/jhu-st-sp23-public). The files can be found under `hw/hw4`.
:::

## Task 1 (8 points)
Answer the following quesiotns:

1. All failures we detect during GUI testing are real and relevant because they are things that the end-user could potentially face too, but this is not necessarily the case when we do lower levels of testing, for instance, unit testing. In fact, some detected/reported failures during unit testing might be “false failures”. Explain using actual examples why this is indeed true.

2. Why throughput is a valuable and important metric when it comes to load testing? Explain clearly with at least two reasons.

:::caution Deliverables
The deliverables for this task is your answers to the questions above saved in a document named `task1` e.g. `task1.pdf`.
:::

## Task 2 (27 points)

Using JUnit 5 and Selenium Webdriver, write separate JUit test methods to automate the followings:


Visit [http://the-internet.herokuapp.com/](http://the-internet.herokuapp.com/):

1. [__test scenario 1__]: on `upload` endpoint, _assert_ that an attempt to upload while no file is chosen fails! 
2. [__test scenario 2__]: on `hovers` endpoint, _assert_ that hovering on the leftmost box shows `user1`.
3. [__test scenario 3__]: on `checkboxes` endpoint, _assert_ that `checkbox 1` is uncheked and `checkbox 2` is selected.
4. [__test scenario 4__]: on `context_menu` endpoint, _assert_ that right-clicking in the box pops up a message box.
5. [__test scenario 5__]: on `broken_images` endpoint, _assert_ that there are two broken images.
6. [__test scenario 6__]: on `infinite_scroll` endpoint, scroll down by `195`.
7. [__test scenario 7__]: on `dropdown` endpoint, select `Option 2`.
8. [__test scenario 8__]: on `key_presses` endpoint, press the down key and _assert_ that the page says `You entered: DOWN`.
9. [__test scenario 9__]: on `login` endpoint (i.e., `form authentication`), try to login with empty user name and password and _assert_ the page says `Your username is invalid!`
10. [__test scenario 10__]: on `login` endpoint (i.e., form authentication), try to login with user name `tomsmith` and empty password and _assert_ the page says `Your password is invalid!`
11. [__test scenario 11__]: on `login` endpoint (i.e., form authentication), try to login with user name `tomsmith` and password `SuperSecretPassword!` and _assert_ that: 1) the page redirects to `secure` endpoint, 2) the page says `You logged into a secure area!`, and 3) a button labeled `Logout` is both _visible_ and _enabled_ on the page. Click on the `Logout` button. _Assert_ that you are back on `login` route and the page says `You logged out of the secure area!` 


:::caution Deliverables
The deliverables for this part are your JUnit test class(es) containing the above test scenarios as a separate project. For each of the JUnit test methods you write, leave a short comment to indicate which of the above automations it corresponds to. Save the project folder as `TheInternerGUITesting` under `task2` folder.
:::

:::caution Selenium
If you are working with `Intellij` and `Gradle`, it is easiest to install `Selenium UI Testing` plugin before creating a `Selenium` project, and writing the above test cases in your project. If you are using alternate IDEs/platforms etc., make sure to include detailed instructions for us on how to run your code.
:::


## Task 3 (20 points)
Using JUnit 5 and [rest-assured](https://rest-assured.io/), write separate unit tests to test the following end points on  [https://jsonplaceholder.typicode.com/](https://jsonplaceholder.typicode.com/):

1. [__test 1__]: when a `GET` request is sent to `/albums` endpoint, verify that an entry with the `title` "omnis laborum odio" exists.
1. [__test 2__]: when a `GET` request is sent to `/comments` endpoint, verify that the returned JSON response contains at least 200 comments.
1. [__test 3__]: when a `GET` request is sent to `/users` endpoint, verify that a user named "Ervin Howell" with username "Antonette" and zipcode of "90566-7771" exists.
1. [__test 4__]: when a `GET` request is sent to `/comments` endpoint, verify that there are comments from people whose email address end in `.biz`.
1. [__test 5__]: Create a new post by sending a http `POST` request to `/posts` endpoint with this info:

```{
userId: 11,
id: 101,
title: "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
body: "quia et suscipit
suscipit recusandae consequuntur expedita et cum
reprehenderit molestiae ut ut quas totam
nostrum rerum est autem sunt rem eveniet architecto"
}
```

:::tip
You will find `rest-assured`'s ["Getting Started"](https://github.com/rest-assured/rest-assured/wiki/GettingStarted) and ["User Guide"](https://github.com/rest-assured/rest-assured/wiki/Usage) documentations helpful to develop the above tests.
:::

:::caution Deliverables
The deliverables for this part are your separate JUnit tests, for the 5 test scenarios mentioned above, saved in a java class named `JsonplaceholderRestAPITest.java` saved under `task3` folder.
:::

## Task 4 (25 points)
You need to unit test the `guessingNumberGame` function within `GuessNumber` class. 

### Task 4-1
The function implements a number-guessing game. Read the documentation and play the game to develop an understanding of the game. Write JUnit tests to verify that the function behaves as expected (as specified in the documentation). Write your tests in a class named `GuessNumberIOTest`. **You must write as many different test cases as you can here ** and aim to reveal as many faults as you can. For each successful test case (i.e., a test case that fails), make a comment on top of it and explain in details why you think this failure is happening and provide a possible description of the underlying fault.

:::tip
Since the function under test here mainly works with standard i/o, you need to use the techniques discussed in class to successfully test this funciton.
:::

:::tip
You may run the jar file in a terminal via the command `java -cp ./guessnumber.jar GuessNumber`.
:::

:::tip
The folder named `doc` inside `task4` contains the documentation of the program in html format.
::: 

### Task 4-2
As given in the documentation, the `guessingNumberGame` function returns the randomly generated number. In this part, your task is to probe the distribution of the random numbers generated. In particular, you need to verify that the random numbers generated (i.e., the return value of the function) has (roughly) a uniform distribution. To this aim, you are asked to have the funciton run 30,000 times and store the results of the return random numbers. **Fix the seed value at 0 on the random generator you pass in for all runs**. Verify that all numbers between 1 and 100 (inclusive) are generated roughly with similar frequency. In this case, we consider the frequencies to be roughly the same if the frequency of generating any of the numbers is within +30%/-30% of any other numbers in the range. You need to implement this in a JUnit test class named `GuessNumberRandomnessTest`.

:::tip
You can make use of or do something similar to what you did in the previous part to automate these runs!
:::

:::caution Deliverables
The deliverables for this part are 1) task 4-1: your tests saved in a java class named `GuessNumberIOTest.java`, and 2) task 4-2: your tests saved in a java class named `GuessNumberRandomnessTest.java`. Save both of these files under `task4` folder.
:::


## Submission

:::danger Submission
Submissions should be made to [Gradescope](https://www.gradescope.com/). Create a zip file named `hw4.zip` which contains all the deliverables for all the parts. For each task, create a separate folder named taskX, where X is the part number, under which you put all the deliverables for that task. For each task, make sure to submit all the necessary deliverables including JUnit test classes (`.java` files NOT `.class` files), documents, reports etc.
:::


:::danger
__Important Note:__ If any of your `.java` files is not compilable/executable for any reason, you will receive a zero for that part. Thus, please make sure all the source files you hand in successfully compile and run!
:::

