import React from 'react';
import { Link } from 'react-router-dom'

const MyHouseComponenet = (props) => {
  const myHouse = props.allHouses.map(house => {
    if(house.userId === localStorage.getItem('userId')){
    return(
      <tr key={house._id}>
          <td><Link to={`/${house._id}`}><img className="mainPhoto" src={`${process.env.REACT_APP_API}/` + house.productImage} /></Link></td>
          <td>{house.address}</td>
          <td>{house.state}</td>
          <td>{house.zipcode}</td>
          <td><Link className="btn btn-primary" to={`/${house._id}/edit`}>Edit</Link>
          <button className="close pt-2 ml-0" type="button" onClick={props.deleteHouse.bind(null, house._id)}><span className="pr-5">X</span></button>
          </td>
      </tr>
      )
    }
  });

  return (

    <div className="container">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">
                Image
              </th>
              <th scope="col">Address</th>
              <th scope="col">State</th>
              <th scope="col">Zipcode</th>
              <th scope="col">Edit/Remove</th>
            </tr>
          </thead>
          <tbody>
            {myHouse}
          </tbody>
        </table>
    </div>
  )
}

export default MyHouseComponenet

// <td><Link className="btn btn-primary" to={`/${house._id}/edit`}>Edit</Link>
// <button className="close pt-2 ml-0" type="button" onClick={props.deleteHouse.bind(null, house._id)}><span className="pr-5">X</span></button>
// </td>
