import React, { Component } from 'react';
// import React, { Fragment, useState } from 'react';
import PhotoComponent from '../PhotoComponent'
import { Link, withRouter } from 'react-router-dom';
import axios from 'axios'

class PhotoContainer extends Component {
  constructor(){
    super()
    this.state = {
      photos: [],
      photo : '',
      authorId: '',
    }
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  componentDidMount(){
    // this.getOnePhoto()
    this.getPhoto()
  }

  onChange = (e) => {
    console.log('what is e', e.target.files);
    // this.setState({
    //     photo : {
    //         ...this.state.photo,
    //         pic1 : e.target.files[0]
    //     }
    // });

    this.setState({
      photo: e.target.files[0],
    })
  }

  onFormSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('myImage', this.state.photo);
        // for(let i=0; i < this.state.photo.length; i++){
          // formData.append('myImage', this.state.photo[i]);
        // }
        // formData.append('description', this.state.myPost.description);
        console.log('formdata', formData);
        const config = {
            // withCredentials: true,
            headers: {
                'content-type': 'multipart/form-data'
            }
        };
        // let tempObj;
        // console.log('are you hit here?');
        // const res = await axios.post(`${process.env.REACT_APP_API}/api/v1/photo`, formData ,config)
        //     .then(  (response) => {
        //         // do nothing
        //         //parsedJson = response.json();
        //         console.log('it worked', response.data.newPost);
        //         tempObj =  response.data.newPost;
        //     }).catch((error) => {
        //         //alert('error');
        //         console.log('err', error);
        // });

        axios.post(`${process.env.REACT_APP_API}/api/v1/auth/photoUploading`, formData ,config)
          .then((response) => {
            console.log('what is response', response.data.file);
            // alert("upload successfully")
            console.log('what is user id in here?', localStorage.userId);
            this.setState({
              photo: response.data.file,
              authorId: localStorage.userId
            })
          }).catch((error) => {
        });

        // console.log('at this point, what is tempObj', tempObj);
        // this.setState({
        //     // posts: [...this.state.posts, tempObj],
        //     photo : {
        //             // description: '',
        //             pic1: null
        //         }
        // });
    }


  getPhoto = async() => {
    console.log('here?');
    try {
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/photo`, {
            credentials: 'include'
        });
        console.log(response.ok);

        if (!response.ok) {
            throw Error(response.statusText);
        }

        const parsedPhoto = await response.json();
        // console.log('get njnjnjmnj? parsedphoto?? ', parsedPhoto.data[9].pic1);//this is array form....

        this.setState({
            ...this.state.photos,
            photos: parsedPhoto.data,
        });
    } catch (err) {
        return err;
    }
}

// getOnePhoto = async() => {
//   // const houseId = window.location.pathname.split('/')[1];
//   try{
//     const response = await fetch(`${process.env.REACT_APP_API}/api/v1/photo`,  {
//       credentials: 'include'
//     })
//
//     if(!response.ok){
//       throw Error(response.statusText)
//     }
//
//     console.log('here?');
//     const photoParsed = await response.json();
//     // console.log(houseParsed.data)
//     console.log('photoparsed?', photoParsed);
//     console.log('???', photoParsed.data)
//     this.setState({
//         example: photoParsed.data,
//
//         // authorId: localStorage.getItem('authorId')
//     })
//
//   }catch(err){
//     return err
//   }
// }


  render(){
    console.log('this is what wer arejkdjf', this.state.photos.pic1);
    let picture = this.state.photos.pic1
    return (
      <div>
        <div className="container ml-5">
          <div className="row">
            <div className="">
              <form className="form-control" onSubmit={this.onFormSubmit} >
                 <input className="form-group" type='file' name="myImage" onChange={this.onChange}/>
                 <button type='submit'>upload</button>
              </form>
            </div>
          </div>
        </div>
        <PhotoComponent allPhotos={this.state.photos} />
      </div>
    )
  }
}
export default PhotoContainer


// <img src={"http://localhost:9000/uploads/myImage-function now() { [native code] }.jpg"} />
// // <form className="" onSubmit={this.onFormSubmit} ref="createPostForm" >
// //    <input type='file' name="myImage" onChange={this.onChange}/>
// //    <button type='submit'>upload</button>
// // </form>
