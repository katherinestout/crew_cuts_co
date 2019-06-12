import React, { Component } from 'react';
//import './../style/navbar.css';

class Navbar extends Component {


    render() {
        return (


                <div className="dropdown">
                    <button type="button"
                    className="btn btn-danger dropdown-toggle"
                    data-toggle="dropdown" 
                    aria-haspopup="true" 
                    aria-expanded="false"
                    id="dropdownMenuButton">

                   dropdown
                    </button>

                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                        <a className="dropdown-item">Contact</a>
                        <a className="dropdown-item">Reviews</a>
                    </div>

                </div>
                
  
        )
    }
}

export default Navbar;