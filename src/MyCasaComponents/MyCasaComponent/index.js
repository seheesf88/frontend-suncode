import React from 'react';
import { Link } from 'react-router-dom';


const MyCasaComponent = (props) => {

    return(
          <div>
            MyCasaComponent

            <Link to="/mycasa/create">Add House</Link>
          </div>
        )

}


export default MyCasaComponent
