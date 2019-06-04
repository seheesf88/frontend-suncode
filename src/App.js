import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch } from 'react-router-dom'
//Component...
import MainContainer from './MainContainer';
import QuizContainer from './QuizContainer';
import HomeContainer from './HomeContainer';
import AdminHome from './AdminHome';
import RegisterLoginContainer from './RegisterLoginContainer';
import MyAccountContainer from './MyAccountContainer';
import CreateContainer from './CreateContainer';
import ShowHouseContainer from './ShowHouseContainer';
import EditHouseContainer from './EditHouseContainer';


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
        <Route exact path="/" component={ MainContainer } />
        <Route exact path="/quiz" component={ QuizContainer } />
        <Route exact path="/login" component={ RegisterLoginContainer } />
        <Route exact path="/home" component={ HomeContainer } />
        <Route exact path="/adminhome" component={ AdminHome } />
        <Route exact path="/myaccount/:id/edit" component={ MyAccountContainer } />
        <Route exact path="/create" component={ CreateContainer } />
        <Route exact path="/:id" component={ ShowHouseContainer } />
        <Route exact path="/:id/edit" component={ EditHouseContainer } />
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
