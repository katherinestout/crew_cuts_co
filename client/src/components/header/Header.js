import React, { Component } from 'react';
import MissionData from './missionstatement.json';
import './../style/header.css';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <h1>DC, Maryland, Virginia</h1>

                   {MissionData.missionstatement}
                   
            </div>
        )
    }
}

export default Header;