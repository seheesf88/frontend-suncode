import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './NavHome.css';




class NavHome extends Component{
  constructor(){
    super()
    this.state = {
      userinfo: {
        email:'',
        password: '',
        username:'',
        name: '',
      },
    }
  }


  getUserInfo = async() => {
      const userId = localStorage.getItem('userId');
      console.log(userId);
      try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/` + userId, {
          credentials: 'include'
        })

        if(!response.ok){
          throw Error(response.statusText)
        }


        const parsedResponse = await response.json();

        this.setState({
          userinfo: parsedResponse.data
        })

      }catch(err){
        console.log('getuserinfo func fail', err);
      }
  }

  logout = async() => {
    console.log('here?');
    const userId = localStorage.getItem('userId')
    console.log('userId?', userId);
    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth/logout`, {
        credentials: 'include'
      });
      console.log('response', response);
      console.log('true?', !response.ok);
      if(!response.ok){
        throw Error(response.statusText)
      }

      const responseParsed = await response.json();
      console.log('responseParsed', responseParsed);

      if(response.status === 200){
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
        <div className="navHome">
          <img id="logo" className="logo" src="../icon/greenbanc.png" />

          <div className="nav-home-menu" >
            <div className="nav-item-home">
              <Link to="/home" style={{ textDecoration: 'none' }}><div className="navItem-home">About us</div></Link>
            </div>
            <div className="nav-item-home">
              <Link to="/myaccount" style={{ textDecoration: 'none' }}><div className="navItem-home">GreenBanc</div></Link>
            </div>
        
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(NavHome);
