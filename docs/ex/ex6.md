---
id: ex6
title: Exercise 6
---

:::info
This is an in-class exercise. An exercise page like this one will contain a brief description but is intended to be supplemented by discussion during our meeting time. Complete the exercise to the best of your ability in the time given. Feel free to talk with other students as you work, and do not be afraid to ask questions. Aim to complete as much as possible during our meeting and continue to work at home to finish, but you need not hand it in. 
:::


## Learning Objectives

:::success Objectives
This exercise should help you practice with:
* Logic-based testing
* Logic-based coverage criteria
:::

## Quick Question

It was mentioned in class that Clause Coverage does not subsume Predicate Coverage. Give an actual example that shows this.

## Task 1: Logic-based testing applied to source code

Consider the following code where `turnHeaterOn` decides whether a thermostat must be turned on or not and for how long:

```java
public class Thermostat {
    private int curTemp; // Current temperature
    private int thresholdDiff; // Temp difference until heater on
    private int timeSinceLastRun; // Time since heater stopped
    private int minLag; // minimum required time interval to turn the thermostat on
    private boolean Override; // Has user overridden the theromostat program
    private int overTemp; // OverridingTemp (only used if user overridden the program)
    private int runTime; // output of turnHeaterOn–how long to run
    private boolean heaterOn; // whether to run
    private Period period; // morning, day, evening, or night
    private DayType day; // week day or weekend day

    // turn the heater on? and for how long?
    public boolean turnHeaterOn (ProgrammedSettings pSet) {
       int dTemp = pSet.getSetting(period, day);
       if (((curTemp < dTemp - thresholdDiff) ||
          (Override && curTemp < overTemp - thresholdDiff)) && 
          (timeSinceLastRun > minLag)) { // Turn on the heater
            // How long? Assume 1 minute per degree (Fahrenheit)
          int timeNeeded = curTemp - dTemp;
          if (Override)
             timeNeeded = curTemp - overTemp;
          setRunTime (timeNeeded);
          setHeaterOn (true);
          return (true);
       }
       else {
          setHeaterOn (false);
          return (false);
       }
    } // End turnHeaterOn, setters and getters follow . . .  
}
```

Conduct logic-based testing on the first `if` statement within the `turnHeaterOn` to achieve:
1. Predicate coverage (i.e., branch coverage)
2. Clause coverage (i.e., condition coverage)
3. Correlative Active Clause Coverage (CACC)
4. Write actual test cases for CACC

:::tip
`dTemp` is an example of an _internal_ variable. An internal variable is one that its value is not directly fed into the program; Rather, we need to set the values of `period` and `day` such that we get the desirable value for `dTemp`.
:::

:::tip
To make your work easier when writing test requirements for each criterion, rewrite the predicate in the `if` statement in short form; that is for each cluase use a short notation e.g., `(curTemp < dTemp - thresholdDiff)` is one cluase and you can call it `A`. Similarly, use short notations for the other cluases in the predicate.
:::


## Task 2: Logic-based testing applied to specifications

Consider the following method:

```java
/** Calculate the number of Days between the two given days in
 *  the same year.
 *
 *  preconditions : day1 and day2 must be in same year
 *     1 <= month1, month2 <= 12  
 *     1 <= day1, day2 <= 31
 *     month1 <= month2
 *     The range for year: 1 ... 10000
 *     
 * @param month1 the month of the first day
 * @param day1 the first day
 * @param month2 the month of the second day
 * @param day2 the second day
 * @param year the year
 * @return the number of days between day1 and day2
 */
public static int cal (int month1, int day1, int month2, int day2, int year) {
   int numDays;
   if (month2 == month1) // in the same month
      numDays = day2 - day1;
   else {
      int daysIn[] = {0, 31, 0, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31}; // Skip month 0.
      // Are we in a leap year?
      int m4 = year % 4;
      int m100 = year % 100;
      int m400 = year % 400;
      if ((m4 != 0) || ((m100 == 0) && (m400 != 0)))
         daysIn[2] = 28;
      else
         daysIn[2] = 29;
      numDays = day2 + (daysIn[month1] - day1); // start with days in the two months
      for (int i = month1 + 1; i <= month2-1; i++) // add the days in the intervening months
         numDays = daysIn[i] + numDays;
   }
   return (numDays);
}
```
1. Formulate the pre-condition in the Javadoc as a logical predicate comprised of a number clauses.  
1. List test requirements (TRs) for CACC.
2. Write actual test cases to satisfy all the listed TRs for CACC in step 1.
