import React, { Component } from 'react';
import Nav from '../Nav'
import PhotoContainer from '../PhotoContainer'
import axios from 'axios'

class CreateContainer extends Component {
  constructor(){
    super()
    this.state = {
      house : {
        street: '',
        address: '',
        state: '',
        zipcode: '',
        year: '',
        sqft: '',
        productImage: ''
      },
      // selectedFile : null,
    }
  }

  handleInput = (e) => {
    // console.log('input', e);
    const updatedChange = {
      ...this.state.house
    }
    updatedChange[e.target.name] = e.target.value;
    // console.log('updatedChange', updatedChange);
    this.setState({
      house: updatedChange
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedHouse = {
      ...this.state.house
    }
    this.addHouse(updatedHouse)
    this.setState({
      house : {
        street: '',
        address: '',
        state: '',
        zipcode: '',
        year: '',
        sqft: '',
        productImage: ''
      }
    })
  }

  addHouse = async(updatedHouse) => {
    try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(updatedHouse),
          headers: {
            'Content-Type' : 'application/json',
            'Accept': 'application/json',
          }
        });
        console.log("response", response);

        if(!response.ok){
          throw Error(response.statusText)
        }
        console.log("3");
        // console.log('addreport=>', response);
        const parsedCreateHouse = await response.json();

        console.log('out....', parsedCreateHouse);
        // console.log(parsedCreateReport.data._id);
        // console.log('parsedCreateHouse ===>', parsedCreateHouse.data);
        console.log('>>>>');
        // localStorage.setItem('houseId', parsedCreateHouse.data._id)
        console.log('<<<<<<');
        const authorId = localStorage.getItem('userId')
        console.log('authorId.....??', authorId);
        localStorage.setItem('authorIdd', authorId)
        // localStorage.setItem('authorId', parsedCreateHouse.data.authorId)
        // localStorage.setItem('authorname', parsedCreateHouse.data.authorname)

        this.props.history.push('/home');

      } catch(err) {
        console.log('cannot make house');
      }
    }

    //
    // fileSelectHandler = (e) => {
    //   // console.log(e.target.files[0]);
    //   this.setState({
    //     selectedFile: e.target.files[0]
    //   })
    // }

    //
    // fileUploadHandler = async() => {
    //   // try{
    //     const data = new FormData()
    //     data.append('file', this.state.selectedFile);
    //     axios.post(`${process.env.REACT_APP_API}/api/v1/house`, data, {
    //     })
    //     .then(res => {
    //       console.log(res.statusText);
    //     })
    //
    //   // }catch(err){
    //     // console.log('file upload handlder fail');
    //   // }
    // }



  render(){
    // console.log('THIS IS PROPS', this.props);
    return(
      <div>
        <Nav />
        <div className="container mt-5">
          <div className="row">
            <div className="col-5 offset-1">
              <form onSubmit={this.handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="address">Address1:</label>
                    <input name="street" id="street" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)1330 Broadway" value={this.state.house.street} />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="Address2">Address2:</label>
                    <input name="address" id="address" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.address} placeholder="ex)#300" />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="state">State:</label>
                    <input name="state" id="state" type="text" className="form-control" placeholder="ex)CA" value={this.state.house.state} onChange={this.handleInput} />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="zipcode">Zipcode:</label>
                    <input name="zipcode" id="zipcode" type="text" className="form-control" placeholder="ex)94612" value={this.state.house.zipcode} onChange={this.handleInput} />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="year">Year:</label>
                    <input name="year" id="year" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.year} placeholder="ex)YYYY" />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="sqft">Sqft:</label>
                    <input name="sqft" id="sqft" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.sqft} placeholder="ex)960" />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="productImage">Photo:</label>
                    <input name="productImage" id="productImage" type="file" className="form-control" onChange={this.handleInput} value={this.state.house.productImage} />
                  </div>
              <div className="row offset-5">
                <input type="submit" className="btn btn-primary" />
              </div>
          </form>
        </div>
          </div>
        </div>
      </div>
    )
  }
}
export default CreateContainer
