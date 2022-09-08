// import PropTypes from 'prop-types'
import React, { Component } from 'react';
import NewspaperIcon from '@mui/icons-material/Newspaper';

import { Link } from 'react-router-dom';

export class NavBar extends Component {
//   static propTypes = {}


  render() {
    return (

      
      <>

      <div>


        
        <nav className="navbar fixed-top navbar-expand-lg bg-dark navbar-dark">
            <div className="container-fluid">
              <a className="navbar-brand" to="/about">NewsHunt <NewspaperIcon/></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"   aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                   <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                     <ul className="navbar-nav me-auto mb-2 mb-lg-0 navbar-expand-lg ">


                     {/* this is all the catogory of news 
                      */}
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general">Home</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/business"> Business </Link> </li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/entertainment">Entertainment</Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/general"> General </Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/health"> Health </Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/science" > Science </Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/sports"> Sports </Link></li>
                        <li className="nav-item"><Link className="nav-link active" aria-current="page" to="/technology"> Technology</Link></li>
                     </ul>  




                </div>
            </div>



        </nav>
        </div>
      </>

    )
  }
}

export default NavBar