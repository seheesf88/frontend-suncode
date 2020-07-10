import React, { Component } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';

import ShowHouseContainer from '../ShowHouseContainer';

import ClothesDrying from '../ElectrifyComponents/ClothesDrying';
import ElectricalPanel from '../ElectrifyComponents/ElectricalPanel';
import HotWater from '../ElectrifyComponents/HotWater';
import Weatherization from '../ElectrifyComponents/Weatherization';
import EnergyGeneration from '../ElectrifyComponents/EnergyGeneration';
import HeatingCooling from '../ElectrifyComponents/HeatingCooling';
import Cooking from '../ElectrifyComponents/Cooking';
import ElectricVehicle from '../ElectrifyComponents/ElectricVehicle';

import './Home.scss';



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


    //get my house
    getMyHouse = async() => {
      const userId = localStorage.getItem('userId');
      // const userId = localStorage.getItem('userId');
      console.log('what is u?????', userId);
      try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/house/`+ userId, {
          credentials: 'include'
        })

        // console.log('response is? ', response);
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




    // deleteHouse = async(id, e) => {
    //   // e.preventDefault();
    //   try {
    //     const deleteHouse = await fetch(`${process.env.REACT_APP_API}/api/v1/house/` + id, {
    //       method: 'DELETE',
    //       // credentials: 'include'
    //     })
    //
    //     // const parsedResponse = await deleteHouse.json();
    //
    //     this.setState({
    //       allHouses: this.state.allHouses.filter((house) => house._id !== id)
    //     })
    //   }catch(err){
    //     console.log(err)
    //   }
    // }



  render(){
    // let photoplace = {
    //   height: 200,
    //   width: 500
    // }

    return (
      <div className="">
        <Nav username={this.state.userinfo.username} email={this.state.userinfo.email} name={this.state.userinfo.name}/>
        <div className="">
          <h1>Electrify</h1>
        </div>
        <div className="">
          <Link><div style={{border : '1px solid'}}>ClothesDrying</div></Link>
          <Link><div style={{border : '1px solid'}}>ElectricalPanel</div></Link>
          <Link><div style={{border : '1px solid'}}>HotWater</div></Link>
          <Link><div style={{border : '1px solid'}}>Weatherization</div></Link>
          <Link><div style={{border : '1px solid'}}>EnergyGeneration</div></Link>
          <Link><div style={{border : '1px solid'}}>HeatingCooling</div></Link>
          <Link><div style={{border : '1px solid'}}>Cooking</div></Link>
          <Link><div style={{border : '1px solid'}}>ElectricVehicle</div></Link>
        </div>

      </div>
    )
  }
}

export default HomeContainer


  // <ShowHouseContainer deleteHouse={this.deleteHouse} />
