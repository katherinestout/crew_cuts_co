import React, { Component } from 'react';
import './../style/footer.css';
import ContactData from './contact.json';

class Footer extends Component {
    render() {
        return (
            <div className="footer">
                {
                       ContactData.map((contact, index) => {
                           return <h1 key="contact.members">
                           {contact.members}</h1>
                       })
                   }

                {ContactData[1]['phone']}
                
                {ContactData[2]['email']}


                
            </div>
        )
    }
}
export default Footer;
