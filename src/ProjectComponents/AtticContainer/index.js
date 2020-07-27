import React, { Component } from 'react';
import axios from 'axios'
// import Moment from 'react-moment';
import Nav from '../../Nav'
// import './HouseDetailContainer.css';

class AtticContainer extends Component {
  constructor(){
    super()
    this.state = {
      attic : {
        atticImg: [],
        atticType : '',
        atticSqft:'',
        atticDepth:'',
        insulMaterial:'',
        userId: '',
        postingTime:''
      },
      preview3: null,
      selectedFile : null,
    }
  }


  handleInput = (e) => {

    const updatedChange = {
      ...this.state.attic
    }

    updatedChange[e.target.name] = e.target.value;

    this.setState({
      attic: updatedChange
    })
  }


  handleClick = (e) => {

    var h = document.getElementById(`input-${e.target.id}`)
    h.click();
    //once click the box,
  }

  handleSubmit = (e) => {
    e.preventDefault();
    const updatedAttic = {
      ...this.state.attic
    }

    this.addAttic(updatedAttic)

    this.setState({
      attic : {
        atticImg : null,
        atticType : '',
        atticSqft : '',
        atticDepth : '',
        insulMaterial : '',
        userId: '',
      },
    })
  }

    fileSelectHandler = (e) => {
      var file3

      switch (e.target.id) {
        case 'input-photoThree':
            file3 = e.target.files[0];
          break;

        default:
          console.log('errorrrrr');
          return 0;
      }


      var reader3 = new FileReader();


      var url3 = typeof file3 !== 'undefined'? reader3.readAsDataURL(file3):null;


      reader2.onloadend = function(e){
        this.setState({
          preview3: [reader3.result || null],
        })
      }.bind(this)


      this.setState({
        attic : {
          ...this.state.attic,
          atticImg : [...this.state.attic.atticImg, e.target.files[0]]
        }
      })
    }


    addAttic = async(updatedAttic) => {

        const data = new FormData();

        for(let i = 0; i < this.state.attic.atticImg.length; i++){
            data.append('roofImg', this.state.attic.atticImg[i]);
        }

        data.append('atticType', this.state.attic.atticType);
        data.append('atticSqft', this.state.attic.atticSqft);
        data.append('atticDepth', this.state.attic.atticDepth);
        data.append('insulMaterial', this.state.attic.insulMaterial);attic
        //data.append('postingTime', this.state.house.postingTime);

        let userId = localStorage.getItem('userId');
        data.append('userId', userId)

        const time = new Date();
        data.append('postingTime', time)

        axios.post(`${process.env.REACT_APP_API}/api/v1/roof`, data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
          // console.log(res.statusText, "here???", res.data.msg);
          this.props.history.push('/project/create/waheater');
        })
    }


  render(){

    return(

      <div>
        <Nav />
          <form onSubmit={this.handleSubmit} className="createForm">
            <div className="">
                <div className="">

                  <div className="">
                    <div><img className="frames" id="photoTwo" src={this.state.preview2}  onClick={this.handleClick } height={100} width={100} /></div>
                      <input name="photoTwo" className="hide" id="input-photoTwo" onChange={this.fileSelectHandler} type="file"/>
                  </div>
                </div>
                <div className="container-form-group">
                  <div className="form-group">
                    <label htmlFor="exterior">EXTERIOR</label>
                    <input name="exterior" id="exterior" type="text" className="form-control" onChange={this.handleInput} value={this.state.roof.exterior} placeholder="" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="roofColor">COLOR</label>
                    <input name="roofColor" id="roofColor" type="text" className="form-control" onChange={this.handleInput} value={this.state.roof.roofColor} placeholder="" />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="state">IS THERE SOLAR PV SYSTEM INSTALLED?*</label>
                    <input name="pvSystem" id="pvSystem" type="text" className="form-control" value={this.state.roof.pvSystem} onChange={this.handleInput} placeholder=""/>
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="panels">NUMBER OF PANELS</label>
                    <input name="panels" id="panels" type="text" className="form-control" value={this.state.roof.panels} onChange={this.handleInput} placeholder="" />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="dcCapacity">SIZE(KW)</label>
                    <input name="dcCapacity" id="dcCapacity" type="text" className="form-control" onChange={this.handleInput} value={this.state.roof.dcCapacity} placeholder="" />
                  </div>
                </div>
              <div className="">
                <button type="submit" className="submitBtn">NEXT</button>
              </div>
            </div>
          </form>
      </div>
    )
  }
}
export default AtticContainer
