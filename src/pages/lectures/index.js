import React from 'react';
import classnames from 'classnames';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import clsx from 'clsx';
import styles from './styles.module.css';

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  return (
    <Layout title="EN.601.422/622 Software Testing and Debugging - Seminar">
      <div className= "container">
      <div class="row">
        <table className={styles.table}>
          <thead>
              <tr>
                  <th >Date</th>
                  <th >Link</th>
                  <th> Topic(s)</th>
                  <th> Slides</th>
                  <th> Exercise</th>
                  <th> Relevant Reads/Resources</th>
              </tr>
          </thead>
          
          <tbody className={styles.tbody}>
              <tr>
                <td>Mon (1/23)</td>
                <td>Lecture 1</td>
                <td>Intro, Goal and psychology of software testing, Logistics</td>
                <td><a href={useBaseUrl('slides/lecture1.pdf')} target="_blank">PDF</a></td>
                <td>N/A</td>
                <td>IST, chapter 1 <br /> AST, chapter 2 <br /> EST, chapter 1</td>
              </tr>
              
              <tr>
                <td>Wed (1/25)</td>
                <td>Lecture 2</td>
                <td>The V model, RIPR model, oracle problem, more testing principles</td>
                <td><a href={useBaseUrl('slides/lecture2.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex1')}>Ex 1</a></td>
                <td>IST, chapter 2 <br /> AST, chapter 2</td>
              </tr>
              <tr>
                <td>Mon (1/30)</td>
                <td>Lecture 3</td>
                <td>Blackbox testing techniques</td>
                <td><a href={useBaseUrl('slides/lecture3.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex2')}>Ex 2</a></td>
                <td>IST, chapter 1 and 2 <br /> AST chapter 1, 2, and 4<br /> EST, chapter 2</td>
              </tr>
              <tr>
                <td>Wed (2/1)</td>
                <td>Lecture 4</td>
                <td>Whitebox testing techniques, testing loops</td>
                <td><a href={useBaseUrl('slides/lecture4.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex3')}>Ex 3</a></td>
                <td>IST, chapter 3 <br/>AST, chapter 4 <br /> EST, chapter 3</td>
              </tr>
              
              <tr>
                <td>Mon (2/6)</td>
                <td>Lecture 5</td>
                <td>Test Automation with JUnit 5</td>
                <td><a href={useBaseUrl('slides/lecture5.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex4')}>Ex 4</a></td>
                <td><a href="https://junit.org/junit5/docs/current/user-guide" target="_blank">JUnit 5 user guide</a><br />IST, chapter 3<br /></td>
              </tr>
              
              <tr>
                <td>Wed (2/8)</td>
                <td>Lecture 6</td>
                <td>Coverage criteria, subsumption, combinatorial coverage criteria</td>
                <td><a href={useBaseUrl('slides/lecture6.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex5')}>Ex 5</a></td>
                <td>IST, chapter 5 & 6<br /></td>
              </tr>
              {/*
              <tr>
                <td>Mon (2/13)</td>
                <td>Lecture 7</td>
                <td>Graphs in testing, graph-based coverage criteria</td>
                <td><a href={useBaseUrl('slides/lecture7.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex6')}>Ex 6</a></td>
                <td>IST, chapter 7.1 & 7.2<br /></td>
              </tr>
              */}
              <tr>
                <td>Mon (2/13)</td>
                <td>Lecture 7</td>
                <td>Logic-based testing, logic-based coverage criteria</td>
                <td><a href={useBaseUrl('slides/lecture7.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex6')}>Ex 6</a></td>
                <td>IST, chapter 8.1<br /></td>
              </tr>
              
              <tr>
                <td>Wed (2/15)</td>
                <td>Lecture 8</td>
                <td>Property-based Testing</td>
                <td><a href={useBaseUrl('slides/lecture8.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex7')}>Ex 7</a></td>
                <td>EST, chapter 5<br /><a href="http://jqwik.net/" target="_blank">Jqwik</a> tool</td>
              </tr>
              <tr>
                <td>Wed (2/22)</td>
                <td>Lecture 9</td>
                <td>Mutation analysis, mutation testing</td>
                <td><a href={useBaseUrl('slides/lecture9.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex8')}>Ex 8</a></td>
                <td>IST, chapter 9<br /><a href="https://pitest.org/" target="_blank">PIT</a> Java mutation tool</td>
              </tr>
              <tr>
                <td>Mon (2/27)</td>
                <td>Lecture 10</td>
                <td>Test doubles, mock testing</td>
                <td><a href={useBaseUrl('slides/lecture10.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex9')}>Ex 9</a></td>
                <td>IST, chapter 12<br /><a href="https://site.mockito.org/" target="_blank">Mockito</a> Java mocking tool</td>
              </tr>
              
              <tr>
                <td>Wed (3/1)</td>
                <td>Lecture 11</td>
                <td>GUI Testing</td>
                <td><a href={useBaseUrl('slides/lecture11.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex10')}>Ex 10</a></td>
                <td><a href="https://www.guru99.com/gui-testing.html" target ="_blank">GUI testing Intro</a> <br /><a href="https://www.selenium.dev/" target="_blank">Selenium</a> tool <br /><a href="https://www.guru99.com/selenium-tutorial.html" target="_blank">Selenium tutorials</a></td>
              </tr>
              <tr>
                <td>Wed (3/8)</td>
                <td>Lecture 12</td>
                <td>Unit testing randomness & i/o, REST API Testing</td>
                <td><a href={useBaseUrl('slides/lecture12.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex11')}>Ex 11</a></td>
                <td><a href="https://rest-assured.io/" target ="_blank">rest-assured</a></td>
              </tr>
              <tr>
                <td>Mon (3/13)</td>
                <td>Lecture 13</td>
                <td>Non-functional Testing - Load Testing</td>
                <td><a href={useBaseUrl('slides/lecture13.pdf')} target="_blank">PDF</a></td>
                <td><a href={useBaseUrl('docs/ex/ex12')}>Ex 12</a></td>
                <td><a href="https://jmeter.apache.org/" target ="_blank">Apache JMeter</a></td>
              </tr>

              <tr>
                <td>Wed (3/29)</td>
                <td>Lecture 14</td>
                <td>Debugging</td>
                <td><a href={useBaseUrl('slides/lecture14.pdf')} target="_blank">PDF</a></td>
                <td>N/A</td>
                <td><a href="https://logging.apache.org/log4j/2.x/" target="_blank">Log4j 2</a><br /><a href="https://www.eclipse.org/aspectj/" target="_blank">Aspectj</a><br />WPF chapter 1 & 2 & 5</td>
              </tr>
              {/*
              <tr>
                <td>Tue (3/31)</td>
                <td><a href="https://wse.zoom.us/rec/play/kHQbRDuNoydQ4Y0sjX6YUnyMCMunk0S2j449gNa4RZEomIidcy5XIEBfabMMupVYLn-FbWUK2wW6aHc0.pHiAROkOQnUoPs-S?autoplay=true&startTime=1648747765000" target="_blank">Lecture 15</a></td>
                <td>Debugging II</td>
                <td><a href={useBaseUrl('slides/lecture15.pdf')} target="_blank">PDF</a></td>
                <td>N/A</td>
                <td><a href="https://logging.apache.org/log4j/2.x/" target="_blank">Log4j 2</a><br /> <a href="https://www.eclipse.org/aspectj/" target="_blank">Aspectj</a><br />WPF, chapter 5</td>
              </tr>    

  */}

          </tbody>
        </table>
        </div>
        <br />
        <p>
          * <b>IST:</b> Introduction to Software Testing, 2nd Edition <br />
          * <b>AST:</b> The Art of Software Testing, 3rd Edition <br />
          * <b>EST:</b> Effective Software Testing <br /> 
          * <b>WPF:</b> Why Programs Fail: A Guide to Systematic Debugging <br /> 
        </p>
      </div>
      
  
    </Layout>
  );
}

export default Home;
