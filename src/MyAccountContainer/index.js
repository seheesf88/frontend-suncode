import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

import Nav from '../Nav';
import './MyAccount.css';


class MyAccountContainer extends Component{
  constructor(){
    super();
    this.state = {
      userInfo: {},
    }
  }

  // componentDidMount(){
  //   // this.editMyinfo()
  // };

  handleEditFormInput = (e) => {
    this.setState({
      userInfo: {
        ...this.state.userInfo,
        [e.target.name]: e.target.value
      }
    })
  }

  editMyinfo = async(e) => {
    e.preventDefault();
    const userId = localStorage.getItem('userId')
    console.log('????', userId);

    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/${userId}`, {
        method: 'PUT',
        credentials: 'include',
        body: JSON.stringify(this.state.userInfo),
        headers: {
          'Content-Type' : 'application/json'
        }
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      this.props.history.push('/home')

    }catch(err){
      return err
    }
  }


  render(){
    return(
      <div>
        <Nav />
        <div className="editmyinfo">
          <h2>Edit Profile</h2>
          <form onSubmit={this.editMyinfo} className="form">
            <div>Username: <input className="form-control" name="username" value={this.state.userInfo.username} onChange={this.handleEditFormInput}/></div>
            <div>Email:  <input className="form-control" name="email" value={this.state.userInfo.email} onChange={this.handleEditFormInput}/></div>
            <div>Password: <input className="form-control" name="password" value={this.state.userInfo.password} onChange={this.handleEditFormInput}/></div>
            <div>Name: <input className="form-control" name="name" value={this.state.userInfo.name} onChange={this.handleEditFormInput}/></div>
            <div className=""><button className="editBtn" type="submit">Edit</button></div>
          </form>
        </div>
      </div>
    )
  }
}

export default withRouter(MyAccountContainer);
