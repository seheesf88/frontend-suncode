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
        this.props.history.push('/')
      }

    }catch(err){
      console.log('logout fail', err);
    }
  }

  render(){
    return(
      <div>
        <div><span><img src="Logo_ElectriCasa-05.png" /></span><span>ElectriCasa</span></div>
        <div className="nav">
          <div className="nav-item">
            <div><Link to="/home">home</Link></div>
          </div>
          <div className="nav-item">
            <div><Link to="/home">Quiz</Link></div>
          </div>
          <div className="nav-item">
            <button className="logout" onClick={this.logout}>Logout</button>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Nav)
