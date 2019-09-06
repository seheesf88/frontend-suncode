import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import './ShowHouse.css';

const ShowHouseComponent = (props) => {
  console.log('what is props????====>', props);
  console.log('what is props.showHouse.address??======>', props.showHouse.address );
  return(
    <div className="container">
      <div className="text-center mt-4 pb-5">
        <h1>{props.showHouse.address}</h1>
          {
           `{props.showHouse.status} === checking` ?
            <div className="green border">1</div> :
            <div className="red">2</div>
          }
      </div>
      <div className="container">
        <div className="row mb-4">
          <div className="col-4 ml-4 mt-5">
            <img src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage1} height={300} width={360}/>
          </div>
          <div className="col-6 offset-1 mb-5 mt-5">
            <div className="row">
              <div className="col-4 offset-1 mt-3 mb-5">
                <p className="infoList">Address :</p>
                <p className="infoList">Address2 :</p>
                <p className="infoList">State :</p>
                <p className="infoList">Zipcode :</p>
                <p className="infoList">Year :</p>
                <p className="infoList">Sqft :</p>
                <p className="infoList">Memo :</p>
              </div>
              <div className="col-4 offset-1 mt-3">
                <p className="infoData">{props.showHouse.address}</p>
                <p className="infoData">{props.showHouse.address2}</p>
                <p className="infoData">{props.showHouse.state}</p>
                <p className="infoData">{props.showHouse.zipcode}</p>
                <p className="infoData">{props.showHouse.year}</p>
                <p className="infoData">{props.showHouse.sqft}</p>
                <p className="infoData">{props.showHouse.memo}</p>
              </div>
            </div>
            <div className="row offset-3 mt-2">
              <span className="mr-5"><Link className="btn btn-success" to="/home">Question?</Link></span>
              <span className=""><Link className="btn btn-success" to="/home">Buy</Link></span>
            </div>
          </div>
          <div className="container border my-5 py-5">
            <div className="row">
              <div className="col-4 ml-4">
                <img src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage2} height={300} width={360}/>
              </div>
              <div className="col-6 offset-1">
                <div className="row">
                  <div className="col-4 offset-1 mt-3">
                    <p className="infoList">WH year :</p>
                    <p className="infoList">WH EF :</p>
                    <p className="infoList">WH Fuel :</p>
                  </div>
                  <div className="col-4 offset-1 mt-3">
                    <p className="infoData">{props.showHouse.whyear}</p>
                    <p className="infoData">{props.showHouse.whef}</p>
                    <p className="infoData">{props.showHouse.whfuel}</p>
                  </div>
                </div>
                <div className="row offset-3 mt-5">
                  <span className="mr-5"><Link className="btn btn-success" to="/home">Question?</Link></span>
                  <span className=""><Link className="btn btn-success" to="/home">Buy</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className="container">
            <div className="row mb-4">
              <div className="col-4 ml-4">
                <img src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage3} height={300} width={360}/>
              </div>
              <div className="col-6 offset-1 pt-3">
                <div className="row">
                  <div className="col-4 offset-1 mt-3">
                    <p className="infoList">Heating Year :</p>
                    <p className="infoList">Heating EF :</p>
                    <p className="infoList">Heating Fuel :</p>
                  </div>
                  <div className="col-4 offset-1 mt-3">
                    <p className="infoData">{props.showHouse.heatyear}</p>
                    <p className="infoData">{props.showHouse.heatef}</p>
                    <p className="infoData">{props.showHouse.heatfuel}</p>
                  </div>
                </div>
                <div className="row offset-3 mt-5">
                  <span className="mr-5"><Link className="btn btn-success" to="/home">Question?</Link></span>
                  <span className=""><Link className="btn btn-success" to="/home">Buy</Link></span>
                </div>
              </div>
            </div>
          </div>
          <div className="container border my-5 py-5">
            <div className="row mb-4">
              <div className="col-4 ml-4">
                <img src={`${process.env.REACT_APP_API}/` + props.showHouse.productImage4} height={300} width={360}/>
              </div>
              <div className="col-6 offset-1 mt-5">
                <div className="row">
                  <div className="col-5 offset-1 mt-3">
                    <p className="infoList">Attic Insulation :</p>
                    <p className="infoList">Memo :</p>
                  </div>
                  <div className="col-4 offset-1 mt-3">
                    <p className="infoData">{props.showHouse.attic}</p>
                    <p className="infoData">{props.showHouse.memo2}</p>
                  </div>
                </div>
                <div className="row offset-3 mt-5">
                  <span className="mr-5"><Link className="btn btn-success" to="/home">Question?</Link></span>
                  <span className=""><Link className="btn btn-success" to="/home">Buy</Link></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ShowHouseComponent

//
// <p className="infoData">{props.house.attic}</p>
// <p className="infoData">{props.house.whyear}</p>
// <p className="infoData">{props.house.whef}</p>
// <p className="infoData">{props.house.whfuel}</p>
// <p className="infoData">{props.house.heatyear}</p>
// <p className="infoData">{props.house.heatef}</p>
// <p className="infoData">{props.house.heatfuel}</p>
// <p className="infoData">{props.house.status}</p>
// <p className="infoData">{props.house.memo2}</p>
