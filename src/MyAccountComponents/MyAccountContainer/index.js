import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import Nav from './../../Nav';
import './MyAccount.scss';


class MyAccountContainer extends Component{
  constructor(){
    super();
    this.state = {
      myInfo : {},
    }
  }

  componentDidMount(){
    this.getMyInfo()
  }

    getMyInfo = async() => {
      const userId = window.location.pathname.split('/')[2];

      try{
        const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/${userId}`,  {
          credentials: 'include'
        })

        if(!response.ok){
          throw Error(response.statusText)
        }

        const userParsed = await response.json();
        console.log(userParsed.user);
        this.setState({
            myInfo: userParsed.user,
        })

      }catch(err){
        return err
      }
    }


  render(){
    console.log(this.state.myInfo.email);
    return(
      <div>
        <Nav />
        <div>
          <h2>MyAccount</h2>
          {this.state.myInfo.email}

        </div>
      </div>
    )
  }
}

export default withRouter(MyAccountContainer);
