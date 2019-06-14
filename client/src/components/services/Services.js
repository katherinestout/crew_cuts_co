import React, { Component } from 'react';
import './../style/services.css';
import ServiceData from './services.json';

class Services extends Component {
    render() {
        return (
            <div className="services">
                {ServiceData.map((service, index) => {
                    return <h2>{service.generallabor}</h2> 
                })}

            </div>
        )
    }
}
export default Services;