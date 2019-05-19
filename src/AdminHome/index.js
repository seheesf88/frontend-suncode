import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Nav from '../Nav';
import AdminHouseList from '../AdminHouseList';


class AdminHome extends Component {
  constructor(){
    super()
    this.state = {
      userinfo: {
        email:'',
        password: '',
        username:'',
      },
        house: [],
      }
    }

  componentDidMount(){
    this.getUserInfo()
    this.getMyHouse()
  }

  getUserInfo = async() =>{
      const userId = localStorage.getItem('userId');
      console.log(userId);
      try{
        const response = await fetch(`http://localhost:9000/api/v1/users/` + userId, {
          credentials: 'include'
        })

        if(!response.ok){
          throw Error(response.statusText)
        }

        console.log('??????', response);
        const parsedResponse = await response.json();

        this.setState({
          userinfo: parsedResponse.data
        })

      }catch(err){
        console.log('getuserinfo func fail', err);
      }
  }

    getMyHouse = async() => {
      try{
        const response = await fetch(`http://localhost:9000/api/v1/house`, {
          credentials: 'include'
        })

        if(!response.ok){
          throw Error(response.statusText)
        }

        const responseParsed = await response.json();

        this.setState({
          house: responseParsed.data
        })
      }catch(err){
        console.log('fetching getmyreport is fail');
      }
    }

    deleteHouse = async(id, e) => {
      e.preventDefault();
      try {
        const deleteHouse = await fetch(`http://localhost:9000/api/v1/house/` + id, {
          method: 'DELETE',
          credentials: 'include'
        })


        const parsedResponse = await deleteHouse.json();

        this.setState({
          house: this.state.house.filter((house) => house._id !== id)
        })
      }catch(err){
        console.log(err)
      }
    }



  render(){
    return (
      <div>
        <Nav />
        <h1 className="text-center my-5">Admin home</h1>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="mb-5"><span className="h2">Profile</span><span className="ml-3"><Link to={`/myaccount/${localStorage.getItem('userId')}/edit`}>Edit</Link></span></div>
                <div className="">
                  <div className="">Username : <span className="ml-2">{this.state.userinfo.username}</span></div>
                  <div className="">Name : <span className="ml-2">{this.state.userinfo.name}</span></div>
                  <div className="">Email : <span className="ml-2">{this.state.userinfo.email}</span></div>
                </div>
            </div>
            <div className="col-8">
              <div className="text-center mb-5"><span className="h2">House List</span></div>
              <AdminHouseList myHouse={this.state.house} deleteHouse={this.deleteHouse} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default AdminHome


// <span className="ml-3"><Link to={`/create`}>create</Link></span>
