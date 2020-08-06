import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Nav from '../Nav';
import Footer from '../Footer';
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
          <Link to="/welcome" id="link">
            Read first >
          </Link>
        </div>
        <div className="session_container">
          <img className="col_one" src="./web/ph6.png"/>
          <div className="col_two">
            <div id="h1">Your Home Electrification Advisor</div>
            <div id="text">If you want to increase comfort and lower your carbon footprint, Electricasa is the leading app to guide you toward a better house with zero emissions.</div>
            <div id="btn"><Link to="/login" className="linkBtn">SIGN UP</Link></div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}
export default MainContainer
