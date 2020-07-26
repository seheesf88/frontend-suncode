import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import './Nav.scss';




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
    const home = "/home"

    return(
      <div className="container">
        <div className="">
        { localStorage.getItem('userId') !== null ?


          <div>
            <div className="container_nav">
              <div className="items_nav">
                <Link to='/'>
                  <div className="container_logo">
                    <div className="logo_img"><img src="Logo.png" /></div>
                    <div className="logo_text"><img src="electricasa.png" /></div>
                  </div>
                </Link>
              </div>
              <div className="items_nav">
                <Link to="/login" className="login_btn" style={{textDecoration : 'none', color:'black', fontSize:'16px'}}>Login</Link>
              </div>
            </div>
          </div>
        :
          <div>
            <div className="container_nav">
              <div className="items_nav">
                <Link to='/'>
                  <div className="container_logo">
                    <div className="logo_img"><img src="Logo.png" /></div>
                    <div className="logo_text"><img src="electricasa.png" /></div>
                  </div>
                </Link>
              </div>
              <div className="items_nav">
                <div className="item_nav">
                  <Link to='/home' style={{textDecoration : 'none', color:'black', fontSize:'16px'}}>Electrify</Link>
                </div>
                <div className="item_nav">
                  <Link to='/mycasa' style={{textDecoration : 'none', color:'black', fontSize:'16px'}}>My Casa</Link>
                </div>
                <div className="item_nav">
                  <Link to='/project' style={{textDecoration : 'none', color:'black', fontSize:'16px'}}>Projects</Link>
                </div>
                <div className="item_nav">
                  <Link to='/myaccount' style={{textDecoration : 'none', color:'black', fontSize:'16px'}}>Account</Link>
                </div>
                <div className="item_nav">
                  <input type="submit" value="Logout" className="logout_btn" onClick={this.logout} />
                </div>
              </div>
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
