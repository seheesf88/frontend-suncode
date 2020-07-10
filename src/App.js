import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
//Components
import MainContainer from './MainContainer';
import WelcomeComponent from './WelcomeComponent';
import RegisterLoginContainer from './RegisterLoginContainer';
import HomeContainer from './HomeContainer';
import MyCasaComponent from './MyCasaComponents/MyCasaComponent';
import CreateContainer from './MyCasaComponents/CreateContainer';
import ProjectComponent from './ProjectComponents/ProjectComponent';

//or
import AdminHome from './AdminHome';

import MyAccountContainer from './MyAccountContainer';

// import PhotoContainer from './PhotoContainer';
import ShowHouseContainer from './ShowHouseContainer';
import EditHouseContainer from './EditHouseContainer';
import ShowMyAccount from './ShowMyAccount';
import ResourcesContainer from './ResourcesContainer';

import HouseDetailContainer from './HomeOwnerComponents/HouseDetailContainer';
import RoofContainer from './HomeOwnerComponents/RoofContainer';

const My404 = () => {
  return (
    <div>
      ...error...
    </div>
  )
}

//find way to not access through links...
const App = (props) => {
  // if (localStorage.getItem('userId') !== null) {
  //   console.log('USER IS LOGGED IN')
  // } else if(props.location.pathname !== '/') {
  //   props.history.push('/')
  // }

  return (
    <main>
      <Switch>
        <Route exact path="/" component={ MainContainer } />
        <Route exact path="/welcome" component={ WelcomeComponent } />
        <Route exact path="/login" component={ RegisterLoginContainer } />
        <Route exact path="/mycasa" component={ MyCasaComponent } />
        <Route exact path="/mycasa/create" component={ CreateContainer } />
        <Route exact path="/project" component={ ProjectComponent } />

        <Route exact path="/house" component={ HouseDetailContainer } />
        <Route exact path="/house/roof" component={ RoofContainer } />
        <Route exact path="/home" component={ HomeContainer } />
        <Route exact path="/adminhome" component={ AdminHome } />
        <Route exact path="/resources" component={ ResourcesContainer } />
        <Route exact path="/myaccount" component={ ShowMyAccount } />
        <Route exact path="/myaccount/:id/edit" component={ MyAccountContainer } />

        <Route exact path="/:id" component={ ShowHouseContainer } />
        <Route exact path="/:id/edit" component={ EditHouseContainer } />
        <Route component={ My404 } />
      </Switch>
    </main>
  )
}

export default withRouter(App)
// export default App;
//
// <Route exact path="/" component={ MainContainer } />
// <Route exact path="/quiz" component={ QuizContainer } />

// function App() {
//   return (
//     <div className="App">
//
//     </div>
//   );
// }
