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
      house: '',
      utility: '',
    }
  }

  componentDidMount(){
    // this.getOneHouse();
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
    console.log(this.state.roof.roofImg);
    return(
      <div>
        <Nav />
        <div id="title">My Casa</div>
        <div id="subtitle">Explore home energy improvements to increase comfort, efficiency, safety and health, and lower carbon footprint.</div>
        <div className="create_container">
          <div className="create_row">
            <div className="create_items">
              <Link to="/mycasa/create/home">

              { this.state.house.houseImg !== undefined
              ?
              <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.house.houseImg } />
              :
              <div className="noposting"></div>
              }
              </Link>
              <div className="tag">Home Details</div>
            </div>
            <div className="create_items">
              <Link className="link" to="/mycasa/create/roof">
                { this.state.roof.roofImg !== undefined
                ?
                <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.roof.roofImg } />
                :
                <div className="noposting"></div>
                }
              </Link>
              <div className="tag">Roof Details</div>
            </div>
            <div className="create_items">
              <Link to="/mycasa/create/attic">
              { this.state.attic.atticImg !== undefined
              ?
              <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.house.atticImg } />
              :
              <div className="noposting"></div>
              }
              </Link>
              <div className="tag">Attic Insulation Details</div>
              </div>
          </div>
          <div className="create_row">
            <div className="create_items">
              <Link to="/mycasa/create/waheater">
                { this.state.waheater.waheaterImg !== undefined
                ?
                <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.waheater.waheaterImg } />
                :
                <div className="noposting"></div>
                }
              </Link>
              <div className="tag">Water Heater Details</div>
            </div>
            <div className="create_items">
              <Link to="/mycasa/create/spheater">
                { this.state.spheater.spheaterImg !== undefined || null
                ?
                <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.spheater.spheaterImg } />
                :
                <div className="noposting"></div>
                }
              </Link>
              <div className="tag">Primary Heater Details</div>
            </div>
            <div className="create_items">
              <Link to="/mycasa/create/utility">
                { this.state.utility.utilityImg !== undefined || null
                ?
                <img className="img" src={`${process.env.REACT_APP_API}/` + this.state.utility.utilityImg } />
                :
                <div className="noposting"></div>
                }
              </Link>
              <div className="tag">Utility Bills</div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default ProjectContainer

//
