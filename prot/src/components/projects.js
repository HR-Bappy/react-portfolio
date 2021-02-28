import React, { Component } from 'react';
import { Tabs, Tab, Grid, Cell, Card, CardTitle, CardText, CardActions, Button, CardMenu, IconButton } from 'react-mdl';
import rimg from '../images/react-1.svg'

class Projects extends Component {
  constructor(props) {
    super(props);
    this.state = { activeTab: 0 };
  }

  toggleCategories() {

    if(this.state.activeTab === 0){
      return(

        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="react-img" style={{color: '#fff', height: '176px'}} >React Project #1</CardTitle>
            <CardText>
              Simple reactJS website
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/hr-tech-react"><Button colored>GitHub</Button></a>
              <a href="https://hr-bappy.github.io/hr-tech-react/"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="react-img" style={{color: '#fff', height: '176px'}} >React Project #2</CardTitle>
            <CardText>
              Simple reactJS website
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/react-website-3"><Button colored>GitHub</Button></a>
              <a href="https://hr-bappy.github.io/react-website-3/"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="react-img" style={{color: '#fff', height: '176px'}} >React Project #3</CardTitle>
            <CardText>
              Find Recipe 
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/react-recipe-app-using-api"><Button colored>GitHub</Button></a>
              <a href="https://react-search-recipes.herokuapp.com/"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
           {/* Project 4 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="react-img" style={{color: '#fff', height: '176px'}} >React Project #4</CardTitle>
            <CardText>
              FootWear
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/react-footwear"><Button colored>GitHub</Button></a>
              <a href="https://react-footwear.herokuapp.com/"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
        </Grid>

      )
    } else if(this.state.activeTab === 1) {
      return (
        <Grid col={12} col className="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="java_school" style={{color: '#fff', height: '176px'}} >javaFX Project #1</CardTitle>
            <CardText>
              School Management System
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/school-management-system"><Button colored>GitHub</Button></a>
              
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="java_school" style={{color: '#fff', height: '176px'}} >javaFX Project #2</CardTitle>
            <CardText>
            Electricity Bill Management System
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/Electricity-Bill-Management-System"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>

          {/* Project 3 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="java_school" style={{color: '#fff', height: '176px'}} >javaFX Project #3</CardTitle>
            <CardText>
            Procurement Management System
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/Procurement-Management-Systemm"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>

          {/* <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="java_school" style={{color: '#fff', height: '176px'}} >javaFX Project #4</CardTitle>
            <CardText>
              Attendance Management System
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/react-website-3"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card> */}
        </Grid>

      )
    } else if(this.state.activeTab === 2) {
      return (
        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="nodejs_pro txt_blck" style={{color: '#fff', height: '176px'}} >NodeJS Project #1</CardTitle>
            <CardText>
            Weather App
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/weather-app"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="nodejs_pro txt_blck" style={{color: '#fff', height: '176px'}} >NodeJS Project #2</CardTitle>
            <CardText>
            WebRTC-Text Chat App
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/WebRTC-ChatApp"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
           {/* Project 3 */}
           <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="nodejs_pro txt_blck" style={{color: '#fff', height: '176px'}} >NodeJS Project #3</CardTitle>
            <CardText>
            WebRTC-Video and Text Chat App
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/video-chat-app"><Button colored>GitHub</Button></a>
              <a href="https://video-chat-app-hrbappy.herokuapp.com/"><Button colored>Live Demo</Button></a>
            </CardActions>
          </Card>
        </Grid>
      )
    } else if(this.state.activeTab === 3) {
      return (
        <Grid col={12} colclassName="projects-grid">
          {/* Project 1 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="cpp txt_blck" style={{color: '#fff', height: '176px'}} >CPP Project #1</CardTitle>
            <CardText>
            Cloth Shop Management
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/Cloth-Shop-Management"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>

          {/* Project 2 */}
          <Card shadow={5} style={{minWidth: '450', margin: 'auto',marginBottom:'30px'}}>
            <CardTitle className="cpp txt_blck" style={{color: '#fff', height: '176px'}} >CPP Project #2</CardTitle>
            <CardText>
            Library Management System
            </CardText>
            <CardActions border>
              <a href="https://github.com/HR-Bappy/Library-Management-System"><Button colored>GitHub</Button></a>
            </CardActions>
          </Card>
        </Grid>
      )
    }

  }



  render() {
    return(
      <div className="projects">
        <Tabs activeTab={this.state.activeTab} onChange={(tabId) => this.setState({ activeTab: tabId })} ripple>
          <Tab>React</Tab>
          <Tab>JAVA</Tab>
          <Tab>NodeJS</Tab>
          <Tab>CPP</Tab>
        </Tabs>


          <Grid>
            <Cell col={12}>
              <div className="content">{this.toggleCategories()}</div>
            </Cell>
          </Grid>


      </div>
    )
  }
}

export default Projects;