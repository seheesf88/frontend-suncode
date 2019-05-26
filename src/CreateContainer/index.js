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
        pic1: '',
        pic2: '',
        pic3: '',
        pic4: '',
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
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house`, {
          method: 'POST',
          credentials: 'include',
          body: JSON.stringify(updatedHouse),
          headers: {
            'Content-Type' : 'application/json'
          }
        });
        console.log("response", response);

        if(!response.ok){
          throw Error(response.statusText)
        }
        console.log("3");
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
            <form onSubmit={this.handleSubmit} action="/create" accept="accept=image/*">
            <div className="grid-container">
                <div className="grid1">
                  <div className="">
                    <label htmlFor="address">Address:</label>
                    <input name="address" id="address" type="text" className="" onChange={this.handleInput} placeholder="ex)1330 Broadway" value={this.state.house.address} />
                  </div>
                  <div className="">
                    <label className="" htmlFor="Address2">Address2:</label>
                    <input name="address2" id="address2" type="text" className="" onChange={this.handleInput} value={this.state.house.address2} placeholder="ex)#300" />
                  </div>
                  <div className="">
                    <label className="" htmlFor="state">State:</label>
                    <input name="state" id="state" type="text" className="" placeholder="ex)CA" value={this.state.house.state} onChange={this.handleInput} />
                  </div>
                  <div className="">
                    <label className="" htmlFor="zipcode">Zipcode:</label>
                    <input name="zipcode" id="zipcode" type="text" className="" placeholder="ex)94612" value={this.state.house.zipcode} onChange={this.handleInput} />
                  </div>
                  <div className="">
                    <label className="" htmlFor="year">Year:</label>
                    <input name="year" id="year" type="text" className="" onChange={this.handleInput} value={this.state.house.year} placeholder="ex)YYYY" />
                  </div>
                  <div className="">
                    <label className="" htmlFor="sqft">Sqft:</label>
                    <input name="sqft" id="sqft" type="text" className="" onChange={this.handleInput} value={this.state.house.sqft} placeholder="ex)960" />
                  </div>
                  <div className="">
                    <label className="" htmlFor="memo">Memo:</label>
                      <textarea name="memo" id="memo" className="" rows="8" cols="10" onChange={this.handleInput} value={this.state.house.memo} placeholder="ex)Any memo">
                      </textarea>
                  </div>
                </div>

                <div className="grid1-container">
                  <div className="picbox">
                    <label className="" htmlFor="pic1">Photo1:</label>
                    <input name="pic1" id="pic1" type="file" className="" onChange={this.handleInput} value={this.state.house.pic1} />
                  </div>
                  <div className="picbox">
                    <label className="" htmlFor="pic2">Photo2:</label>
                    <input name="pic2" id="pic2" type="url" className="" onChange={this.handleInput} value={this.state.house.pic2} placeholder="" />
                  </div>
                  <div className="picbox">
                    <label className="" htmlFor="pic3">Photo3:</label>
                    <input name="pic3" id="pic3" type="url" className="" onChange={this.handleInput} value={this.state.house.pic3} placeholder="" />
                  </div>
                  <div className="picbox">
                    <label className="" htmlFor="pic4">Photo4:</label>
                    <input name="pic4" id="pic4" type="url" className="" onChange={this.handleInput} value={this.state.house.pic4} placeholder="" />
                  </div>
                  <div className="subBtn">
                    <input type="submit" className="button1" />
                  </div>
                </div>
              </div>
            </form>

      </div>
    )
  }
}
export default CreateContainer
