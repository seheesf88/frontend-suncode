import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
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

    deleteMyacc = async(e) => {
     e.preventDefault()

     try{
       const userId = localStorage.getItem('userId');
       const response = await fetch(`${process.env.REACT_APP_API}/api/v1/users/` + userId, {
         method: 'DELETE',
         credentials: 'include'
       });

       if(!response.ok){
         throw Error(response.statusText)
       }

       const responseParsed = await response.json();

       if(responseParsed.status === 200){
         localStorage.removeItem('userId')
         this.props.history.push('/')
       }else{
         console.log('this is fail')
       }


     }catch(err){
       alert('delete is failed')
       console.log('delete is fail')
     }

   }


  render(){
    console.log(this.state.myInfo.email);
    return(
      <div>
        <Nav />
        <div>
          <div className="account_container">
            <div className="account_title">Account</div>

            <div className="row_account">
              <div className="col_one_account">
                <div>Personal Information</div>
                <div>Email</div>
                <div>Phone Number</div>
                <div>Email Notice</div>
                <div>Mobile Notice</div>
                <div>Account Plan</div>
                <div>Privacy and Settings</div>
              </div>
              <div className="col_two_account">
                <div>{this.state.myInfo.firstName}<span> </span>{this.state.myInfo.lastName}</div>
                <div>{this.state.myInfo.email}</div>
                <div>{this.state.myInfo.phNumber}</div>
                <div>{this.state.myInfo.emailNotice === 'on' ? <div>ON</div> :  <div>OFF</div>}</div>
                <div>{this.state.myInfo.mobileNotice === 'on' ? <div>ON</div> :  <div>OFF</div>}</div>
                <div>Free</div>
                <div><Link to="/termsofuse">View Terms of Use</Link></div>
                <form onSubmit={this.deleteMyacc}>
                  <button type="submit">Delete</button>
                </form>

              </div>

          </div>

          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(MyAccountContainer);
