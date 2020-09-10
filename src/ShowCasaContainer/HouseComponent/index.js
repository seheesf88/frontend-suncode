import React, { Component } from 'react';
import Nav from './../../Nav';
import { Link, withRouter } from 'react-router-dom';

class HouseComponent extends Component {
  constructor(){
    super()
    this.state = {
      house: '',
    }
  }

  componentDidMount(){
    this.getOneHouse()
  }

  getOneHouse = async() => {
    const userId = localStorage.getItem('userId');

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

      // this.props.history.push('/create')

    }catch(err){
      console.log(err)
    }
  }


  render(){
    return(
      <div>
        <div>Show house</div>
          <div>{this.state.house.address}</div>
          <div>{this.state.house.city}</div>
          <div>{this.state.house.state}</div>
          <div>{this.state.house.zipcode}</div>
          <div>{this.state.house.houseYear}</div>
          <div>{this.state.house.houseSqft}</div>
      </div>
    )
  }
}

export default withRouter(HouseComponent)

//<div><img src={`${process.env.REACT_APP_API}/` + this.state.house.houseImg} /></div>
