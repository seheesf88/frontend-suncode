import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import './RegisterLoginContainer.scss';
///



class RegisterLoginContainer extends Component{
  constructor(){
    super();
    this.state = {
      login : {
        email:'',
        password: '',
        successful: false
      },
      register: {
        firstName:'',
        lastName:'',
        phNumber:'',
        email: '',
        password:'',
        emailNotice:'',
        mobileNotice:''
      },
      loginButton: false
    }
  }


  handleRegisterChange = (e) => {
    const updatedChange = {
      ...this.state.register
    }

    updatedChange[e.target.name] =  e.target.value;
    console.log(e.target.name, e.target.value);
    this.setState({
      register: updatedChange
    })
  }


  handleRegisterSubmit = (e) => {
    e.preventDefault();
    const updatedRegister = {
      ...this.state.register
    }

    // const strongRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})");
    // strongRegex.test(updatedRegister.password)
    // console.log("yea??", strongRegex.test(updatedRegister.password));
    // ======================== if statement =========
    // if(this.state.register.pre_password !== this.state.register.password){
    //     alert('password is not matching')
    // }

    if(true){
      this.fetchRegister(updatedRegister)
      this.setState({
        register: {
          firstName: '',
          lastName: '',
          email: '',
          phNumber: '',
          password: '',
          emailNotice: '',
          mobileNotice: ''
        }
      })
    }else{
      this.setState({
        register: updatedRegister
      })
    }
  }

 fetchRegister = async(updatedRegister) => {

   try{
     const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth`, {
       method: 'POST',
       credentials: 'include',
       body: JSON.stringify(updatedRegister),
       headers: {
         'Content-Type': 'application/json'
       }
     })

     if(!response.ok){
       throw Error(response.statusText)
     }

    const parsedResponse = await response.json();


    if(parsedResponse.status === 400){
      alert('This Email is already registered. Please use other email address or go to forgot password')
    }else if(parsedResponse.status === 200){
      localStorage.setItem('userId', parsedResponse.userId)
      this.props.history.push('/home')
    }else{
      alert('I am sorry, there is error. Please visit us later')
    }

   }catch(err){
     console.log('Register failed...', err);
   }
 }

 //================== LogIn =======================

 handleLoginChange = (e) => {
   const updatedChange = {
     ...this.state.login
   }
   updatedChange[e.target.name] = e.target.value;

   this.setState({
     login: updatedChange
   })
 }


 handleLoginSubmit = (e) => {
   e.preventDefault();
   const updatedLogin = {
     ...this.state.login
   }

   this.fetchLogin(updatedLogin)
 }

 fetchLogin = async(updatedLogin) => {
   try{
     const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
       method: 'POST',
       credentials: 'include',
       body: JSON.stringify(updatedLogin),
       headers: {
         'Content-Type' : 'application/json'
       }
     })

     if(!response.ok){
       throw Error(response.statusText);
     }

     const parsedResponse = await response.json();

     if(parsedResponse.status === 200){
       updatedLogin.successful = true;
       this.setState({
         login: updatedLogin
       })


      localStorage.setItem('userId', parsedResponse.userId)
      this.props.history.push('/home')

     }else{
       alert('login fail')
     }
   }catch(err){
     console.log(err);
     alert("catch err???")
   }
 }

 buttonChange = (e) => {
   e.preventDefault();
   this.setState({
     loginButton: !this.state.loginButton
   });
 }


  render(){

    const changeOne = (
      <button onClick={this.buttonChange} className="signupBtn">Sign up</button>
    );

    const changeTwo = (
      <button onClick={this.buttonChange} id="logbtn">LOG IN</button>
    );

    const pathname = window.location.pathname

    return(
      <div>
        <div className="container_nav">
            <Link to='/'>
              <div className="container_logo">
                <div className="logo_img"><img src="Logo.png"/></div>
                <div className="logo_text"><img src="electricasa.png" /></div>
              </div>
            </Link>
            { this.state.loginButton === true
            ?
            <div id="login">{changeTwo}</div>
            :
            <div></div>
            }
        </div>
        <div className="container_regLog">
        { !this.state.loginButton ?
          <div className="container_loginbox">
            <form onSubmit={this.handleLoginSubmit} className="form_container">
              <div className="label_input" style={{marginBottom: '25px'}}>
                <label htmlFor="email" className="label">EMAIL</label>
                <input className="form_input" id="email" name="email" type="text" value={this.state.login.email} onChange={this.handleLoginChange} required/>
              </div>
              <div className="label_input" style={{marginBottom: '29px'}}>
                <label htmlFor="password" className="label">PASSWORD</label>
                <input className="form_input" id="password" name="password" type="password" value={this.state.login.password} onChange={this.handleLoginChange} required/>
              </div>
                <input className="btn_item" type="submit" value="Forgot your password?" style={{marginBottom: '25px'}}/>
              <div className="regLogBtn_container" style={{marginBottom: '40px'}}>
                <button className="regLogBtn logBtn form_input" type="submit">LOG IN</button>
              </div>
            </form>
            <div className="signup">
              <div>Don't have an account? {changeOne}</div>
            </div>
          </div>
          :
          <div className="regLog_sub_container">
            <form onSubmit={this.handleRegisterSubmit} className="container_regbox">
              <div className="label_input">
                <label htmlFor="firstName" className="label">FIRST NAME</label>
                <input className="form_input" id="firstName" name="firstName" type="text" value={this.state.register.firstName} onChange={this.handleRegisterChange} required />
              </div>
              <div className="label_input">
                <label htmlFor="lastName" className="label">LAST NAME</label>
                  <input className="form_input" id="lastName" name="lastName" type="text" value={this.state.register.lastName} onChange={this.handleRegisterChange} required />
              </div>
              <div className="label_input">
                <label htmlFor="email" className="label">EMAIL</label>
                  <input className="form_input" id="email" name="email" type="email" value={this.state.register.email} onChange={this.handleRegisterChange} required />
              </div>
              <div className="label_input">
                <label htmlFor="phNumber" className="label">PHONE NUMBER</label>
                  <input className="form_input" id="phNumber" name="phNumber" type="text" value={this.state.register.phNumber} onChange={this.handleRegisterChange} required />
              </div>
              <div className="label_input">
                <label htmlFor="password" className="label">PASSWORD</label>
                  <input className="form_input" id="password" name="password" type="password" value={this.state.register.password} onChange={this.handleRegisterChange} required/>
              </div>
                <div className="notifications_container">
                  <label>
                    <input
                      className="notifications_checkbox"
                      name="emailNotice"
                      type="checkbox"
                      checked={this.state.register.emailNotice}
                      onChange={this.handleRegisterChange} />
                      Agree to receive email notifications
                  </label>
                  <label>
                    <input
                      className="notifications_checkbox"
                      name="mobileNotice"
                      type="checkbox"
                      checked={this.state.register.mobileNotice}
                      onChange={this.handleRegisterChange} />
                      Agree to receive mobile push notifications
                  </label>
                </div>
                <div className="regLogBtn_container">
                  <button className="regLogBtn regBtn form_input" type="submit">SIGN UP</button>
                </div>
            </form>
          </div>
        }
        </div>
      </div>
    )
  }
}

export default withRouter(RegisterLoginContainer);
