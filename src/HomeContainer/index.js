import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Nav from '../Nav';
import MyHouseComponenet from '../MyHouseComponenet';
import PhotoComponent from '../PhotoComponent';


class HomeContainer extends Component {
  constructor(){
    super()
    this.state = {
      userinfo: {
        email:'',
        password: '',
        username:'',
        name: '',
      },
        house: [],
        photos: [],
        photo: '',
        authorId: '',
      }
    }

  componentDidMount(){
    this.getUserInfo();
    this.getMyHouse();
    this.getPhoto();
  }

  getUserInfo = async() =>{
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

    getMyHouse = async() => {
      try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house`, {
          credentials: 'include'
        })

        if(!response.ok){
          throw Error(response.statusText)
        }

        const responseParsed = await response.json();
        console.log('responseParsed', responseParsed);
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
        const deleteHouse = await fetch(`${process.env.REACT_APP_API}/api/v1/house/` + id, {
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



    getPhoto = async() => {
      console.log('here?');
      try {
          const response = await fetch(`${process.env.REACT_APP_API}/api/v1/photo`, {
              credentials: 'include'
          });
          console.log(response.ok);

          if (!response.ok) {
              throw Error(response.statusText);
          }

          const parsedPhoto = await response.json();


          this.setState({
              ...this.state.photos,
              photos: parsedPhoto.data,
          });
      } catch (err) {
          return err;
      }
  }




  render(){
    let photoplace = {
      height: 200,
      width: 500
    }

    return (
      <div>
        <Nav username={this.state.userinfo.username} email={this.state.userinfo.email} name={this.state.userinfo.name}/>
        <h1 className="text-center my-5">home</h1>
        <div className="container">
          <div className="row">
            <div className="col-3">
              <div className="mb-5"><span className="h2">Profile</span><span className="ml-3"><Link to={`/myaccount/${localStorage.getItem('userId')}/edit`}>Edit</Link></span></div>
                <div className="">
                  <div className="">Username : <span className="ml-2">{this.state.userinfo.username}</span></div>
                  <div className="">Email : <span className="ml-2">{this.state.userinfo.email}</span></div>
                </div>
            </div>
            <div className="col-8">
              <PhotoComponent allPhotos={this.state.photos} />
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default HomeContainer

// <div className="col-8">
//   <div className="text-center mb-5"><span className="h2">My house</span><span className="ml-3"><Link to={`/create`}>create</Link></span></div>
//   <MyHouseComponenet myHouse={this.state.house} deleteHouse={this.deleteHouse} />
// </div>
