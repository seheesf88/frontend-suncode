import React, { Component } from 'react';

import Nav from '../Nav';
import ShowHouseComponent from '../ShowHouseComponent';
// import ShowReport from '../ShowReport'
import { Link, withRouter } from 'react-router-dom';

class ShowHouseContainer extends Component {
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
        console.log('all houses responseParsed', responseParsed.data);
        this.setState({
          allHouses : responseParsed.data
        })

      }catch(err){
        console.log('fetching getMyhouse fail');
      }
    }

  getOneHouse = async() => {
    const userId = window.location.pathname.split('/')[2];
    console.log('&&&&&&',userId);
    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house/${userId}`,  {
        credentials: 'include'
      })
          console.log('dfdfd', response);
      if(!response.ok){
        throw Error(response.statusText)
      }

      const houseParsed = await response.json();
      console.log('just one house =>', houseParsed)
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

      this.props.history.push('/create')

    }catch(err){
      console.log(err)
    }
  }


  render(){
    return(
      <div>

      </div>
    )
  }
}

export default withRouter(ShowHouseContainer)


  // <ShowHouseComponent showHouse={this.state.house}/>
