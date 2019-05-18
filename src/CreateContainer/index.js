import React, { Component } from 'react';
import Nav from '../Nav'

class CreateContainer extends Component {
  constructor(){
    super()
    this.state = {
      house : {
        address : '',
        address2 : '',
        state: '',
        zipcode: '',
        year: '',
        sqft: '',
        memo: '',
      },
    }
  }

  handleInput = (e) => {
    const updatedChange = {
      ...this.state.house
    }
    updatedChange[e.target.name] = e.target.value;
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
        address : '',
        address2 : '',
        state: '',
        zipcode: '',
        year: '',
        sqft: '',
      }
    })
  }

  addHouse = async(updatedHouse) => {
    try{
        const response = await fetch(`http://localhost:9000/api/v1/house`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(updatedHouse),
          headers: {
            'Content-Type' : 'application/json'
          }
        });


        if(!response.ok){
          throw Error(response.statusText)
        }

        // console.log('addreport=>', response);
        const parsedCreateHouse = await response.json();
        // console.log('out....', parsedCreateReport);
        // console.log(parsedCreateReport.data._id);

        localStorage.setItem('houseId', parsedCreateHouse.data._id)
        localStorage.setItem('authorId', parsedCreateHouse.data.authorId)
        localStorage.setItem('authorname', parsedCreateHouse.data.authorname)

        this.props.history.push('/home');

      } catch(err) {
        console.log('cannot make house');
      }
    }

  render(){
    console.log('THIS IS PROPS', this.props);
    return(
      <div>
        <Nav />
        <div className="container">
          <div className="text-center mt-4">
            <h1>Create House</h1>
          </div>
          <div className="row mb-4">
            <div className="col-md-8 offset-2 mt-5">
              <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                  <label className="mb-0" htmlFor="address">Address:</label>
                    <input name="address" id="address" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)1330 Broadway" value={this.state.house.address} required/>
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="Address2">Address2:</label>
                    <input name="address2" id="address2" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.address2} placeholder="ex)#300" />
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="state">State:</label>
                    <input name="state" id="state" type="text" className="form-control" placeholder="ex)CA" value={this.state.house.state} onChange={this.handleInput} />
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="zipcode">Zipcode:</label>
                    <input name="zipcode" id="zipcode" type="text" className="form-control" placeholder="ex)94612" value={this.state.house.zipcode} onChange={this.handleInput} />
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="year">Year:</label>
                    <input name="year" id="year" type="year" className="form-control" onChange={this.handleInput} value={this.state.house.year} placeholder="ex)YYYY" />
                </div>
                <div className="form-group">
                  <label className="mb-0" htmlFor="sqft">Sqft:</label>
                    <input name="sqft" id="sqft" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.sqft} placeholder="ex)960" />
                </div>
                <div className="form-group">
                  <label className="" htmlFor="memo">Memo:</label>
                    <textarea name="memo" id="memo" className="form-control py-4 px-4" rows="8" cols="10" onChange={this.handleInput} value={this.state.house.memo} placeholder="ex)Any memo">
                    </textarea>
                </div>
                <div className="text-center form-group">
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
