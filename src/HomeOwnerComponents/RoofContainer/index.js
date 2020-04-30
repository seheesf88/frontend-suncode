import React, { Component } from 'react';
import axios from 'axios'
import Moment from 'react-moment';
// import './HouseDetailContainer.css';

class RoofContainer extends Component {
  constructor(){
    super()
    this.state = {
      house : {
        houseImg: [],
        address : '',
        city:'',
        state:'',
        zipCode:'',
        houseYear:'',
        houseSqft:'',
        ceilingHeight:'',
        numOfRooms:'',
        numOfStories:'',
        dirOfHouse:'',
        postingTime:''
      },
      preview1: null,
      selectedFile : null,
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


  handleClick = (e) => {

    var h = document.getElementById(`input-${e.target.id}`)
    h.click();

  }

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedHouse = {
      ...this.state.house
    }

    this.addHouse(updatedHouse)

    this.setState({
      house : {
        houseImg: null,
        address : '',
        city: '',
        state: '',
        zipCode: '',
        houseYear: '',
        houseSqft: '',
        ceilingHeight: '',
        numOfRooms: '',
        numOfStories: '',
        dirOfHouse: '',
        userId: '',
      },
    })
  }

    fileSelectHandler = (e) => {
      var file1

      switch (e.target.id) {
        case 'input-photoOne':
            file1 = e.target.files[0];
          break;

        default:
          console.log('errorrrrr');
          return 0;
      }


      var reader1 = new FileReader();


      var url1 = typeof file1 !== 'undefined'? reader1.readAsDataURL(file1):null;


      reader1.onloadend = function(e){
        this.setState({
          preview1: [reader1.result || null],
        })
      }.bind(this)


      this.setState({
        house: {
          ...this.state.house,
          houseImg: [...this.state.house.houseImg, e.target.files[0]]
        }
      })
    }


    addHouse = async(updatedHouse) => {

        const data = new FormData();

        for(let i = 0; i < this.state.house.houseImg.length; i++){
            data.append('houseImg', this.state.house.houseImg[i]);
        }

        data.append('address', this.state.house.address);
        data.append('city', this.state.house.city);
        data.append('state', this.state.house.state);
        data.append('zipCode', this.state.house.zipCode);
        data.append('houseYear', this.state.house.houseYear);
        data.append('houseSqft', this.state.house.houseSqft);
        data.append('ceilingHeight', this.state.house.ceilingHeight);
        data.append('numOfRooms', this.state.house.numOfRooms);
        data.append('numOfStories', this.state.house.numOfStories);
        data.append('dirOfHouse', this.state.house.dirOfHouse);
        //data.append('postingTime', this.state.house.postingTime);

        let userId = localStorage.getItem('userId');
        data.append('userId', userId)

        const time = new Date();
        data.append('postingTime', time)

        axios.post(`${process.env.REACT_APP_API}/api/v1/house`, data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
          // console.log(res.statusText, "here???", res.data.msg);
          this.props.history.push('/roof');
        })
    }


  render(){

    return(

      <div>

          <form onSubmit={this.handleSubmit} className="createForm">
            <div className="createContainer">
                <div className="container-panel">

                  <div className="container-photos">
                    <div><img className="frames" id="photoOne" src={this.state.preview1} onClick={this.handleClick } height={100} width={100} /></div>
                      <input name="photoOne" className="hide" id="input-photoOne" onChange={this.fileSelectHandler} type="file"/>
                    <div><img className="frames" id="photoTwo" src={this.state.preview2}  onClick={this.handleClick } height={100} width={100} /></div>
                      <input name="photoTwo" className="hide" id="input-photoTwo" onChange={this.fileSelectHandler} type="file"/>
                    <div><img className="frames" id="photoThree" src={this.state.preview3} onClick={this.handleClick } height={100} width={100} /></div>
                      <input name="photoThree" className="hide" id="input-photoThree" onChange={this.fileSelectHandler} type="file"/>
                    <div><img className="frames" id="photoFour" src={this.state.preview4} onClick={this.handleClick } height={100} width={100} /></div>
                      <input name="photoFour" className="hide" id="input-photoFour" onChange={this.fileSelectHandler} type="file"/>
                  </div>
                </div>
                <div className="container-form-group">
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input name="address" id="address" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)1330 Broadway" value={this.state.house.address} required/>
                  </div>
                  <div className="form-group">
                    <label htmlFor="city">City:</label>
                    <input name="city" id="city" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.city} placeholder="ex)San Francisco" required/>
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="state">State:</label>
                    <input name="state" id="state" type="text" className="form-control" placeholder="ex)CA" value={this.state.house.state} onChange={this.handleInput} required/>
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="zipcode">Zipcode:</label>
                    <input name="zipcode" id="zipcode" type="text" className="form-control" placeholder="ex)94612" value={this.state.house.zipcode} onChange={this.handleInput} required />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="year">Year:</label>
                    <input name="year" id="year" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.year} placeholder="ex)YYYY" required/>
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="sqft">Sq.ft.:</label>
                    <input name="sqft" id="sqft" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.sqft} placeholder="ex)960" required/>
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="memo">Memo:</label>
                    <textarea name="memo" id="memo" className="form-control" rows="3" cols="10" onChange={this.handleInput} value={this.state.house.memo} placeholder="ex)Any memo">
                    </textarea>
                  </div>
                </div>

              <div className="container-submitBtn">
                <input type="submit" className="submitBtn" />
              </div>
            </div>
          </form>
      </div>
    )
  }
}
export default RoofContainer
