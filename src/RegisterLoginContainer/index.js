import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import './RegisterLoginContainer.css';
import NavHome from '../NavHome'


class RegisterLoginContainer extends Component{
  constructor(){
    super();
    this.state = {
      login : {
        username: '',
        // email:'',
        password: '',
        successful: false
      },
      register: {
        username:'',
        email: '',
        password:'',
        name: '',
      },
      loginButton: false
    }
  }


// console.log(bg1);

  handleRegisterChange = (e) => {
    const updatedChange = {
      ...this.state.register
    }
    updatedChange[e.target.name] =  e.target.value;
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

    if(true){
      this.fetchRegister(updatedRegister)
      this.setState({
        register: {
          name: '',
          username: '',
          email: '',
          password: '',
        }
      })
    }else{
      this.setState({
        register: updatedRegister
      })
    }
  }

 fetchRegister = async(updatedRegister) => {
   console.log('reg updatedRegister', updatedRegister);
   console.log('reg stringify', JSON.stringify(updatedRegister) );
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

    console.log('reg response', response);
    const parsedResponse = await response.json();
    console.log('reg parsedResponse', parsedResponse);

     // console.log('userId', parsedResponse.userId);
     // console.log('username', parsedResponse.username);
     // console.log('parsed??', parsedResponse);
     localStorage.setItem('userId', parsedResponse.userId)
     localStorage.setItem('username', parsedResponse.username)

     // this.props.history.push('/home')

     if(parsedResponse.username === 'adminNorth'
        || parsedResponse.username === 'adminAndy'
        || parsedResponse.username === 'adminSeHee'){
        this.props.history.push('/adminhome')
      }else{
       this.props.history.push('/create')
     }


   }catch(err){
     console.log('Register failed...');
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
   // console.log('fetchloging', updatedLogin);
   // console.log('??', JSON.stringify(updatedLogin));
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

     if(parsedResponse.status !== 401){
     // if(parsedResponse.status === 200){
       updatedLogin.successful = true;
       this.setState({
         login: updatedLogin
       })


       localStorage.setItem('userId', parsedResponse.userId)
       localStorage.setItem('username', parsedResponse.username)

       // if(parsedResponse.userId === '5d7e9d844eb54d001728cf31'){
       if(parsedResponse.username === 'adminNorth'
          || parsedResponse.username === 'adminAndy'
          || parsedResponse.username === 'adminSeHee'){
         this.props.history.push('/adminhome')
       }else{
         this.props.history.push('/home/' + parsedResponse.userId)
      }


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
    // console.log(bg1);
    const changeOne = (
      <button onClick={this.buttonChange} className="btn_item">New</button>
    );

    const changeTwo = (
      <button onClick={this.buttonChange} className="btn_item">Back to login</button>
    );



    return(
      <div className="regLog_Container">
        <div className="regLog_row">
          <img src="Logo_ElectriCasa-05.png" className="logo"/>
          <div className="title">Electricasa</div>
          <div className="subtitle">Your home electrification advisor</div>
        { !this.state.loginButton ?
          <form onSubmit={this.handleLoginSubmit} className="form_container">
            <input className="form_input" id="username" name="username" type="text" value={this.state.login.username} onChange={this.handleLoginChange} required placeholder="Username"/>
            <input className="form_input" id="password" name="password" type="password" value={this.state.login.password} onChange={this.handleLoginChange} required placeholder="Password"/>
            <div className="btn_container">
              {changeOne}
              <input className="btn_item" type="submit" value="Forgot?"/>
            </div>
            <div className="regLogBtn_container">
              <button className="regLogBtn logBtn" type="submit">LOGIN</button>
            </div>
          </form> :

          <form onSubmit={this.handleRegisterSubmit} className="form_container">
            <input className="form_input" id="name" name="name" type="text" value={this.state.register.name} onChange={this.handleRegisterChange} required placeholder="Name"/>
            <input className="form_input" id="username" name="username" type="text" value={this.state.register.username} onChange={this.handleRegisterChange} placeholder="Username" required/>
            <input className="form_input" id="email" name="email" type="text" value={this.state.register.email} onChange={this.handleRegisterChange} placeholder="Email" required/>
            <input className="form_input" id="password" name="password" type="password" value={this.state.register.password} onChange={this.handleRegisterChange} placeholder="Password" required/>
            <div className="btn_container">
              {changeTwo}
            </div>
            <div className="regLogBtn_container">
              <button className="regLogBtn regBtn" type="submit">REGISTER</button>
            </div>
          </form>
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
