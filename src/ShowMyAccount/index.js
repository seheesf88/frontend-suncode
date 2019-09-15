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
        username:'',
        name: '',
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
    console.log(this.state.userinfo.username);
    return(
      <div>
        <Nav />
          <div className="myaccount">
            <h2>My Account</h2>
            <div><Link to={`/myaccount/${localStorage.getItem('userId')}/edit`}>Edit</Link></div>
          </div>
            <div className="myaccout-show">
              <div className="myaccount-input">
                <span>Username : </span>
                <span>{this.state.userinfo.username}</span>
              </div>
              <div className="myaccount-input">
                <span>Email : </span>
                <span>{this.state.userinfo.email}</span>
              </div>
              <div className="myaccount-input">
                <span>Name : </span>
                <span>{this.state.userinfo.name}</span>
              </div>
            </div>
      </div>
    )
  }
}

export default withRouter(ShowMyAccount)
