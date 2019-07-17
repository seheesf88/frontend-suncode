
import React from 'react';
// import Cookies from 'universal-cookie';

const PhotoComponent = (props) => {
    console.log(props.allPhotos);
    const photoCss = {
      height: 200,
      width: 200
    }
    const photos = props.allPhotos.map((photo) => {
        return (
              // if(photo.id === localStorage.useId){
              <img src={`${process.env.REACT_APP_API}/` + photo.pic1} style={photoCss}/>
              // }
            )}
          )
    return(
        <div>
          <div> {photos} </div>
          <div>It should be four photos...</div>
          
        </div>
    )
}


export default PhotoComponent;
