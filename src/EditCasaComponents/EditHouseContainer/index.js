import React, { Component } from 'react';
import Nav from './../../Nav';
// import EditHouseComponent from '../EditHouseComponent';
import './EditHouse.scss';


class EditHouseContainer extends Component {
  constructor(){
    super()

    this.state = {
      house: '',
    }
  }

  componentDidMount(){
    this.getHouse()
  };

//get one house
  getHouse = async() => {
    // const houseId = window.location.pathname.split('/')[1];
    // console.log('what is houseId', houseId);
    let userId = localStorage.getItem('userId');
    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house/${userId}`, {
        credentials: 'include',
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      const houseParsed = await response.json();
      console.log('what is houseParsed =====>', houseParsed.data);

      this.setState({
        house: houseParsed.data
      })

      }catch(err){
      return err
    }
  };


  handleEditFormInput = (e) => {
    console.log(e.target.name, e.target.value);
    this.setState({
      house: {
        ...this.state.house,
        [e.target.name]:  e.target.value
      }
    })
  }

//edit house info
  updateHouse = async (e) => {
    e.preventDefault();
    // const houseId = window.location.pathname.split('/')[1];

    let userId = localStorage.getItem('userId');
    try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house/${userId}`, {
          method: 'PUT',
          credentials: 'include',
          body: JSON.stringify(this.state.house),
          headers: {
            'Content-Type' : 'application/json'
          }
        });
        console.log(response);
        if(!response.ok){
          throw Error(response.statusText)
        }



        // if(userId === '5d7e9d844eb54d001728cf31') {
        // // if(username === 'admin') {
        //     this.props.history.push('/adminHome')
        // }else {
            this.props.history.push('/mycasa/start' );
        // }


      } catch(err) {
        return err
      }
    }

  render(){

    return(
      <div>
        <Nav />

      <div>
        <h1>Edit House</h1>
          <div className="photoFrames">
            <img height={100} width={100} src={`${process.env.REACT_APP_API}/` + this.state.house.houseImg} />

            <div><img className="frames" id="photoOne" /></div>
              <input name="photoOne" className="hide" id="input-photoOne" onChange={this.handleEditFormInput} type="file"/>



          </div>
          <form onSubmit={this.updateHouse}>
              <div className="form-group">
                <label htmlFor="address">ADDRESS</label>
                  <input name="address" id="address" type="text" className="form-control" onChange={this.handleEditFormInput} value={this.state.house.address} />
              </div>
              <div className="form-group">
                <label htmlFor="city">CITY</label>
                  <input name="city" id="city" type="text" className="form-control" onChange={this.handleEditFormInput} value={this.state.house.city} />
              </div>
              <div className="form-group">
                <label htmlFor="state">STATE</label>
                  <input name="state" id="state" type="text" className="form-control" onChange={this.handleEditFormInput} value={this.state.house.state} />
              </div>
              <div className="form-group">
                <label htmlFor="zipcode">ZIPCODE</label>
                  <input name="zipcode" id="zipcode" type="text" className="form-control" onChange={this.handleEditFormInput} value={this.state.house.zipcode} />
              </div>
              <div className="form-group">
                <label htmlFor="houseYear">YEAR BUILT</label>
                  <input name="houseYear" id="houseYear" type="text" className="form-control" onChange={this.handleEditFormInput} value={this.state.house.houseYear} />
              </div>
              <div className="form-group">
                <label htmlFor="houseSqft">SQUARE FEET</label>
                  <input name="houseSqft" id="houseSqft" type="text" className="form-control" onChange={this.handleEditFormInput} value={this.state.house.houseSqft}  />
              </div>
              <button type="submit">Edit/update</button>
            </form>
            </div>
          </div>
    )
  }
}
export default EditHouseContainer

        // <EditHouseComponent gethouse={this.gethouse} handleEditFormInput={this.handleEditFormInput} house={this.state.house} updateHouse={this.updateHouse} />
