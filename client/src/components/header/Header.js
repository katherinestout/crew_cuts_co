import React, { Component } from 'react';
import MissionData from './missionstatement.json';
//import MissionStatement from './MissionStatement';

class Header extends Component {

    render() {
        return (
            <div className="header">
                <h1>DC, Maryland, Virginia</h1>

                   {
                       MissionData.map((mission, index) => {
                           return <h1>{mission.missionstatement}</h1>

                       })
                   }
                   
            </div>
        )
    }
}

export default Header;