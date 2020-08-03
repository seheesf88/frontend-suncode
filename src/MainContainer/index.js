import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import './Main.scss';

class MainContainer extends Component {
  constructor(){
    super()
    this.state = {

      }
    }


  render(){
    console.log(localStorage.getItem('userId'));
    return (
      <div>
        <Nav />
        <div className="readfirst">
          <Link to="/welcome" style={{textDecoration: 'none'}}>
            Read first
          </Link>
        </div>
        <div>This is main container</div>
      </div>
    )
  }
}
export default MainContainer
