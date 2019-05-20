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
      <ul className="nav">
        <li className="nav-item mx-3">
            <Link to="/home" >home</Link>
        </li>
        <li className="nav-item mx-3" id="logout">
            <button onClick={this.logout}>Logout</button>
        </li>
      </ul>
    </div>
  )
}
}
export default withRouter(Nav)
