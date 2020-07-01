import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {

      }
    }

  render(){
    return (
      <div>
      <div className="mt-5 ml-5 container">
        <div className="row">
          <div>
            <img src="Logo.png" className="logo"/>
            <img src="electricasa.png" className="logo_text"/>
          </div>
          <div className="electriCasa ml-2">ElectriCasa</div>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-4 offset-4">
             <Link to="/quiz">Find out how</Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default MainContainer
