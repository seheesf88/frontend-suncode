import React, { Component } from 'react';
import Nav from '../../Nav'
import axios from 'axios'
import Moment from 'react-moment';
// import './Create.scss';

class Roof extends Component {
  constructor(){
    super()
    this.state = {
      house : {
        address : '',
        city:'',
        state: '',
        zipcode: '',
        year: '',
        sqft: '',
        pic1: [],
        memo: '',
      },
      preview1: null,
      preview2: null,
      preview3: null,
      preview4: null,
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
    console.log('---->',e.target.id);
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
        address : '',
        city: '',
        state: '',
        zipcode: '',
        year: '',
        sqft: '',
        pic1: null,
        memo: '',
        userId: '',
      },
    })
  }



    fileSelectHandler = (e) => {
      var file1, file2, file3, file4;

      // var singleFile = ''
      switch (e.target.id) {
        case 'input-photoOne':
            file1 = e.target.files[0];
          break;
        case 'input-photoTwo':
           file2 = e.target.files[0]; // ?? index
           break;
       case 'input-photoThree':
          file3 = e.target.files[0];
          break;

       case 'input-photoFour':
           file4 = e.target.files[0];
           break;
        default:
          console.log('errorrrrr');
          return 0;

      }

      var reader1 = new FileReader();
      var reader2 = new FileReader();
      // var reader3 = new FileReader();
      // var reader4 = new FileReader();

      var url1 = typeof file1 !== 'undefined'? reader1.readAsDataURL(file1):null;
      var url2 = typeof file2 !== 'undefined'? reader2.readAsDataURL(file2):null;
      // var url3 = typeof file3 !== 'undefined'? reader3.readAsDataURL(file3):null;
      // var url4 = typeof file4 !== 'undefined'? reader4.readAsDataURL(file4):null;


      reader1.onloadend = function(e){
        this.setState({
          preview1: [reader1.result || null],
        })
      }.bind(this)

      reader2.onloadend = function(e){
        this.setState({
          preview2: [reader2.result || null],
        })
      }.bind(this)
      //
      // reader3.onloadend = function(e){
      //   this.setState({
      //     preview3: [reader3.result || null],
      //   })
      // }.bind(this)
      //
      // reader4.onloadend = function(e){
      //   this.setState({
      //     preview4: [reader4.result || null],
      //   })
      // }.bind(this)



      this.setState({
        house: {
          ...this.state.house,
          pic1: [...this.state.house.pic1, e.target.files[0]]
        }
      })
    }


    addHouse = async(updatedHouse) => {

        const data = new FormData();

        for(let i = 0; i < this.state.house.pic1.length; i++){
            data.append('photo', this.state.house.pic1[i]);
        }

        data.append('address', this.state.house.address);
        data.append('city', this.state.house.city);
        data.append('state', this.state.house.state);
        data.append('zipcode', this.state.house.zipcode);
        data.append('year', this.state.house.year);
        data.append('sqft', this.state.house.sqft);
        // data.append('memo', this.state.house.memo);
        data.append('time', this.state.house.time);

        let userId = localStorage.getItem('userId');
        data.append('userId', userId)

        let username = localStorage.getItem('username');
        data.append('username', username)

        const time = new Date();
        data.append('postingTime', time)

        axios.post(`${process.env.REACT_APP_API}/api/v1/house`, data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
          // console.log(res.statusText, "here???", res.data.msg);
          this.props.history.push('/project/create/attic');
        })
    }


  render(){

    return(

      <div>
        <Nav />
          <form onSubmit={this.handleSubmit} className="">
            <div className="">
                <div className="">
                  <div className="">
                    <div><img className="frames" id="photoTwo" src={this.state.preview2} onClick={this.handleClick } height={100} width={100} /></div>
                      <input name="photoTwo" className="hide" id="input-photoTwo" onChange={this.fileSelectHandler} type="file"/>
                  </div>
                </div>
                <div className="">
                  <div>
                    <label htmlFor="address">Address:</label>
                    <input name="address" id="address" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)1330 Broadway" value={this.state.house.address} />
                  </div>
                </div>
              <div className="">
                <button type="submit" className="submitBtn">Next</button>
              </div>
            </div>
          </form>
      </div>
    )
  }
}
export default Roof
