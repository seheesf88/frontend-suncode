import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// import Nav from '../Nav';
// import MyHouseComponenet from '../MyHouseComponenet';


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
          <div><img src="Logo_ElectriCasa-05.png" className="logo"/></div>
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
