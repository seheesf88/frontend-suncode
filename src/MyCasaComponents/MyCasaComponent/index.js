// import React from 'react';
// import { Link } from 'react-router-dom';
// import Nav from '../../Nav';
//
// const MyCasaComponent = (props) => {
//
//     return(
//           <div>
//             <Nav />
//             <div>My Casa</div>
//             <div> See the status of your house energy assets and how they compare on quality, efficiency and age to new technologies.</div>
//             {?
//             <div></div>
//             :
//             <div></div>
//             }
//             <Link to="/mycasa/create">Add House</Link>
//           </div>
//         )
//
// }
//
//
// export default MyCasaComponent


import React, { Component } from 'react';

import Nav from './../../Nav';
// import ShowHouseComponent from '../ShowHouseComponent';
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
    console.log('what is this.house?->', this.state.allHouses);
    return(
      <div>
      <Nav />
      {
        this.state.house === undefined
      ?
      <div>
        <h2>please add...</h2>
        <Link to="/mycasa/create">Register my house</Link>
      </div>
      :
      <div>show me the list of house.</div>

      }
      </div>
    )
  }
}

export default withRouter(MyCasaComponent)
