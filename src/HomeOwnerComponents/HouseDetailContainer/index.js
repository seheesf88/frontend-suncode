import React, { Component } from 'react';
import axios from 'axios'
import Moment from 'react-moment';
import './HouseDetailContainer.css';

class HouseDetailContainer extends Component {
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
        // postingTime:''
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

        // const time = new Date();
        // data.append('postingTime', time)

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
      <div className="houseContainer mainContainer">
        <div className="houseRow">
          <form onSubmit={this.handleSubmit} className="formHouse">
            <img className="frames" id="photoOne" src={this.state.preview1} onClick={this.handleClick } />
            <input type="file" name="houseImg" className="hide" id="input-photoOne" onChange={this.fileSelectHandler} />
                <input type="text" name="address" className="form_input" id="address" onChange={this.handleInput} placeholder="ex)1330 Broadway" value={this.state.house.address} />
                <input type="text" name="city" className="form_input" id="city" onChange={this.handleInput} value={this.state.house.city} placeholder="ex)San Francisco" />
                <input type="text" name="state" className="form_input" id="state" onChange={this.handleInput} placeholder="ex)CA" value={this.state.house.state}  />
                <input type="text" name="zipCode" className="form_input" id="zipCode" onChange={this.handleInput} placeholder="ex)94612" value={this.state.house.zipCode} />
                <input type="text" name="houseYear" className="form_input" id="houseYear" onChange={this.handleInput} value={this.state.house.houseYear} placeholder="ex)YYYY" />
                <input type="text" name="houseSqft" className="form_input" id="houseSqft" onChange={this.handleInput} value={this.state.house.houseSqft} placeholder="ex)960" />
                <input type="text" name="ceilingHeight" className="form_input" id="ceilingHeight" onChange={this.handleInput} value={this.state.house.ceilingHeight} placeholder="ceilingHeight" />
                <input type="text" name="numOfRooms" className="form_input" id="numOfRooms" onChange={this.handleInput} value={this.state.house.numOfRooms} placeholder="numOfRooms" />
                <input type="text" name="numOfStories" className="form_input" id="numOfStories" onChange={this.handleInput} value={this.state.house.numOfStories} placeholder="numOfStories" />
                <input type="text" name="dirOfHouse" className="form_input" id="dirOfHouse" onChange={this.handleInput} value={this.state.house.dirOfHouse} placeholder="dirOfHouse" />
                <input type="submit" className="form_input submitBtn" id="submitBtn"/>

          </form>
        </div>
      </div>
    )
  }
}
export default HouseDetailContainer
