import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

import Nav from '../Nav';
import MyHouseComponenet from '../MyHouseComponenet';
// import PhotoComponent from '../PhotoComponent';
import CreateContainer from '../CreateContainer';
import './Home.css';



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
      house: {
        // house: [],
        // photos: [],
        // photo: '',
        // authorId: '',
        street: '',
        address: '',
        state: '',
        zipcode: '',
        year: '',
        sqft: '',
        userId: '',
      },

      myHouses: [],
      allHouses: []
    }
  }

  componentDidMount(){
    this.getUserInfo();
    this.getMyHouse();
    this.getAllHouses();
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


  getAllHouses = async() => {
    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/allHouses`, {
        credentials: 'include'
      })

      console.log('response is? ', response);
      if(!response.ok){
        throw Error(response.statusText)
      }

      const responseParsed = await response.json();
      console.log('all houses responseParsed', responseParsed.data);
      this.setState({
        allHouses : responseParsed.data
      })

    }catch(err){
      console.log('fetching getMyhouse fail');
    }
  }


    //
    // //get my house
    // getMyHouse = async() => {
    //   const userId = localStorage.getItem('userId');
    //   try{
    //     const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house/` + userId, {
    //       credentials: 'include'
    //     })
    //
    //     console.log('response is? ', response);
    //     if(!response.ok){
    //       throw Error(response.statusText)
    //     }
    //
    //     const responseParsed = await response.json();
    //     console.log('responseParsed', responseParsed.data);
    //     this.setState({
    //       myHouses : responseParsed.data
    //     })
    //
    //   }catch(err){
    //     console.log('fetching getMyhouse fail');
    //   }
    // }


    //get my house
    getMyHouse = async() => {
      const userId = localStorage.getItem('userId');
      try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/house`, {
          credentials: 'include'
        })

        console.log('response is? ', response);
        if(!response.ok){
          throw Error(response.statusText)
        }

        const responseParsed = await response.json();
        console.log('responseParsed', responseParsed.data);
        this.setState({
          myHouses : responseParsed.data
        })

      }catch(err){
        console.log('fetching getMyhouse fail');
      }
    }




    deleteHouse = async(id, e) => {
      // e.preventDefault();
      try {
        const deleteHouse = await fetch(`${process.env.REACT_APP_API}/api/v1/house/` + id, {
          method: 'DELETE',
          // credentials: 'include'
        })


        // const parsedResponse = await deleteHouse.json();

        this.setState({
          allHouses: this.state.allHouses.filter((house) => house._id !== id)
        })
      }catch(err){
        console.log(err)
      }
    }


  //
  //   getPhoto = async() => {
  //     console.log('here?');
  //     try {
  //         const response = await fetch(`${process.env.REACT_APP_API}/api/v1/photo`, {
  //             credentials: 'include'
  //         });
  //         console.log(response.ok);
  //
  //         if (!response.ok) {
  //             throw Error(response.statusText);
  //         }
  //
  //         const parsedPhoto = await response.json();
  //
  //
  //         this.setState({
  //             ...this.state.photos,
  //             photos: parsedPhoto.data,
  //         });
  //     } catch (err) {
  //         return err;
  //     }
  // }
  //


  render(){
    let photoplace = {
      height: 200,
      width: 500
    }

    return (
      <div className="homePage">
        <Nav username={this.state.userinfo.username} email={this.state.userinfo.email} name={this.state.userinfo.name}/>
        <div className="home">
            <div className="userinfo">
              <div className="userMessage">
              Hi,
              <div className="">{this.state.userinfo.name}(username)</div>
              </div>
            </div>
            <div className="houses">
              <div className="house">
                <MyHouseComponenet allHouses={this.state.allHouses} deleteHouse={this.deleteHouse} />
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
// <MyHouseComponenet myHouse={this.state.myHouses} deleteHouse={this.deleteHouse} />



// <div>
//   <Nav username={this.state.userinfo.username} email={this.state.userinfo.email} name={this.state.userinfo.name}/>
//   <div className="container pb-5 mb-5">
//     <div className="row">
//       <div className="col-2">
//         <p className="message mt-5">
//           Hi,
//           <div className="">{this.state.userinfo.name}</div>
//         </p>
//       </div>
//       <div className="col-10">
//         <MyHouseComponenet allHouses={this.state.allHouses} deleteHouse={this.deleteHouse} />
//       </div>
//     </div>
//   </div>
// </div>
