import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ShowHouse.css';

const ShowHouseComponent = (props) => {
  console.log('dfdfd', typeof props.showHouse.productImage1);
  const img = props.showHouse.productImage1
  return(
    <div className="showHouseComponent">
    <div className="houseName">
        <h1>{props.showHouse.address}</h1>
          {
           props.showHouse.status === `completed` ?
            <div className="status" id="green">Completed</div> :
            <div className="status" id="red">In-progress</div>
          }
      </div>
      <div>
        <button onClick={props.deleteHouse.bind(null, props.showHouse._id)}>Delete</button>
      </div>
      <div>
        <Link to={`/${props.showHouse._id}/edit`} style={{ textDecoration: 'none' }}>Edit</Link>
      </div>

        <div className="container-show">
          <div className="crop">
            <img className="pic-show" src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage1} />
          </div>
           <div className="container-info">
            <div className="infoList-container">
              <div className="infoList">Address :</div>
              <div className="infoList">City :</div>
              <div className="infoList">State :</div>
              <div className="infoList">Zipcode :</div>
              <div className="infoList">Year :</div>
              <div className="infoList">Sqft :</div>
              <div className="infoList">Memo :</div>
            </div>
            <div className="infoData-container">
              <div className="infoData">{props.showHouse.address}</div>
              <div className="infoData">{props.showHouse.city}</div>
              <div className="infoData">{props.showHouse.state}</div>
              <div className="infoData">{props.showHouse.zipcode}</div>
              <div className="infoData">{props.showHouse.year}</div>
              <div className="infoData">{props.showHouse.sqft}</div>
              <div className="infoData">{props.showHouse.memo}</div>
            </div>
           </div>
        </div>


      <div className="container-show">
        <div className="crop">
          <img className="pic-show" src={`"` + props.showHouse.productImage2 + `"`}/>
        </div>
          <div className="container-info">
            <div className="infoList-container">
              <p className="infoList">WH year :</p>
              <p className="infoList">WH EF :</p>
              <p className="infoList">WH Fuel :</p>
            </div>
            <div className="infoData-container">
              <p className="infoData">{props.showHouse.whyear}</p>
              <p className="infoData">{props.showHouse.whef}</p>
              <p className="infoData">{props.showHouse.whfuel}</p>
            </div>
          </div>
        </div>

      <div className="container-show">
        <div className="crop">
          <img className="pic-show" src={props.showHouse.productImage3} />
        </div>
        <div className="container-info">
          <div className="infoList-container">
            <p className="infoList">Heating Year :</p>
            <p className="infoList">Heating EF :</p>
            <p className="infoList">Heating Fuel :</p>
          </div>
          <div className="infoData-container">
            <p className="infoData">{props.showHouse.heatyear}</p>
            <p className="infoData">{props.showHouse.heatef}</p>
            <p className="infoData">{props.showHouse.heatfuel}</p>
          </div>
        </div>
      </div>
      <div className="container-show">
        <div className="crop">
          <img className="pic-show" src={ `${process.env.REACT_APP_API}/` + props.showHouse.productImage4} />
        </div>
        <div className="container-info">
          <div className="infoList-container">
            <p className="infoList">Attic Insulation :</p>
            <p className="infoList">Memo :</p>
          </div>
          <div className="infoData-container">
            <p className="infoData">{props.showHouse.attic}</p>
            <p className="infoData">{props.showHouse.memo2}</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default ShowHouseComponent
// `${process.env.REACT_APP_API}/` +

//
// const ShowHouseComponent = (props) => {
//   console.log(props);
//   return(
//     <div className="showHouseComponent">
//       <div className="houseName">
//         <h1>{props.showHouse.address}</h1>
//           {
//            props.showHouse.status === `completed` ?
//             <div className="status" id="green">Completed</div> :
//             <div className="status" id="red">In-progress</div>
//           }
//       </div>
//       <div>
//         <button onClick={props.deleteHouse.bind(null, props.showHouse._id)}>Delete</button>
//       </div>
//
//         <div className="container-show">
//           <div className="crop">
//             <img className="pic-show" src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage1} />
//           </div>
//            <div className="container-info">
//             <div className="infoList-container">
//               <div className="infoList">Address :</div>
//               <div className="infoList">Address 2 :</div>
//               <div className="infoList">State :</div>
//               <div className="infoList">Zipcode :</div>
//               <div className="infoList">Year :</div>
//               <div className="infoList">Sqft :</div>
//               <div className="infoList">Memo :</div>
//             </div>
//             <div className="infoData-container">
//               <div className="infoData">{props.showHouse.address}</div>
//               <div className="infoData">{props.showHouse.address2}</div>
//               <div className="infoData">{props.showHouse.state}</div>
//               <div className="infoData">{props.showHouse.zipcode}</div>
//               <div className="infoData">{props.showHouse.year}</div>
//               <div className="infoData">{props.showHouse.sqft}</div>
//               <div className="infoData">{props.showHouse.memo}</div>
//             </div>
//            </div>
//         </div>
//
//
//       <div className="container-show">
//         <div className="crop">
//           <img className="pic-show" src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage2} />
//         </div>
//           <div className="container-info">
//             <div className="infoList-container">
//               <p className="infoList">WH year :</p>
//               <p className="infoList">WH EF :</p>
//               <p className="infoList">WH Fuel :</p>
//             </div>
//             <div className="infoData-container">
//               <p className="infoData">{props.showHouse.whyear}</p>
//               <p className="infoData">{props.showHouse.whef}</p>
//               <p className="infoData">{props.showHouse.whfuel}</p>
//             </div>
//           </div>
//         </div>
//
//       <div className="container-show">
//         <div className="crop">
//           <img className="pic-show" src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage3} />
//         </div>
//         <div className="container-info">
//           <div className="infoList-container">
//             <p className="infoList">Heating Year :</p>
//             <p className="infoList">Heating EF :</p>
//             <p className="infoList">Heating Fuel :</p>
//           </div>
//           <div className="infoData-container">
//             <p className="infoData">{props.showHouse.heatyear}</p>
//             <p className="infoData">{props.showHouse.heatef}</p>
//             <p className="infoData">{props.showHouse.heatfuel}</p>
//           </div>
//         </div>
//       </div>
//       <div className="container-show">
//         <div className="crop">
//           <img className="pic-show" src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage4} />
//         </div>
//         <div className="container-info">
//           <div className="infoList-container">
//             <p className="infoList">Attic Insulation :</p>
//             <p className="infoList">Memo :</p>
//           </div>
//           <div className="infoData-container">
//             <p className="infoData">{props.showHouse.attic}</p>
//             <p className="infoData">{props.showHouse.memo2}</p>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }
