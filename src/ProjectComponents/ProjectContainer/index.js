import React, { Component } from 'react';
import Nav from './../../Nav';
import { Link } from 'react-router-dom';
// import axios from 'axios'
// import Moment from 'react-moment';
// import './ProjectContainer.scss';

class ProjectContainer extends Component {
  constructor(){
    super()
    this.state = {
      roof: '',
      spheater:'',
      waheater:'',
      attic:'',
    }
  }

  componentDidMount(){
    this.getOneHouse();

  }

  getOneHouse = async() => {
    // const userId = window.location.pathname.split('/')[2];
    const userId = localStorage.getItem('userId')

    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house/${userId}`,  {
        credentials: 'include'
      })

      if(!response.ok){
        throw Error(response.statusText)
      }

      const houseParsed = await response.json();

      this.setState({
          house: houseParsed.data,
          // authorId: localStorage.getItem('authorId')
      })

    }catch(err){
      return err
    }
  }




  render(){

    return(

      <div>
        <div>My Casa</div>
        <div>Explore home energy improvements to increase comfort, efficiency, safety and health, and lower carbon footprint.</div>
        <div className="create_container">
          <div className="create_row">
            <div className="create_items"><Link to="/project/create">Home Details</Link></div>
            <div className="create_items"><Link to="/project/create/roof">Roof Details</Link></div>
            <div className="create_items"><Link to="/project/create/attic">Attic Insulation Details</Link></div>
          </div>
          <div className="create_row">
            <div className="create_items"><Link to="/project/create/waheater">Water Heater Details</Link></div>
            <div className="create_items"><Link to="/project/create/spheater">Primary Heater Details</Link></div>
            <div className="create_items"><Link to="">Utility Bills</Link></div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectContainer
