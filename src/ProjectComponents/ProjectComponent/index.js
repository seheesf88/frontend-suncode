import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav'


const ProjectComponent = (props) => {

    return(
          <div>
            <Nav />
            <div className="h1">Welcome to Electricasa</div>
            <div>Thank you for joining. The following pages will ask you to provide information about your house and take photos of key areas that impact energy performance.</div>
            <div>The app will analyze your data, rate your energy assets and provide you with personalized recommendations to improve comfort, increase efficiency, and lower your carbon footprint over a cost-effective timeline.</div>
            <div>To do the analysis requires information about your roof, attic insulation, water heater and space heater. Please be ready to photograph these areas. While the photos are important, it's ok to skip data you may not know. In some places, a best guess is required.</div>
            <Link to="/project/create" className="submitBtn">
              Next
            </Link>
          </div>
        )

}


export default ProjectComponent
