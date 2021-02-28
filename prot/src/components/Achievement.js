import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';

class Achievement extends Component {
  render() {
    return(
    <div>
        <Grid className="ach_hero">
        <Cell  col={12}>
            <h1>EXTRA CURRICULAR ACTIVITIES </h1>
        </Cell>
        </Grid>
        <Grid className="ach_hero-2">
        <Cell  col={12}>
            <p><br />Participate more than 12 Programming Contest & Got Certificate.<br /><br />

               Member of 1st Runner up team in IUBAT Intra University Junior Ramadan Programming Contest-18.<br /><br />

                Member of 1st Runner-Up team in IUBAT Intra University Programming Contest-19<br /><br />

                Member of 4th Runner-Up team in IUT ICT Fest - 2017<br /><br />

                Solved more than 1000 problems in different online judge<br /><br />

                Attend 2 times NCPC programming contest in 2018 and 2019<br /><br />

                Attend Google Hash Code Programming Contest in 2020<br /><br /></p>
        </Cell>
        </Grid>
        <Grid className="cards" col={12}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="im1" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Contest Time
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="im2" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            1st Runner Up of Ramadan Contest in 2019
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="im3" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Contest Time
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="im4" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            1st Runner Up of IUPC in 2019
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="im5" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            1st Runner Up of IUPC
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="im6" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Before the Contest
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="im7" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Contest Time
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="im8" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            IUT ICT Fest - 2017
            </CardActions>
          </Card>
        </Grid>
        <Grid className="WORKSHOP">
        <Cell  col={12}>
            <h1>WORKSHOP </h1>
            
        </Cell>
        </Grid>

        <br></br>
        <Grid className="cards" col={12}>
        <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="i1" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Battle_of_Intellect IUPC 2017
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="i2" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Football Match of Programmers
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="i3" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            JU_CSE_FEST_2019 Teams of IUBAT
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="i4" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            After wining 1st game of ICFL 2018
            </CardActions>
          </Card>

          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="i5" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Ready to go SUST IT Fest
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="i6" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            ICFL 2018 Team for 1710 batch
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="i7" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Awarded by VC Sir
            </CardActions>
          </Card>
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="i8" style={{color: '#fff', height: '250px'}} ></CardTitle>
            
            <CardActions border>
            Battle_of_Intellect IUPC 2019
            </CardActions>
          </Card>
        </Grid>
    </div>
    )
  }
}

export default Achievement;