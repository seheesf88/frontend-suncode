import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.css';




class Nav extends Component{
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
    const userId = localStorage.getItem('userId')
    try{
      const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth/logout`, {
        credentials: 'include'
      });

      if(!response.ok){
        throw Error(response.statusText)
      }

      const responseParsed = await response.json();

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
    const userId = localStorage.getItem('userId');
    const home = "/home/" + userId

    return(
      <div className="navBar">
        <div>
        { localStorage.getItem('userId') !== '5d7e9d844eb54d001728cf31'
        ?

        <div className="nav true" >
          <div className="nav-item">
            <Link to={`${home}`} style={{ textDecoration: 'none' }}><div className="navItem">Home</div></Link>
          </div>
          <div className="nav-item">
            <Link to="/myaccount" style={{ textDecoration: 'none' }}><div className="navItem">My Account</div></Link>
          </div>
          <div className="nav-item">
            <Link to="/resources" style={{ textDecoration: 'none' }}><div className="navItem">Resources</div></Link>
          </div>
          <div className="nav-item">
            <input type="submit" value="Logout" className="logout" onClick={this.logout} />
          </div>
        </div>
        :

        <div className="nav false" >
          <div className="nav-item">
            <Link to="/adminhome" style={{ textDecoration: 'none' }}><div className="navItem">House List</div></Link>
          </div>
          <div className="nav-item">
            <Link to="/myaccount" style={{ textDecoration: 'none' }}><div className="navItem">My Account</div></Link>
          </div>
          <div className="nav-item">
            <input type="submit" value="Logout" className="logout" onClick={this.logout} />
          </div>
        </div>

        }
        </div>
      </div>
    )
  }
}

export default withRouter(Nav);

//
// <div className="mt-5 mb-3 ml-5 container">
//   <div className="row">
//     <div className="col-4 offset-4 text-center">
//       <div className="">
//         <Link to="/home">
//           <img src="Logo_ElectriCasa-05.png" className="logo"/>
//         </Link>
//       </div>
//       <div className="">
//         ElectriCasa
//       </div>
//     </div>
//   </div>
// </div>
