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
    <Layout title="EN.601.422/622 Software Testing and Debugging">
      
      <div className={styles.main}>
        <h1>EN.601.422/622: Software Testing and Debugging - Spring 2023</h1>
        <p><strong>Course Description:</strong> Studies show that testing can account for over 50% of software development costs. This course presents a comprehensive study of software testing, principles, methodologies, tools, and techniques. Topics include testing principles, coverage (graph coverage, logic coverage, input space partitioning, and syntax-based coverage), unit testing, higher-order testing (integration, system-level, acceptance), testing approaches (white-box, black-box, grey-box), regression testing, debugging, delta debugging, and several specific types of functional and non-functional testing as schedule/interest permits (GUI testing, usability testing, security testing, load/performance testing, A/B testing etc.). For practical topics, state- of-the-art tools/techniques will be studied and utilized.</p>
        <div className={styles.buttons}>
        <Link
          className={clsx('button button--lg', styles.bb1)}
          to="https://piazza.com/jhu/spring2023/en601422622">
          Piazza
        </Link>
      </div>
      
      <div className={styles.buttons}>
        <Link
          className={clsx('button  button--lg', styles.bb2)}
          to="https://www.gradescope.com/courses/500401">
          Gradescope
        </Link>
      </div>
       <br /> 
        <h2>Course Staff</h2>
        <br />
        <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 1%"}}>
                <div className="card"  >
                    <div className="card__header" >
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/darvish.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Dr. Ali Darvish, Instructor</h4>
                        <small className="avatar__subtitle">
                            Department of Computer Science <br/>
                            Email: darvish /AT/ jhu DOT edu <br />
                            Web: <a href="http://cs.jhu.edu/~darvish/" target="_blank">http://cs.jhu.edu/~darvish/</a><br/>
                            Office Hours: Tue 5-6pm & Wed 7:30-8:30pm @ <a href="https://wse.zoom.us/s/5158173954" target="_blank">Zoom</a><br />
                            Zoom link: <a href="https://wse.zoom.us/s/5158173954" target="_blank"><i>Zoom link</i></a>
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 4%"}}>
                <div className="card"  >
                    <div className="card__header" >
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/diwang.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">S.S Diwangkara, TA</h4>
                        <small className="avatar__subtitle">
                            Department of Computer Science <br/>
                            Email:  diwangs /AT/ cs DOT jhu DOT edu<br />
                            Office Hours: Thu 3:00p - 5:00p & Fri 4:00p - 5:00p @ Malone 122
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>

            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 1%"}}>
                <div className="card"  >
                    <div className="card__header" >
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/Shreayan.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Shreayan Chaudhary, TA</h4>
                        <small className="avatar__subtitle">
                            Department of Computer Science <br/>
                            Email: schaud31 /AT/ jhu /DOT/ edu <br />
                            Office Hours: Mon 3:00p - 4:00p @ Malone 122, <br/>
                            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Tue 1:30p - 2:30p & Thu 1:30p - 2:30p @ <a href="https://wse.zoom.us/j/9295478420?pwd=VUNmSEJuNHd6NlVyWC90SFBrZnFPQT09" target="_blank">Zoom</a>
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 1%"}}>
                <div className="card"  >
                    <div className="card__header" >
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/avatar.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Fnu Preetham Nagesh, TA</h4>
                        <small className="avatar__subtitle">
                            Department of Computer Science <br/>
                            Email: pnagesh2 /AT/ jhu /DOT/ edu <br />
                            Office Hours: Mon 4:30p - 6:00p & Fri 11:30a - 1:00p @ <a href="https://wse.zoom.us/j/9879221661?pwd=TEFVZHV0L0trWU1MT1pZUVd1SnFXdz09" target="_blank">Zoom</a>
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            <br/>
            <div className="card-demo" style={{display: "inline-block", padding: "1% 0 1% 1%"}}>
                <div className="card"  >
                    <div className="card__header" >
                    <div className="avatar">
                        <img className="avatar__photo avatar__photo--xl" src={useBaseUrl('img/gaurav.jpg')} />
                        <div className="avatar__intro">
                        <h4 className="avatar__name">Gaurav Narwani, TA</h4>
                        <small className="avatar__subtitle">
                            Department of Computer Science <br/>
                            Email: gnarwan1 /AT/ jhu /DOT/ edu <br />
                            Office Hours:Tue 11:30a - 1:00p & Sat 1:30p - 3:00p @ <a href="https://wse.zoom.us/j/91922472100?pwd=UDJhZHlyTzV6NTBzYlNtdTRydWNRdz09" target="_blank">Zoom</a>
                        </small>
                        </div>
                    </div>
                </div>
                </div>
            </div>
        < br />
        <br />
        <h2>Course Information</h2><br />
        
        <strong>Time and Location:</strong> Monday, Wednesday & Friday 1:30 PM – 2:20 pm EST @ Hodson 213.
        <br /><strong>Contact and Communication</strong>: For all inquiries and communications for this course, please use its <Link className={clsx('button button--sm', styles.button1)} to="https://piazza.com/jhu/spring2023/en601422622">Piazza</Link> page.
        <br /><strong>Assignment Submission:</strong>: All assignments for this course must be submitted on <Link className={clsx('button button--sm', styles.button2)} to="https://www.gradescope.com/courses/500401">Gradescope</Link> via entry code <em>ZZ5D68</em>. 
        </div>


    </Layout>
  );
}

export default Home;
