import React, { Component } from 'react';
import Nav from './../../Nav';
import { Link } from 'react-router-dom';
// import axios from 'axios'
// import Moment from 'react-moment';
import './ProjectContainer.scss';

class ProjectContainer extends Component {
  constructor(){
    super()
    this.state = {
      roof: '',
      spheater:'',
      waheater:'',
      attic:'',
      house: ''
    }
  }

  componentDidMount(){
    this.getOneHouse();
    this.getOneRoof();

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

  getOneRoof = async() => {
    // const userId = window.location.pathname.split('/')[2];
    const userId = localStorage.getItem('userId')

    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/roof/${userId}`,  {
        credentials: 'include'
      })

      if(!response.ok){
        throw Error(response.statusText)
      }

      const houseParsed = await response.json();

      this.setState({
          roof: houseParsed.data,
          // authorId: localStorage.getItem('authorId')
      })

    }catch(err){
      return err
    }
  }




  render(){
    console.log(this.state.house.houseImg === undefined);
    return(
      <div>
        <Nav />
        <div id="title">My Casa</div>
        <div id="subtitle">Explore home energy improvements to increase comfort, efficiency, safety and health, and lower carbon footprint.</div>
        <div className="create_container">
          <div className="create_row">
            <div className="create_items">
              <Link to="/project/create">

              { this.state.house.houseImg === undefined
              ?
              <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.house.houseImg } />
              :
              <div className="noposting"></div>
              }
              </Link>
              <div className="tag">Home Details</div>
            </div>
            <div className="create_items">
              <Link className="link" to="/project/create/roof">
                { this.state.roof.roofImg === undefined
                ?
                <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.roof.roofImg } />
                :
                <div className="noposting"></div>
                }
              </Link>
              <div className="tag">Roof Details</div>
            </div>
            <div className="create_items">
              <Link to="/project/create/attic">
              { this.state.house.houseImg === undefined
              ?
              <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.house.houseImg } />
              :
              <div className="noposting"></div>
              }
              </Link>
              <div className="tag">Attic Insulation Details</div>
              </div>
          </div>
          <div className="create_row">
            <div className="create_items">
              <Link to="/project/create/waheater">
              </Link>
              <div className="tag">Water Heater Details</div>
            </div>
            <div className="create_items"><Link to="/project/create/spheater">Primary Heater Details</Link></div>
            <div className="create_items"><Link to="">Utility Bills</Link></div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectContainer

//
