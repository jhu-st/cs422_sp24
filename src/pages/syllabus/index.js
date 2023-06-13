import React from 'react';
import Layout from '@theme/Layout';
import styles from './styles.module.css';
import useBaseUrl from '@docusaurus/useBaseUrl';

function Syllabus() {
  return (
    <Layout title="EN.601.422/622 Software Testing and Debugging (Spring 2023)- Syllabus">
      <div className="container">
        <h1 style={{marginTop: "2%"}}>Schedule</h1>
        <p>
          Click <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTzQmapu5Tc7z4dveL7LjkpfXJkq47Yqu5t8D3cjBGUDg7DC5yx0s9N15Nw6NXnC5FGN4JHEVbJOZJy/pubhtml" target="_blank">here</a> to see the schedule. Note that the schedule is tentative and might be updated as we make progress through the semester.
        </p>
        {/*<iframe src="https://calendar.google.com/calendar/embed?src=hivrfplagidt2kpq5h3k7rbvi8%40group.calendar.google.com&ctz=America%2FNew_York"  width="640px" height="420px" frameborder="1"></iframe> */}
                
        <br />
        <h1>Syllabus</h1>
        
        <br />
        <div className="alert alert--danger" role="alert">
          The instructor reserves the right to make adjustments to the given syllabus, policies and schedule as deemed necessary with notice.    
        </div>
        <br />
        <h2>Recommended Textbooks</h2><br />
        We do not strictly follow a single text in this course; we do though use material from the following resources frequently:

        <div className="card-demo" style={{display: "inline-flex", padding: "4% 0 1% 4%"}}>
            <div className="card"  >
              <div className="card__image" style={{padding: "8% 0 1% 26%"}}>
                <img src={useBaseUrl('img/ist.png')} />
              </div>
              <div className="card__body">
                <h5>Introduction to Software Testing, 2nd Edition</h5>
                <h6 style={{padding: "0% 0% 8% 16%"}}>By: Paul Amman & Jeff Offutt</h6>
              </div>
            </div>
        </div>

        <div className="card-demo" style={{display: "inline-flex", padding: "4% 0 1% 4%"}}>
            <div className="card"  >
              <div className="card__image" style={{display: "inline-block", padding: "8% 0 1% 26%"}}>
                <img src={useBaseUrl('img/ast.png')} />
              </div>
              <div className="card__body">
                <h5>The Art of Software Testing, 3rd Edition</h5>
                <h6 style={{padding: "0% 0% 8% 16%"}}>By: Glenford J. Myers et al.</h6>
                
              </div>
            </div>
        </div>

        <div className="card-demo" style={{display: "inline-flex", padding: "4% 0% 1% 4%"}}>
            <div className="card">
              <div className="card__image" style={{padding: "8% 0 4% 6%"}}>
                <img src={useBaseUrl('img/est.png')} />
              </div>
              <div className="card__body">
                <h5>Effective Software Testing</h5>
                <h6 style={{padding: "0% 0% 8% 16%"}}>By: Maurício Aniche</h6>
              </div>    
            </div>
        </div>

        <div className="card-demo" style={{display: "inline-flex", padding: "4% 0 1% 4%"}}>
            <div className="card">
              <div className="card__image" style={{display: "inline-block", padding: "8% 0 1% 28%"}}>
                <img src={useBaseUrl('img/wpf.png')} />
              </div>
              <div className="card__body">
                <h5>Why Programs Fail – A Guide to Systematic Debugging</h5>
                <h6 style={{padding: "0% 0% 8% 31%"}}>By: Andreas Zeller</h6>
              </div>
            </div>
        </div>
        <br />
        
        <h2 style={{padding: "4% 0 0 0"}}>Grading Scheme</h2>
          <div className="alert alert--info" role="alert">
            Course grade will be based on homeworks, a team-based final project, and a comprehensive test. There is no final exam scheduled during the finals week, but the "comprehensive test" serves the same purpose as a final examination:
          </div>
          <br />
          <ul>
            <li>5% - Class participation (session attendances tracked)</li>
            <li>0% - In-class exercises</li>
            <li>55% - Homework</li>
            <li>20% - Comprehensive Test (in lieu of a final exam)</li>
            <li>20% - Project</li>
            <ul>
              <li>15% - Deliverables</li>
              <li>5% - Final Presentation</li>
            </ul>
          </ul>
        
        Letter grades for the course will be subject to the instructor's evaluation of your overall class performance, generally based on this standard scale: 
        

        <table style={{padding: "20px 0px 20px 40px"}}>
          <thead>
            <tr>
              <th>Curoff</th>
              <th>Letter</th>            
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>{">"} 90</td>
              <td>A-, A, A+</td>
            </tr>
            <tr>
              <td>{">"} 80</td>
              <td>B-, B, B+</td>
            </tr>
            <tr>
              <td>{">"} 70</td>
              <td>C-, C, C+</td>
            </tr>
            <tr>
              <td>&#8805; 60</td>
              <td>D, D+</td>
            </tr>
            <tr>
              <td>{"<"} 60</td>
              <td>F</td>
            </tr>
          </tbody>
        </table>

        <p>The cutoff for assigning -/+ to each grade letter is further subject to the instructor's evaluation of your overall class performance.</p>

        <div className="alert alert--warning" role="alert">
          You should not expect a curve in this course.
        </div>
        <br />
        

        <h3>Homework</h3>

        <p>There will be 5-6 mandatory homeworks. These homeworks aim to solidify your understanding of the material covered in class. They also give you a chance to get hands-on practice with different testing tools and technologies. Homeworks must be completed <i><b>individually</b></i>. You have a total budget of <i>4 late days</i> for the homeworks, but you may not use more than <i>2 late days</i> on any given homework. We will keep track of the late days for each student.      Each homework assignment will be assigned a point value; the overall homework assignments grade will be computed as your total points earned divided by the total achievable points. Homeworks are due at <b>11pm of the due date</b>.
        </p>

        <br />
        <h3>Comprehensive Test</h3>
        <p>
        A comprehensive test will be done in lieu of a final exam. The comprehensive test covers most topics and concepts taught throughout the semester in the class. The comprehensive test is <strong>tentatively scheduled for 4/12</strong> during the class time. More details about the format, duration and content of the test will be announced to the students closer to the test date!
        </p>
        <h3>Project</h3>
        <p>A final project should be completed as part of the requirements in this class. See the <a href="https://docs.google.com/spreadsheets/d/e/2PACX-1vTzQmapu5Tc7z4dveL7LjkpfXJkq47Yqu5t8D3cjBGUDg7DC5yx0s9N15Nw6NXnC5FGN4JHEVbJOZJy/pubhtml" target="_blank">schedule</a> for (tentative) deadlines to form project teams, deciding a project topic & drafting a proposal, project submission (towards the end of the semester), and making a final presentation. The purpose of the project is to apply what you have learnt in class over the semeter to a real-world software application. This typically is a testable open-source piece of software that you would use as your "subject" application. You will systematically and as thoroughly as possible test the sofware and hopefully can reveal some real faults in it. <strong> You need to acquire instructor's approval on your project before starting to write a proposal on it.</strong> The grading will be based on the topic of the project, the overall quality of the work/report, the achieved results, and the final in-class presentation. More details on the specifics of the project will be posted later.
        </p>

        <div className="alert alert--warning" role="alert">
        There are NO late days for project-related deadlines.
        </div>
        <br/>


        <h3>Academic Integrity</h3>
<p>
The strength of the university depends on academic and personal integrity. 
In this course, you must be honest and truthful. Ethical violations include plagiarism, 
reuse of assignments, improper use of the Internet and electronic devices, unauthorized 
collaboration, alteration of graded assignments, forgery and falsification, lying, 
facilitating academic dishonesty, and unfair competition. Report any violations you 
witness to the instructor. You may consult the associate dean of student affairs and/or 
the chairman of the Ethics Board beforehand. See the guide on "Academic Ethics for 
Undergraduates" and the <a href="http://ethics.jhu.edu"  target="_blank">Ethics Board Web site</a> as well as the CS Department's academic integrity code.
</p>

<div className="alert alert--danger" role="alert">
  <h4>Danger</h4>
  Cheating is immoral. Cheaters that are caught will be punished as is required under University policy. Please report all instances of cheating you see to the professor. Clear-cut cases of cheating will be reported to the Undergraduate Academic Ethics Board, or to the WSE Dean if the student is a graduate student. If a student is found guilty, this information is placed on their permanent academic record and suspension or expulsion may result. If some action seems a grey area to you, please ask first before proceeding!
</div>
< br/>
<h3>Personal Wellbeing</h3>

<p>

  <ul>
    <li>Because of the ongoing COVID-19 pandemic special requirements will be in effect this term, and these may vary during the term. Please keep updated with these at the following sites:</li> 
      <ul>      
        <li>University information: <a href="https://covidinfo.jhu.edu/" target="_blank">https://covidinfo.jhu.edu/</a></li>
        <li>Whiting School of Engineering information: <a href="https://engineering.jhu.edu/covid-19/" target="_blank">https://covidinfo.jhu.edu/</a></li>
      </ul>

    <li>As of the start of the term all students, instructors and staff must complete health screening daily using the Prodensity app before coming to campus. <strong>Masks must be worn properly at all times while in the classroom and other indoor spaces.</strong> Vaccination is required unless an exception has been granted by the university for health or religious reasons. Periodic asymptomatic testing may be required. Please follow the university guidance faithfully.</li>
    <li>The Johns Hopkins COVID-19 Call Center (JHCCC), which can be reached at 443-287-8500 seven days a week from 7 a.m. to 7 p.m., supports all JHU students, faculty, and staff experiencing COVID-19 symptoms. Primarily intended for those currently within driving distance of Baltimore, the JHCCC will evaluate your symptoms, order testing if needed, and conduct contact investigation for those affiliates who test positive. More information on the JHCCC and testing is on <a href="https://covidinfo.jhu.edu/diagnostic-testing/johns-hopkins-covid-19-call-center/" target="_blank">the coronavirus information website</a>.</li>
    <li>If you are sick please notify me by email so that we can make appropriate accommodations should this affect your ability to attend class, complete assignments, or participate in assessments. The Student Health and Wellness Center is open and operational for primary care needs. If you would like to speak with a medical provider, please call 410-516-8270, and staff will determine an appropriate course of action. See also <a href="https://studentaffairs.jhu.edu/student-life/student-outreach-support/absences-from-class/illness-note-policy/" target ="_blank">https://studentaffairs.jhu.edu/student-life/student-outreach-support/absences-from-class/illness-note-policy/</a></li>
    <li>All students with disabilities who require accommodations for this course should contact me at their earliest convenience to discuss their specific needs. If you have a documented disability, you must be registered with the JHU Office for Student Disability Services (101 Shaffer Hall; 410-516-4720; <a href="http://web.jhu.edu/disabilities/" target="_blank">http://web.jhu.edu/disabilities/</a>) to receive accommodations.</li>
    <li>Students who are struggling with anxiety, stress, depression or other mental health related concerns, please consider connecting with resources through the JHU Counseling Center. The Counseling Center will be providing services remotely to protect the health of students, staff, and communities. Please reach out to get connected and learn about service options based on where you are living this fall at 410-516-8278 and online at <a href="http://studentaffairs.jhu.edu/counselingcenter/" target="_blank">http://studentaffairs.jhu.edu/counselingcenter/</a>.</li>
    <li>Student Outreach & Support helps students manage physical and mental health concerns, personal and family emergencies, financial issues, and other obstacles that may arise during their college experience. Students can self-refer or refer a friend who may need extra support or help getting connected to resources. To connect with SOS, please visit this website: <a href="https://studentaffairs.jhu.edu/student-life/student-outreach-support/" target="_blank">https://studentaffairs.jhu.edu/student-life/student-outreach-support/</a> or email deanofstudents@jhu.edu, call 410-516-7857, or students can schedule to meet with a Case Manager by visiting the Student Outreach & Support website and filling out a referral form online.</li>
  </ul>
</p>

<h3>Classroom Climate</h3>
<p>
As your instructor, I am committed to creating a classroom environment that values the diversity of experiences and perspectives that all students bring. Everyone here has the right to be treated with dignity and respect. I believe fostering an inclusive climate is important because research and my experience show that students who interact with peers who are different from themselves learn new things and experience tangible educational outcomes. Please join me in creating a welcoming and vibrant classroom climate. Note that you should expect to be challenged intellectually by me, the TAs, and your peers, and at times this may feel uncomfortable. Indeed, it can be helpful to be pushed sometimes in order to learn and grow. But at no time in this learning process should someone be singled out or treated unequally on the basis of any seen or unseen part of their identity. If you ever have concerns in this course about harassment, discrimination, or any unequal treatment, or if you seek accommodations or resources, I invite you to share directly with me or the TAs. I promise that we will take your communication seriously and to seek mutually acceptable resolutions and accommodations. Reporting will never impact your course grade. You may also share concerns with the department chair <a href="https://www.cs.jhu.edu/faculty/randal-burns/" target="_blank">Dr. Randal Burns</a>, the Director of Undergraduate Studies <a href="https://www.cs.jhu.edu/~joanne/" target="_blank">Dr. Joanne Selinski</a>, the Assistant Dean for Diversity and Inclusion (Darlene Saporu, dsaporu@jhu.edu), or the Office of Institutional Equity (oie@jhu.edu). In handling reports, people will protect your privacy as much as possible, but faculty and staff are required to officially report information for some cases (e.g. sexual harassment).
</p>

<h3>Family Accommodations Policy</h3>
<p>
You are welcome to bring a family member to class on occasional days when your responsibilities require it (for example, if emergency child care is unavailable, or for health needs of a relative). In fact, you may see my children in class on days when their school is closed. Please be sensitive to the classroom environment, and if your family member becomes uncomfortably disruptive, you may leave the classroom and return as needed.
</p>

<h3>University Policy on Incompletes</h3>
<p>
Students who are confronted with compelling circumstances beyond their control which interfere with the ability to complete their semester's work during the normal course of a term may request an incomplete grade from the instructor. This must be requested by the last day of class. Approval of such a request is neither automatic nor guaranteed, but it is expected that faculty will make every effort to accommodate students dealing with illness in the family and other pandemic-related hardships. The instructor and student must establish a timetable for submitting the unfinished work with a final deadline no later than the end of the third week of the subsequent semester. Exceptions to this deadline require a petition from the instructor to the student's academic advising office before this date. When entering an Incomplete grade in SIS, faculty must include a reversion grade which represents the grade the student will receive if they do not complete the missing work by the agreed-upon deadline.
</p>

<h3>Deadlines for Adding, Dropping and Withdrawing from Courses</h3>
<p>
Students may add a course up to <strong>February 4, 2022</strong>. <strong>They may drop courses up until March 6, 2022</strong> provided they remain registered for a minimum of 12 credits. <strong>Between March 7, 2022 and April 15, 2022</strong> a student may withdraw from a course with a W on their academic record. A record of the course will remain on the academic record with a W appearing in the grade column to indicate that the student registered and then withdrew from the course. For more information on these and other academic policies, see <a href="https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/undergraduate-policies/academic-policies/grading-policies/" target="_blank">https://e-catalogue.jhu.edu/engineering/full-time-residential-programs/undergraduate-policies/academic-policies/grading-policies/</a>
</p>

</div>
</Layout>
);
}

export default Syllabus;