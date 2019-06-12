import React, { Component } from 'react';
import './../style/navbar.css';

class Navbar extends Component {


//for collapsable nav
myFunction(){
    const x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
}

    render() {
        return (
            <div className="navbar">
                <div className="topnav"
                id = "myTopnav">

                    <div className="nav-container">
                        <a>Contact</a>
                        <a>Reviews</a>
            <a>

            <i class="fas fa-bars"></i>
            </a>
   


                    </div>

                </div>
                
            </div>
        )
    }
}

export default Navbar;