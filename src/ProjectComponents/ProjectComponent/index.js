import React from 'react';
import { Link } from 'react-router-dom';
import Nav from '../../Nav'


const ProjectComponent = (props) => {

    return(
          <div>
            <Nav />
            <div className="h1">Projects</div>
            <div>Schedule repairs and upgrades at optimal times to maximize savings prior to emergencies.</div>
            <Link to="/project/myproject">
              Please, create a house first on My Casa page
            </Link>
          </div>
        )

}


export default ProjectComponent
