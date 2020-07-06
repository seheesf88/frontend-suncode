import React from 'react';
import './WelcomeComponent.css';
import { Link } from 'react-router-dom'

const WelcomeComponent = (props) => {
  return (
    <div>
      <div>Welcome to ElectriCasa: your home electrification advisor.</div>
      <div>The next five pages will ask you to provide basic information about your home and to take photos to document your status.</div>
      <div>We’ll analyze your data and provide personalized recommendations for you to improve your energy usage and costs when the time is right for you to upgrade.</div>
      <div>We will be asking about your roof, attic insulation, water heater, and central heater. Please be ready to photograph these areas.</div>
      <Link to="/signin">Sign</Link>
    </div>
  )
}

export default WelcomeComponent
