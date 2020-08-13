import React, { Component } from 'react';
import Nav from './../../Nav';
import './MyCasa.scss';
import { Link, withRouter } from 'react-router-dom';

class MyCasaComponent extends Component {
  constructor(){
    super()
    this.state = {
      allHouses: [],
      house: '',

    }
  }

  componentDidMount(){
    this.getOneHouse()
    this.getAllHouses();
  }



  getAllHouses = async() => {
      try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/allHouses`, {
          credentials: 'include'
        })


        if(!response.ok){
          throw Error(response.statusText)
        }

        const responseParsed = await response.json();

        this.setState({
          allHouses : responseParsed.data
        })

      }catch(err){
        console.log('fetching getMyhouse fail');
      }
    }

  getOneHouse = async() => {
    const userId = window.location.pathname.split('/')[2];

    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house/${userId}`,  {
        credentials: 'include'
      })
          console.log('dfdfd', response);
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

      this.props.history.push('/mycasa/start')

    }catch(err){
      console.log(err)
    }
  }


  render(){
    console.log('what is this.house?->', this.state.allHouses);
    return(
      <div>
        <Nav />
        {
          // this.state.house === undefined
          true
          ?
          <div className="myCasa_container">
            <div className="h2">My Casa</div>
            <div className="p1">See the status of your house energy assets and how they compare on quality, efficiency and age to new technologies.</div>
            <div className="center text">You did not add any house information</div>
            <div className="center"><Link to="/mycasa/start" className="submitBtn" style={{width: '490px'}}>Add House</Link></div>
         </div>
      :
      <div>show me the list of house.</div>

      }
      </div>
    )
  }
}

export default withRouter(MyCasaComponent)
