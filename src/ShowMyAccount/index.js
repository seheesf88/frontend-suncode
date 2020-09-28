import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import Nav from '../Nav'
import './ShowMyAccount.css';



class ShowMyAccount extends Component{
  constructor(){
    super()
    this.state = {
      userinfo: {
        email:'',
        password: '',
        name: '',
        phNumber: '',
        emailNotice: ''
      },
    }
  }

  componentDidMount(){
    this.getUserInfo();
  }

  getUserInfo = async() => {
      const userId = localStorage.getItem('userId');
      console.log(userId);
      try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/` + userId, {
          credentials: 'include'
        })

        if(!response.ok){
          throw Error(response.statusText)
        }


        const parsedResponse = await response.json();

        this.setState({
          userinfo: parsedResponse.data
        })

      }catch(err){
        console.log('getuserinfo func fail', err);
      }
  }


  render(){
    console.log('--->',typeof(this.state.userinfo.emailNotice));
    return(
      <div>
        <Nav />
        <div className="myAccount_container">
            <h2>Account</h2>
          </div>

              <div className="myAccount_items">
                <span>Personal Information : </span>
                <span>{this.state.userinfo.firstName}</span>
                <span> {this.state.userinfo.lastName}</span>
              </div>
              <div className="myAccount_items">
                <span>Email : </span>
                <span>{this.state.userinfo.email}</span>
              </div>
              <div className="myAccount_items">
                <span>Phone Number : </span>
                <span>{this.state.userinfo.phNumber}</span>
              </div>
              <div className="">
                <span>Email Notification: </span>
                <span>{this.state.userinfo.emailNotice === 'on' ?
                <span>ON</span>
                :
                <span>OFF</span>
              }</span>
              </div>
          <div><Link to={`/myaccount/${localStorage.getItem('userId')}/edit`}>Edit</Link></div>

      </div>
    )
  }
}

export default withRouter(ShowMyAccount)
