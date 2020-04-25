import React, { Component } from 'react';
// import { Link, withRouter } from 'react-router-dom';
import Nav from '../Nav';



class ResourcesContainer extends Component {
  constructor(){
    super()
    this.state = {
    }
  }


  render(){
    return (
      <div className="Resources">
        <Nav />
        <h1>Resource page..</h1>
      </div>
    )
  }
}

export default ResourcesContainer
