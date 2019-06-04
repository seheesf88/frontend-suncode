import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';

// import Nav from '../Nav';
// import MyHouseComponenet from '../MyHouseComponenet';


class QuizContainer extends Component {
  constructor(){
    super()
    this.state = {

      }
    }

  render(){
    return (
      <div>
      <div className="mt-5 ml-5 container">
        <div className="row">
          <div><img src="Logo_ElectriCasa-05.png" className="logo"/></div>
          <div className="electriCasa ml-2">ElectriCasa</div>
        </div>
      </div>
        <div className="container">
          <div className="row">
            <div className="col-6 offset-3 border px-5 py-5">
              <h3 className="text-center mt-3 mb-5">Just few questions to get to know you</h3>
              <form>
                <div className="mb-5">
                  <div className="mb-1">Q.Do you rent or own your home?</div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="1" id="yes1" value="option1" checked/>
                      <label className="form-check-label" htmlFor="yes1"> Yes.</label>
                    </div>
                    <div className="form-check">
                      <input className="form-check-input" type="radio" name="1" id="no1" value="option2"/>
                      <label className="form-check-label" htmlFor="no1"> No.</label>
                    </div>
                  </div>
                <div className="mb-5">
                  <div className="mb-1">Q.Do you have solar panels?</div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="2" id="yes2" value="option1" checked/>
                    <label className="form-check-label" htmlFor="yes2"> Yes.</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="2" id="no2" value="option2"/>
                    <label className="form-check-label" htmlFor="no2"> No.</label>
                  </div>
                </div>
                <div className="mb-5">
                  <div className="mb-1">Q.Do you have an electric vehicle?</div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="3" id="yes3" value="option1" checked/>
                    <label className="form-check-label" htmlFor="yes3"> Yes.</label>
                  </div>
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="3" id="no3" value="option2"/>
                    <label className="form-check-label" htmlFor="no3"> No.</label>
                  </div>
                </div>
                <Link to="/login">Submit</Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default QuizContainer
