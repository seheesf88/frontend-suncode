import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';


class Footer extends Component {
  constructor(){
    super()
    this.state = {

      }
    }


  render(){

    return (
      <div className="footer_container">
        <div>About Us</div>
        <div>Contact Us</div>
        <div>Terms of Use</div>
      </div>
    )
  }
}
export default Footer
