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
    return (
      <div>
        <Nav />
        <div className="readfirst">
          <Link to="/welcome" className="readfirst">
            Read first
          </Link>
        </div>
      </div>
    )
  }
}
export default MainContainer
