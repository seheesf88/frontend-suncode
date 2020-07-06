import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './RegisterLoginContainer.css';
import NavHome from '../NavHome'


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
        pre_password: '',
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
    if(this.state.register.pre_password !== this.state.register.password){
        alert('password is not matching')
    }

    if(true){
      this.fetchRegister(updatedRegister)
      this.setState({
        register: {
          firstName: '',
          lastName: '',
          email: '',
          phNumber: '',
          pre_password: '',
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
      this.props.history.push('/create')
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

     // if(parsedResponse.status !== 401){
     if(parsedResponse.status === 200){
       updatedLogin.successful = true;
       this.setState({
         login: updatedLogin
       })


      localStorage.setItem('userId', parsedResponse.userId)


      this.props.history.push('/home/' + parsedResponse.userId)



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
    console.log(typeof this.state.register.emailNotice);
    const changeOne = (
      <button onClick={this.buttonChange} className="">Sign up</button>
    );

    const changeTwo = (
      <button onClick={this.buttonChange} className="">Back to login</button>
    );



    return(
      <div className="regLog_container">
        <div className="regLog_row">
          <div className="logo">Logo</div>
        { !this.state.loginButton ?
          <div className="regLog_sub_container">
            <div className="title_container">
              <div className="title">Your</div>
              <div className="title">Home Electrification</div>
              <div className="title">Advisor</div>
            </div>
            <form onSubmit={this.handleLoginSubmit} className="form_container">
              <div>
                <label htmlFor="email" className="label">EMAIL</label>
                <input className="form_input" id="email" name="email" type="text" value={this.state.login.email} onChange={this.handleLoginChange} required/>
              </div>
              <div className="password">
                <label htmlFor="password" className="label">PASSWORD</label>
                <input className="form_input" id="password" name="password" type="password" value={this.state.login.password} onChange={this.handleLoginChange} required/>
              </div>
              <input className="btn_item" type="submit" value="Forgot your password? - coming soon..."/>

              <div className="regLogBtn_container">
                <button className="regLogBtn logBtn" type="submit">LOGIN</button>
              </div>
            </form>
            <div className="signup">
              Don't have an account? {changeOne}
            </div>
          </div>
          :
          <div className="regLog_sub_container">
          <div className="btn_container">
            {changeTwo}
          </div>
            <form onSubmit={this.handleRegisterSubmit} className="form_container">
              <input className="form_input" id="firstName" name="firstName" type="text" value={this.state.register.firstName} onChange={this.handleRegisterChange} required placeholder="First Name"/>
              <input className="form_input" id="lastName" name="lastName" type="text" value={this.state.register.lastName} onChange={this.handleRegisterChange} required placeholder="Last Name"/>
              <input className="form_input" id="email" name="email" type="email" value={this.state.register.email} onChange={this.handleRegisterChange} placeholder="Email" required/>
              <input className="form_input" id="phNumber" name="phNumber" type="text" value={this.state.register.phNumber} onChange={this.handleRegisterChange} placeholder="Phone Number" required/>
              <input className="form_input" id="pre_password" name="pre_password" type="password" value={this.state.register.pre_password} onChange={this.handleRegisterChange} placeholder="Password" required/>
              <input className="form_input" id="password" name="password" type="password" value={this.state.register.password} onChange={this.handleRegisterChange} placeholder="Re-Enter Password" required/>
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
                <button className="regLogBtn regBtn" type="submit">REGISTER</button>
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
//
//
// <div>
//   <div className="regLog"></div>
//   <div>
//     { !this.state.loginButton ?
//       <div className="login">
//         <h2 id="login">Login</h2>
//           <form onSubmit={this.handleLoginSubmit}>
//             <div className="login-form">
//               <input className="form-input" id="username" name="username" type="text" value={this.state.login.username} onChange={this.handleLoginChange} required placeholder="Username"/>
//               <input className="form-input" id="password" name="password" type="password" value={this.state.login.password} onChange={this.handleLoginChange} required placeholder="Password"/>
//               <div className="btn-container">
//                 <div className="btn-row">
//                   <button className="regLogBtn leftBtn" type="submit">Login</button>
//                   {changeOne}
//                 </div>
//               </div>
//             </div>
//           </form>
//         </div>
//       :
//         <div className="register">
//           <h2 id="register">Register</h2>
//             <form onSubmit={this.handleRegisterSubmit}>
//               <div className="reg-form">
//                 <div><input id="name" name="name" className="form-input" type="text" value={this.state.register.name} onChange={this.handleRegisterChange} required placeholder="Name"/></div>
//                 <div><input name="username" id="username" className="form-input" type="text" value={this.state.register.username} onChange={this.handleRegisterChange} placeholder="Username" required/></div>
//                 <div><input id="email" name="email" className="form-input" type="text" value={this.state.register.email} onChange={this.handleRegisterChange} placeholder="Email" required/></div>
//                 <div><input id="password" name="password" className="form-input" type="password" value={this.state.register.password} onChange={this.handleRegisterChange} placeholder="Password" required/></div>
//               </div>
//               <div className="btn-container">
//                 <div className="btn-row">
//                   <button className="regLogBtn leftBtn" type="submit">Register</button>
//                   {changeTwo}
//                 </div>
//               </div>
//             </form>
//           </div>
//
//         }
//
//   <div className="footer"></div>
// </div>
// </div>
