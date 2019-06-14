import React, { Component } from 'react';
import './../style/navbar.css';
import Navbar from './Navbar';

class Toggle extends Component {

    state = {
        on: false
    }

    toggle = () => {
        this.setState({
            on: !this.state.on
        })
    }

    render() {
        return (

            <div className="toggle wrapper-nav">  

            <div className="nav-left">
            <h1>CrewCuts</h1>
            </div>

            <div className="nav-right">
            <i className="far fa-caret-square-down"
            onClick = {this.toggle}> Menu</i>
             
                 {this.state.on && (
                <Navbar></Navbar>
            )} 
            </div>
        
            
            </div>
        )
    }
}
export default Toggle;