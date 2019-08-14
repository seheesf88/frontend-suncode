import React, { Component } from 'react';
import Nav from '../Nav'
import axios from 'axios'
import Moment from 'react-moment';

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
        pic1: [],
        // pic2: [],
        // pic3: '',
        // pic4: '',
        memo: '',
        // postingTime: '',
      },
      selectedFile : null,
    }
  }


  componentDidMount(){
    // this.addingTime();
  }

  handleInput = (e) => {
    console.log('input', e);
    const updatedChange = {
      ...this.state.house
    }
    updatedChange[e.target.name] = e.target.value;
    console.log('updatedChange', updatedChange);
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

    // const time = new Date();
    // console.log('here tiem??===>', time);
    this.setState({
      house : {
        address : '',
        address2 : '',
        state: '',
        zipcode: '',
        year: '',
        sqft: '',
        pic1: null,//null
        // pic2: null,
        // pic3: '',
        // pic4: '',
        memo: '',
        userId: '',
        // postingTime: time,
      },
    })
  }
  //
  // addHouse2 = async(updatedHouse) => {
  //   try{
  //       const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house`, {
  //         method: 'POST',
  //         credentials: 'include',
  //         body: JSON.stringify(updatedHouse),
  //         headers: {
  //           'Content-Type' : 'application/json'
  //         }
  //       });
  //       console.log("response", response);
  //
  //       if(!response.ok){
  //         throw Error(response.statusText)
  //       }
  //       console.log("3");
  //       // console.log('addreport=>', response);
  //       const parsedCreateHouse = await response.json();
  //       // console.log('out....', parsedCreateReport);
  //       // console.log(parsedCreateReport.data._id);
  //       // console.log('parsedCreateHouse ===>', parsedCreateHouse.data);
  //       localStorage.setItem('houseId', parsedCreateHouse.data._id)
  //       localStorage.setItem('authorId', parsedCreateHouse.data.authorId)
  //       localStorage.setItem('authorname', parsedCreateHouse.data.authorname)
  //
  //       this.props.history.push('/home');
  //
  //     } catch(err) {
  //       console.log('cannot make house');
  //     }
  //   }


    fileSelectHandler = (e) => {
      this.setState({
        house: {
          ...this.state.house,
          pic1: e.target.files[0],
          // pic2: e.target.files[0],
          // pic3: e.target.files[2],
          // pic4: e.target.files[3]
        }
      })
    }


    // fileSelectHandler = (e) => {
    //   console.log(e.target.files[0]);
    //   console.log(e.target.files[1]);
    //   this.setState({
    //     house: {
    //       ...this.state.house,
    //       pic1: e.target.files[0],
    //       // pic2: e.target.files[1],
    //       // pic3: e.target.files[2],
    //       // pic4: e.target.files[3]
    //     }
    //   })
    // }

    addHouse = async(updatedHouse) => {
      // try{


        const data = new FormData();

        // console.log('photo1 ======>', this.state.house.pic1);
        // console.log('photo2 ======>', this.state.house.pic2);

        data.append('photo', this.state.house.pic1);
        // data.append('photo', this.state.house.pic2);

        data.append('address', this.state.house.address);
        data.append('address2', this.state.house.address2);
        data.append('state', this.state.house.state);
        data.append('zipcode', this.state.house.zipcode);
        data.append('year', this.state.house.year);
        data.append('sqft', this.state.house.sqft);
        data.append('memo', this.state.house.memo);
        data.append('time', this.state.house.time);

        let userId = localStorage.getItem('userId');
        console.log('userId????', userId);
        data.append('userId', userId)
        const time = new Date();
        console.log('postingTime is working in here? ====>', time);
        data.append('postingTime', time)


        console.log(data, this.state.house.pic1)
        axios.post(`${process.env.REACT_APP_API}/api/v1/house`, data, {
          headers: {
            'content-type': 'multipart/form-data'
          }
        })
        .then(res => {
          console.log(res.statusText, "here???", res.data.msg);
          // this.props.history.push('/home');
        })

      // }catch(err){
        // console.log('file upload handlder fail');
      // }
    }
    // addingTime = () => {
    //   const date = new Date();
    //   console.log('is this working?=>', date);
    //   this.setState({
    //     posting: date
    //   })
    // }


  render(){
    // console.log('THIS IS PROPS', this.props);

    return(
      <div>
        <Nav />
          <form onSubmit={this.handleSubmit}>
            <div className="container mt-5">
              <div className="row">
                <div className="col-5 offset-1">
                  <div className="form-group">
                    <label htmlFor="address">Address:</label>
                    <input name="address" id="address" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)1330 Broadway" value={this.state.house.address} />
                  </div>
                  <div className="form-group">
                    <label className="" htmlFor="Address2">Address2:</label>
                    <input name="address2" id="address2" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.address2} placeholder="ex)#300" />
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
                    <label className="" htmlFor="memo">Memo:</label>
                      <textarea name="memo" id="memo" className="form-control" rows="3" cols="10" onChange={this.handleInput} value={this.state.house.memo} placeholder="ex)Any memo">
                      </textarea>
                  </div>
                </div>
                <div className="col-4 offset-1">
                  <div>
                    <label htmlFor="pic1">Photo1:</label>
                    <input name="pic1" id="pic1" type="file" onChange={this.fileSelectHandler} value={this.state.house.pic21}  />
                  </div>
                  <div>
                    <label htmlFor="pic2">Photo2:</label>
                    <input name="pic2" id="pic2" type="file"  value={this.state.house.pic2}  />
                  </div>
                  <div>
                    <label htmlFor="pic3">Photo3:</label>
                    <input name="pic3" id="pic3" type="file" onChange={this.handleInput} value={this.state.house.pic3}  />
                  </div>
                  <div>
                    <label htmlFor="pic4">Photo4:</label>
                    <input name="pic4" id="pic4" type="file" onChange={this.handleInput} value={this.state.house.pic4}  />
                  </div>

                </div>
              </div>
              <div className="row offset-5">
                <input type="submit" className="btn btn-primary" />
              </div>
            </div>
          </form>
      </div>
    )
  }
}
export default CreateContainer



// import React, { Component } from 'react';
// import Nav from '../Nav'
// import PhotoContainer from '../PhotoContainer'
// import axios from 'axios'
//
// class CreateContainer extends Component {
//   constructor(){
//     super()
//     this.state = {
//       house : {
//         street: '',
//         address: '',
//         state: '',
//         zipcode: '',
//         year: '',
//         sqft: '',
//         productImage: null
//       },
//       // selectedFile : null,
//     }
//   }
//
//   // handleInput = (e) => {
//   //   // console.log('input', e);
//   //   const updatedChange = {
//   //     ...this.state.house
//   //   }
//   //   updatedChange[e.target.name] = e.target.value;
//   //   // console.log('updatedChange', updatedChange);
//   //   this.setState({
//   //     house: updatedChange
//   //   })
//   // }
//   //
//   // handleSubmit = (e) => {
//   //   e.preventDefault();
//   //   const updatedHouse = {
//   //     ...this.state.house
//   //   }
//   //   this.addHouse(updatedHouse)
//   //   this.setState({
//   //     house : {
//   //       street: '',
//   //       address: '',
//   //       state: '',
//   //       zipcode: '',
//   //       year: '',
//   //       sqft: '',
//   //       productImage: ''
//   //     }
//   //   })
//   // }
//   //
//   // addHouse = async(updatedHouse) => {
//   //   try{
//   //       const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house`, {
//   //         method: 'POST',
//   //         credentials: 'include',
//   //         body: JSON.stringify(updatedHouse),
//   //         headers: {
//   //           'Content-Type' : 'application/json',
//   //           'Accept': 'application/json',
//   //         }
//   //       });
//   //       console.log("response", response);
//   //
//   //       if(!response.ok){
//   //         throw Error(response.statusText)
//   //       }
//   //       console.log("3");
//   //       // console.log('addreport=>', response);
//   //       const parsedCreateHouse = await response.json();
//   //
//   //       console.log('out....', parsedCreateHouse);
//   //       // console.log(parsedCreateReport.data._id);
//   //       // console.log('parsedCreateHouse ===>', parsedCreateHouse.data);
//   //       console.log('>>>>');
//   //       // localStorage.setItem('houseId', parsedCreateHouse.data._id)
//   //       console.log('<<<<<<');
//   //       const authorId = localStorage.getItem('userId')
//   //       console.log('authorId.....??', authorId);
//   //       localStorage.setItem('authorIdd', authorId)
//   //       // localStorage.setItem('authorId', parsedCreateHouse.data.authorId)
//   //       // localStorage.setItem('authorname', parsedCreateHouse.data.authorname)
//   //
//   //       this.props.history.push('/home');
//   //
//   //     } catch(err) {
//   //       console.log('cannot make house');
//   //     }
//   //   }
//
// //this is only for text!!! ------------------------------------------------------
//
//   handleInput = (e) => {
//     // console.log('what is e', e.target.name);
//     // console.log('what is value', e.target.value);
//     const updatedChange = {
//       ...this.state.house
//     }
//     updatedChange[e.target.name] = e.target.value;
//     console.log('updatedChange', updatedChange);
//     this.setState({
//       house: updatedChange
//     })
//   }
//
//
//     this.addHouse(updatedHouse);
//     this.setState({
//       house : {
//         address : '',
//         address2 : '',
//         state: '',
//         zipcode: '',
//         year: '',
//         sqft: '',
//         pic1: null,
//         // pic2: '',
//         // pic3: '',
//         // pic4: '',
//         memo: '',
//       }
//     })
//   }
//
//   addHouse2 = async(updatedHouse) => {
//     try{
//         const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house`, {
//           method: 'POST',
//           credentials: 'include',
//           body: JSON.stringify(updatedHouse),
//           headers: {
//             'Content-Type' : 'application/json'
//           }
//         });
//         console.log("response", response);
//
//
//   onChange = (e) => {
//     console.log('what is e.target in onChange', e.target);
//     this.setState({
//         house : {
//             ...this.state.house,
//             productImage: e.target
//         }
//     });
// }
//
// //------------------------------------------------------
//
//     fileSelectHandler = (e) => {
//       // console.log(e.target.files[0]);
//       this.setState({
//         house: {
//           ...this.state.house,
//           pic1: e.target.files[0],
//         }
//       })
//     }
//
//
//     addHouse = async(updatedHouse) => {
//       // try{
//
//
//         const data = new FormData()
//         data.append('pic1', this.state.house.pic1);
//
//         console.log(data, this.state.house.pic1)
//         axios.post(`${process.env.REACT_APP_API}/api/v1/house`, data, {
//           headers: {
//             'content-type': 'multipart/form-data'
//           }
//         })
//         .then(res => {
//           console.log(res.statusText, "here???", res.data.msg);
//         })
//
//     //
//     // addHouse = async(updatedHouse) => {
//     //   try{
//     //       const response = await fetch(`${process.env.REACT_APP_API}/api/v1/house`, {
//     //         method: 'POST',
//     //         credentials: 'include',
//     //         body: JSON.stringify(updatedHouse),
//     //         headers: {
//     //           'Content-Type' : 'application/json',
//     //           'Accept': 'application/json',
//     //         }
//     //       });
//     //       console.log("response", response);
//     //
//     //       if(!response.ok){
//     //         throw Error(response.statusText)
//     //       }
//     //       console.log("3");
//     //       // console.log('addreport=>', response);
//     //       const parsedCreateHouse = await response.json();
//     //
//     //       console.log('out....', parsedCreateHouse);
//     //       // console.log(parsedCreateReport.data._id);
//     //       // console.log('parsedCreateHouse ===>', parsedCreateHouse.data);
//     //       console.log('>>>>');
//     //       // localStorage.setItem('houseId', parsedCreateHouse.data._id)
//     //       console.log('<<<<<<');
//     //       const authorId = localStorage.getItem('userId')
//     //       console.log('authorId.....??', authorId);
//     //       localStorage.setItem('authorIdd', authorId)
//     //       // localStorage.setItem('authorId', parsedCreateHouse.data.authorId)
//     //       // localStorage.setItem('authorname', parsedCreateHouse.data.authorname)
//     //
//     //       this.props.history.push('/home');
//     //
//     //     } catch(err) {
//     //       console.log('cannot make house');
//     //     }
//     //   }
//     //
//     // fileSelectHandler = (e) => {
//     //   // console.log(e.target.files[0]);
//     //   this.setState({
//     //     selectedFile: e.target.files[0]
//     //   })
//     // }
//
//     //
//     // fileUploadHandler = async() => {
//     //   // try{
//     //     const data = new FormData()
//     //     data.append('file', this.state.selectedFile);
//     //     axios.post(`${process.env.REACT_APP_API}/api/v1/house`, data, {
//     //     })
//     //     .then(res => {
//     //       console.log(res.statusText);
//     //     })
//     //
//     //   // }catch(err){
//     //     // console.log('file upload handlder fail');
//     //   // }
//     // }
//
//
//     onFormSubmit = async (e) => {
//         e.preventDefault();
//         const formData = new FormData();
//         // formData.append('productImage',this.state.house.productImage);
//         console.log('street?', this.state.house.street);
//         formData.append('street', 'testing');
//         formData.append('address', this.state.house.address);
//         formData.append('state', this.state.house.state);
//         formData.append('zipcode', this.state.house.zipcode);
//         formData.append('year', this.state.house.year);
//         formData.append('sqft', this.state.house.sqft);
//
//         const config = {
//             withCredentials: true,
//             headers: {
//                 // 'content-type': 'multipart/form-data'
//                 'content-type': 'application/json'
//             }
//         };
//         let tempObj;
//
//         console.log(formData);
//         // console.log(config);
// //@@@@@@@@@@@@@@@@@@@@@@@@ this is not working @@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@@
//         const response = await axios.post(`${process.env.REACT_APP_API}/api/v1/house`, formData, config)
//             .then((response) => {
//               console.log('1>');
//                 // do nothing
//                 //parsedJson = response.json();
//                 console.log(response.statusText);
//                 console.log('what is response.data?', response.data);
//                 tempObj =  response.data.newPost;
//             }).catch((error) => {
//                 //alert('error');
//                 console.log('what is the err? ', error);
//         });
//
//         console.log('at this point, what is tempObj', tempObj);
//         this.setState({
//             // posts: [...this.state.posts, tempObj],
//             house: {
//                     street: '',
//                     address: '',
//                     state: '',
//                     zipcode: '',
//                     year: '',
//                     sqft: '',
//                     productImage: null
//                 }
//         });
//     }
//
//
//   render(){
//     // console.log('THIS IS PROPS', this.props);
//     return(
//       <div>
//         <Nav />
//         <div className="container mt-5">
//           <div className="row">
//             <div className="col-5 offset-1">
//               <form onSubmit={this.onFormSubmit}>
//                   <div className="form-group">
//                     <label htmlFor="address">Address1:</label>
//                     <input name="street" id="street" type="text" className="form-control" onChange={this.handleInput} placeholder="ex)1330 Broadway" value={this.state.house.street} />
//                   </div>
//                   <div className="form-group">
//                     <label className="" htmlFor="Address2">Address2:</label>
//                     <input name="address" id="address" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.address} placeholder="ex)#300" />
//                   </div>
//                   <div className="form-group">
//                     <label className="" htmlFor="state">State:</label>
//                     <input name="state" id="state" type="text" className="form-control" placeholder="ex)CA" value={this.state.house.state} onChange={this.handleInput} />
//                   </div>
//                   <div className="form-group">
//                     <label className="" htmlFor="zipcode">Zipcode:</label>
//                     <input name="zipcode" id="zipcode" type="text" className="form-control" placeholder="ex)94612" value={this.state.house.zipcode} onChange={this.handleInput} />
//                   </div>
//                   <div className="form-group">
//                     <label className="" htmlFor="year">Year:</label>
//                     <input name="year" id="year" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.year} placeholder="ex)YYYY" />
//                   </div>
//                   <div className="form-group">
//                     <label className="" htmlFor="sqft">Sqft:</label>
//                     <input name="sqft" id="sqft" type="text" className="form-control" onChange={this.handleInput} value={this.state.house.sqft} placeholder="ex)960" />
//                   </div>
//                   <div className="form-group">
//                     <label className="" htmlFor="memo">Memo:</label>
//                       <textarea name="memo" id="memo" className="form-control" rows="3" cols="10" onChange={this.handleInput} value={this.state.house.memo} placeholder="ex)Any memo">
//                       </textarea>
//                   </div>
//                 </div>
//                 <div className="col-4 offset-1">
//                   <div>
//                     <label htmlFor="pic1">Photo1:</label>
//                     <input name="pic1" id="pic1" type="file" onChange={this.fileSelectHandler} value={this.state.house.pic21}  />
//                   </div>
//                   <div>
//                     <label htmlFor="pic2">Photo2:</label>
//                     <input name="pic2" id="pic2" type="file" onChange={this.handleInput} value={this.state.house.pic2}  />
//                   </div>
//                   <div>
//                     <label htmlFor="pic3">Photo3:</label>
//                     <input name="pic3" id="pic3" type="file" onChange={this.handleInput} value={this.state.house.pic3}  />
//                   </div>
//                   <div>
//                     <label htmlFor="pic4">Photo4:</label>
//                     <input name="pic4" id="pic4" type="file" onChange={this.handleInput} value={this.state.house.pic4}  />
//                   </div>
//
//               <div className="row offset-5">
//                 <input type="submit" className="btn btn-primary" />
//               </div>
//           </form>
//         </div>
//           </div>
//         </div>
//       </div>
//     )
//   }
// }
// export default CreateContainer
