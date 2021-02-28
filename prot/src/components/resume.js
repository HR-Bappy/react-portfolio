import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import Education from './education';
import Experience from './experience';
import Skills from './skills';
import hrb from '../images/hrb.jpg';


class Resume extends Component {
  render() {
    return(
      <div >
        <Grid>
          <Cell col={4}>
            <div style={{textAlign: 'center'}}>
              <img
                src={hrb}
                alt="avatar"
                style={{height: '200px'}}
                 />
            </div>

            <h2 style={{paddingTop: '2em'}}>Habibur Rahman</h2>
            <h4 style={{color: 'grey'}}>Programmer</h4>
            <hr style={{borderTop: '3px solid crimson', width: '50%'}}/>
            <p>I conduct many programming session in 3rd and 4th year of University life.
               I love teaching as much as I enjoy learning. So far 
               I have organized different workshops and seminars through
                Extra-Curricular Club Activities. Now I am still working to
                 develop my coding skill. Already I have Participated more 
                 than 12 Programming contest & Got Certificate and also got
                  some good rank.</p>
            <hr style={{borderTop: '3px solid crimson', width: '50%'}}/>
            <h5>Address</h5>
            <p>Sector-10 Uttara, Dhaka-1230</p>
            <h5>Phone</h5>
            <p>+880 199 776 6489</p>
            <h5>Email</h5>
            <p>mdhabiburrb@gmail.com.com</p>
            <h5>Web</h5>
            <p>mywebsite.com</p>
            <hr style={{borderTop: '3px solid crimson', width: '50%'}}/>
          </Cell>
          <Cell className="resume-right-col" col={8}>
            <h2>Education</h2>


            <Education
              startYear={2008}
              endYear={2012}
              schoolName="D.S.T High School"
              schoolDescription="Completed Secondary School Certificate with CGPA 5 out of 5 and
              the passing year was 2013"
               />
              <Education
                startYear={2013}
                endYear={2015}
                schoolName="Dr. Afiluddin Degree College"
                schoolDescription="Completed Higher Secondary Certificate with CGPA 3.58 out of 5 and
                the passing year was 2016"
                />
                <Education
                startYear={2017}
                endYear={2020}
                schoolName="IUBAT"
                schoolDescription="Doing Bachelor of Computer Science and Engineering 
                and its the last semester in progress with CGPA 3.69 out of 4"
                />
                <hr style={{borderTop: '3px solid #e22947'}} />

              <h2>Experience</h2>

            <Experience
              startYear={2020}
              endYear={2020}
              jobName="Internship"
              jobDescription="..."
              />

              <hr style={{borderTop: '3px solid #e22947'}} />
              <h2>Skills</h2>
              <Skills
                skill="JAVA"
                progress={90}
                />
              
                <Skills
                  skill="HTML/CSS"
                  progress={80}
                  />
                  <Skills
                skill="javascript"
                progress={70}
                />
                  <Skills
                      skill="React"
                      progress={60}
                      />
                  <Skills
                    skill="NodeJS"
                    progress={50}
                    />
                    


          </Cell>
        </Grid>
      </div>
    )
  }
}

export default Resume;