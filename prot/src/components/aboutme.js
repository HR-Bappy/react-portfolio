import React, { Component } from 'react';
import { Grid, Cell } from 'react-mdl';
import abut  from '../images/abut.jpeg'

class About extends Component {
  render() {
    return(
    <div>
        <Grid>
        <Cell className="abut_txt" col={8}>
            <p>I am doing my B.Sc in Computer Science & Engineering (CSE) at International
                 University of Business Agriculture and Technology, and this is my last year
                  with maintaining CGPA 3.69 out of 4. I have completed Higher Secondary 
                  School Certificate from Dr. Afiluddin Degree College with CGPA 3.58 out 
                  of 5 and also completed Secondary School Certificate from D.S.T High 
                  School with CGPA 5 out of 5.<br /><br /> I love to explore and learn new 
                  thing. I believe that learning comes from inner-self. I'm a quick 
                  self-learner. I conduct many programming session in 3rd and 4th year
                   of University life. I love teaching as much as I enjoy learning. So 
                   far I have organized different workshops and seminars through
                    Extra-Curricular Club Activities. Now I am still working to develop 
                    my coding skill. Already I have Participated more than 12 Programming
                     contest & Got Certificate and also got some good rank.<br /><br />
                     Also participate so many online Programming Contest. Still I solve 
                     problem in different online judges such as Codeforces, HackerRank,
                      Uri, Uva, etc, and learning new algorithms. My favorite languages 
                      are C, C++, JAVA, HTML, CSS, JS<br /><br />Besides, that I like to do 
                      some experiments with the coding skills to make some new project. 
                      Have done a few professional training courses from a different online
                       platform.</p>
                       <br></br>
                       <p>Regards,</p>
                       <br></br>
                       <p>Habibur Rahman<br></br>Phone: +8801997766489<br></br>
                       Email: mdhabiburrb@gmail.com</p>
             </Cell>
             <Cell className="abut_img" col={4}>
                 <img src={abut} alt=""></img>
             </Cell>
        </Grid>
    </div>
    )
  }
}

export default About;


