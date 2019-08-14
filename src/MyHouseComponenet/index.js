import React from 'react';
import './MyHouseComponenet.css';
import { Link } from 'react-router-dom'

const MyHouseComponenet = (props) => {
  console.log('what is props? ====> ', props);
  const myHouse = props.allHouses.map(house => {
    if(house.userId === localStorage.getItem('userId')){
    return(
      <div className="house border col-4 my-5 pt-5 pb-1 ml-3" key={house._id}>
          <div className="text-center"><Link to={`/${house._id}`}><img className="mainPhoto" src={`${process.env.REACT_APP_API}/` + house.productImage} /></Link></div>
          <div className="mt-5 mb-3 ml-3">
            <div>{house.address}</div>
            <div>{house.state}</div>
            <div>{house.zipcode}</div>
          </div>
          <div className="container mb-1 mt-5">
            <div className="row pl-5">
            <Link className="close pt-2 mr-3" to={`/${house._id}/edit`}>Edit</Link>
            <button className="close pt-2 ml-0" type="button" onClick={props.deleteHouse.bind(null, house._id)}>Delete</button>
            </div>
          </div>
          <div className="postingTime">{house.postingTime}</div>
      </div>
      )
    }
  });

  return (
    <div className="">
      <div className="container">
        <div className="row">

          {myHouse}
          <div className="create col-3 my-5 pt-5 pb-1 ml-1"><Link to="/create"><img id="create" src="../icon/plus.png" /></Link></div>
        </div>

      </div>
    </div>
  )
}

export default MyHouseComponenet


// import React from 'react';
// import { Link } from 'react-router-dom'
//
// const MyHouseComponenet = (props) => {
//   const myHouse = props.allHouses.map(house => {
//     if(house.userId === localStorage.getItem('userId')){
//     return(
//       <tr key={house._id}>
//           <td><Link to={`/${house._id}`}><img className="mainPhoto" src={`${process.env.REACT_APP_API}/` + house.productImage} /></Link></td>
//           <td>{house.address}</td>
//           <td>{house.state}</td>
//           <td>{house.zipcode}</td>
//           <td><Link className="btn btn-primary" to={`/${house._id}/edit`}>Edit</Link>
//           <button className="close pt-2 ml-0" type="button" onClick={props.deleteHouse.bind(null, house._id)}><span className="pr-5">X</span></button>
//           </td>
//       </tr>
//       )
//     }
//   });
//
//   return (
//
//     <div className="container">
//         <table className="table table-striped text-center">
//           <thead>
//             <tr>
//               <th scope="col">
//                 Image
//               </th>
//               <th scope="col">Address</th>
//               <th scope="col">State</th>
//               <th scope="col">Zipcode</th>
//               <th scope="col">Edit/Remove</th>
//             </tr>
//           </thead>
//           <tbody>
//             {myHouse}
//           </tbody>
//         </table>
//     </div>
//   )
// }
//
// export default MyHouseComponenet
