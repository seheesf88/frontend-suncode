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



  // if (localStorage.getItem('userId') !== null) {
  //   console.log('USER IS LOGGED IN')
  // } else if(props.location.pathname !== '/') {
  //   props.history.push('/')
  // }
  render(){
    const userId = localStorage.getItem('userId');
    const home = "/home/" + userId

    return(
      <div className="">
        <div className="">
        { localStorage.getItem('userId') === null ?
          <div className="">
            <Link to="/login">Login</Link>
          </div>
        :
          <div>
            <div className="">
              <Link to='/home' >Electrify</Link>
            </div>
            <div className="">
              <Link to='/create' >My Casa</Link>
            </div>
            <div className="">
              <Link to='/'>Projects</Link>
            </div>
            <div className="">
              <Link to='/myaccount'>Account</Link>
            </div>
            <div className="">
              <input type="submit" value="Logout" className="" onClick={this.logout} />
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
// return(
//   <div className="navBar">
//     <div>
//     { localStorage.getItem('userId') !== '5d7e9d844eb54d001728cf31'
//     ?
//
//     <div className="nav true" >
//       <div className="nav-item">
//         <Link to={`${home}`} style={{ textDecoration: 'none' }}><div className="navItem">Home</div></Link>
//       </div>
//       <div className="nav-item">
//         <Link to="/myaccount" style={{ textDecoration: 'none' }}><div className="navItem">My Account</div></Link>
//       </div>
//       <div className="nav-item">
//         <Link to="/resources" style={{ textDecoration: 'none' }}><div className="navItem">Resources</div></Link>
//       </div>
//       <div className="nav-item">
//         <input type="submit" value="Logout" className="logout" onClick={this.logout} />
//       </div>
//     </div>
//     :
//
//     <div className="nav false" >
//       <div className="nav-item">
//         <Link to="/adminhome" style={{ textDecoration: 'none' }}><div className="navItem">House List</div></Link>
//       </div>
//       <div className="nav-item">
//         <Link to="/myaccount" style={{ textDecoration: 'none' }}><div className="navItem">My Account</div></Link>
//       </div>
//       <div className="nav-item">
//         <input type="submit" value="Logout" className="logout" onClick={this.logout} />
//       </div>
//     </div>
//
//     }
//     </div>
//   </div>
// )
// }
// }
//
// export default withRouter(Nav);
