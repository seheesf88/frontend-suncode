import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';



class Nav extends Component{
  constructor(){
    super()
  }

  logout = async() => {
    const userId = localStorage.getItem('userId')
    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth/logout`, {
        credentials: 'include'
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      const responseParsed = await response.json();
      if(responseParsed.status === 200){
        localStorage.removeItem('userId')
        localStorage.removeItem('username')
        this.props.history.push('/login')
      }

    }catch(err){
      console.log('logout fail', err);
    }
  }

  render(){
    return(
      <div>
        <div className="mt-5 ml-5 container">
          <div className="row">
            <div>
              <img src="Logo_ElectriCasa-05.png" className="logo"/>
            </div>
            <div className="electriCasa ml-2">
              ElectriCasa
            </div>
          </div>
        </div>
        <ul className="nav justify-content-center">
          <li className="nav-item ml-5">
            <div><Link to="/home">home</Link></div>
          </li>
          <li className="nav-item ml-5">
            <div><Link to="/home">Quiz</Link></div>
          </li>
          <li className="nav-item ml-5">
            <button className="logout" onClick={this.logout}>Logout</button>
          </li>
        </ul>
      </div>
    )
  }
}

export default withRouter(Nav)
