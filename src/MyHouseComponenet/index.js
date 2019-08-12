import React from 'react';
import { Link } from 'react-router-dom'

const MyHouseComponenet = (props) => {
  const myHouse = props.myHouse.map(house => {
    if(house.userId === localStorage.getItem('userId')){
    return(
      <tr key={house._id}>
          <td><Link to={`/${house._id}`}>{house.street}</Link></td>
          <td>{house.year}</td>
          <td>{house.sqft}</td>
      </tr>
      )
    }
  });

  return (

    <div className="container">
        <table className="table table-striped text-center">
          <thead>
            <tr>
              <th scope="col">Street</th>
              <th scope="col">Year</th>
              <th scope="col">Sqft</th>
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
