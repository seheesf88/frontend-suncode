import React from 'react';
// import logo from './logo.svg';
import './App.css';
import { Route, Switch, withRouter } from 'react-router-dom'
//Components
import MainContainer from './MainContainer';
import WelcomeComponent from './WelcomeComponent';
import RegisterLoginContainer from './RegisterLoginContainer';
//Home Components
import HomeContainer from './HomeContainer';
import ClothesDrying from './ElectrifyComponents/ClothesDrying';
import Cooking from './ElectrifyComponents/Cooking';
import ElectricalPanel from './ElectrifyComponents/ElectricalPanel';
import ElectricVehicle from './ElectrifyComponents/ElectricVehicle';
import EnergyGeneration from './ElectrifyComponents/EnergyGeneration';
import HeatingCooling from './ElectrifyComponents/HeatingCooling';
import HotWater from './ElectrifyComponents/HotWater';
import Weatherization from './ElectrifyComponents/Weatherization';

import MyCasaComponent from './MyCasaComponents/MyCasaComponent';
import MyCasaContainer from './MyCasaComponents/MyCasaContainer';
import CreateContainer from './MyCasaComponents/CreateContainer';
import RoofContainer from './MyCasaComponents/RoofContainer';
import AtticContainer from './MyCasaComponents/AtticContainer';
import WaHeaterContainer from './MyCasaComponents/WaHeaterContainer';
import SpHeaterContainer from './MyCasaComponents/SpHeaterContainer';
import UtilityContainer from './MyCasaComponents/UtilityContainer';

import ProjectComponent from './ProjectComponents/ProjectComponent';
import ProjectContainer from './ProjectComponents/ProjectContainer';

import MyAccountContainer from './MyAccountContainer';



import AdminHome from './AdminHome';



// import PhotoContainer from './PhotoContainer';
import ShowHouseContainer from './ShowHouseContainer';
import EditHouseContainer from './EditHouseContainer';
import ShowMyAccount from './ShowMyAccount';


import HouseDetailContainer from './HomeOwnerComponents/HouseDetailContainer';


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
        <Route exact path="/home" component={ HomeContainer } />
        <Route exact path="/home/clothesdrying" component={ ClothesDrying } />
        <Route exact path="/home/cooking" component={ Cooking } />
        <Route exact path="/home/electricalpanel" component={ ElectricalPanel } />
        <Route exact path="/home/electrivehicle" component={ ElectricVehicle } />
        <Route exact path="/home/energygeneration" component={ EnergyGeneration } />
        <Route exact path="/home/heatingcooling" component={ HeatingCooling } />
        <Route exact path="/home/hotwater" component={ HotWater } />
        <Route exact path="/home/weatherization" component={ Weatherization } />

        <Route exact path="/mycasa" component={ MyCasaComponent } />
        <Route exact path="/mycasa/start" component={ MyCasaContainer } />
        <Route exact path="/mycasa/create/home" component={ CreateContainer } />
        <Route exact path="/mycasa/create/roof" component={ RoofContainer } />
        <Route exact path="/mycasa/create/attic" component={ AtticContainer } />
        <Route exact path="/mycasa/create/waheater" component={ WaHeaterContainer } />
        <Route exact path="/mycasa/create/spheater" component={ SpHeaterContainer } />
        <Route exact path="/mycasa/create/utility" component={ UtilityContainer } />

        <Route exact path="/project" component={ ProjectComponent } />

        <Route exact path="/house" component={ HouseDetailContainer } />
        <Route exact path="/adminhome" component={ AdminHome } />
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
