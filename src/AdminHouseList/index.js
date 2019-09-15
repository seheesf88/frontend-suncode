import React from 'react';
import { Link } from 'react-router-dom';
import './AdminHouseList.css';

const AdminHouseList = (props) => {
  const myHouse = props.myHouse.map(house => {
    // console.log('myhouse???====>?', props.myHouse);
    console.log('>>>>>', house);
    // if(house.authorId === localStorage.getItem('userId')){
    return(
        <tr key={house._id}>
          <td>{
            // house.postingTime.slice(0, 25)
          }</td>
          <td><Link to={`/${house._id}`}>{house.address}</Link></td>
          <td>{house.username}</td>
          <td>{house.year}</td>
          <td>{house.sqft}</td>
          <td>
            {house.status === undefined ?
              <span>In-prgress</span> :
              <span id="houseStatus">{house.status}</span>
            }
          </td>
          <td><Link className="btn btn-primary" to={`/${house._id}/edit`}>Exam</Link></td>
          <td><button className="close pt-2 ml-0" type="button" onClick={props.deleteHouse.bind(null, house._id)}><span className="pr-5">X</span></button></td>
      </tr>
      )
    // }
  });

  return (

    <div className="container-table">
        <table className="table table-striped text-center">
          <thead>
            <tr className="table-row">
              <th className="col" scope="col">Posting Time (PST)</th>
              <th className="col" scope="col">Street</th>
              <th className="col" scope="col"><div>Home</div><div>Owner</div></th>
              <th className="col" scope="col">Year</th>
              <th className="col" scope="col">Sqft</th>
              <th className="col" scope="col">status</th>
              <th className="col" scope="col">Exam</th>
              <th className="col" scope="col">Remove</th>
            </tr>
          </thead>
          <tbody>
            {myHouse}
          </tbody>
        </table>
    </div>
  )
}

export default AdminHouseList
