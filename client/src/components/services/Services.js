import React, { Component } from 'react';
import './../style/services.css';
import ServiceData from './services.json';

class Services extends Component {
    render() {
        return (
            <div className="services">
                {ServiceData.map((y, index) => {
                    return <h2>{y.generallabor}</h2>
                })}

            </div>
        )
    }
}
export default Services;