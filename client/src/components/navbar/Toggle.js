import React, { Component } from 'react';
import './../style/navbar.css';

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

            <div className="toggle">
                  <i class="far fa-caret-square-down"
                   onClick = {this.toggle}> Menu</i>
                   {this.state.on && this.props.children} 
                 
         
            
            </div>
        )
    }
}
export default Toggle;