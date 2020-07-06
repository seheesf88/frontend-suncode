import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav'

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {

      }
    }

  render(){
    return (
      <div>
      <Nav />
      <div className="container">
        <div className="row">
          <div className="col-3 mt-3">
            <span className="offset-1 mr-2"><img src="Logo.png" className="logo"/></span>
            <span><img src="electricasa.png" className="logo_text"/></span>
          </div>
        </div>
      </div>
        <div className="row">
          <div className="container">
            <div className="row">
              <div className="col-4">
               <Link to="/welcome">Read first</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MainContainer
