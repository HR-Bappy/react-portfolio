import React, { Component } from 'react';
import './App.css';
import { Layout,  Navigation, Drawer, Content } from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
    <Layout>
        <Header></Header>
        <Content>
            <div className="page-content" />
            <Main/>
        </Content>
    </Layout>
</div>

    );
  }
}

export default App;