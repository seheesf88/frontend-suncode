import React, { Component } from 'react';

import Nav from '../Nav';
import ShowHouseComponent from '../ShowHouseComponent';
// import ShowReport from '../ShowReport'

class ShowHouseContainer extends Component {
  constructor(){
    super()
    this.state = {
      house: {},
      authorId: ''
    }
  }

  componentDidMount(){
    this.getOneHouse()
  }

  getOneHouse = async() => {
    const houseId = window.location.pathname.split('/')[1];
    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house/${houseId}`,  {
        credentials: 'include'
      })

      if(!response.ok){
        throw Error(response.statusText)
      }

      const houseParsed = await response.json();
      // console.log(houseParsed.data)
      this.setState({
          house: houseParsed.data,
          authorId: localStorage.getItem('authorId')
      })

    }catch(err){
      return err
    }
  }

  render(){
    console.log(this.state.house)
    return(
      <div>

        <Nav />
        <ShowHouseComponent house={this.state.house}/>


      </div>
    )
  }
}

export default ShowHouseContainer
