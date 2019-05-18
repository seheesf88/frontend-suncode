import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
//Component...
import HomeContainer from './HomeContainer';
import RegisterLoginContainer from './RegisterLoginContainer';
import MyAccountContainer from './MyAccountContainer';
import CreateContainer from './CreateContainer';

const My404 = () => {
  return (
    <div>
      ...error...
    </div>
  )
}

const App = () => {
  return (
    <main>
      <Switch>
        <Route exact path="/" component={ RegisterLoginContainer } />
        <Route exact path="/home" component={ HomeContainer } />
        <Route exact path="/myaccount/:id/edit" component={ MyAccountContainer } />
        <Route exact path="/create" component={ CreateContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
}


export default App;



// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }
