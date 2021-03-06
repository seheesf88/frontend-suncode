import React, { Component } from 'react';
import Nav from '../Nav';
import { Link } from 'react-router-dom';
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
      }
    }
  }

  componentDidMount(){
    // this.getUserInfo();
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



  render(){
    return (
      <div>
        <Nav />
        <div className="home_container">
          <div className="title">Electrify</div>
          <div className="subtitle">Explore home energy improvements to increase comfort, efficiency, safety and health, and lower carbon footprint</div>
          <div className="electri_container">
            <div className="electri_row">
              <Link to="/home/weatherization">
                <div className="electri_box">
                  <div><img src="./web/Weatherization_web.png" /></div>
                  <div className="electri_items">Weatherization</div>
                </div>
              </Link>
              <Link to="/home/hotwater">
                <div className="electri_box">
                  <div><img src="./web/HotWater_web.png"/></div>
                  <div className="electri_items">Hot Water</div>
                </div>
              </Link>
              <Link to="/home/heatingcooling">
                <div className="electri_box">
                  <div><img src="./web/HeatingCooling_web.png" /></div>
                  <div className="electri_items">Heating Cooling</div>
                </div>
              </Link>
              <Link to="/home/cooking">
                <div className="electri_box">
                  <div><img src="./web/Cooking_web.png"/></div>
                  <div className="electri_items">Cooking</div>
                </div>
              </Link>
            </div>
            <div className="electri_row">
              <Link to="/home/clothesdrying">
                <div className="electri_box">
                  <div><img src="./web/ClothesDrying_web.png" /></div>
                  <div className="electri_items">Clothes Drying</div>
                </div>
              </Link>
              <Link to="/home/energygeneration">
                <div className="electri_box">
                  <div><img src="./web/EnergyGeneration_web.png"/></div>
                  <div className="electri_items">Energy Generation</div>
                </div>
              </Link>

              <Link to="/home/electricalpanel">
                <div className="electri_box">
                  <div><img src="./web/ElectricalPanel_web.png"/></div>
                  <div className="electri_items">Electrical Panel</div>
                </div>
              </Link>
              <Link to="/home/electrivehicle">
                <div className="electri_box">
                  <div><img src="./web/ElectricVehicle_web.png"/></div>
                  <div className="electri_items">Electric Vehicle</div>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HomeContainer
