import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
//setting initial state
  initialState = {
    name: '',
    email: '',
    message: '',
    phone: '',
    nameError: '',
    messageError: '',
    emailError: '',
    phoneError: ''
};

//state
state = this.initialState;
 



//axios post request to backend to send email
sendEmail = () => {
  const {name, email, message, phone} = this.state;

  axios.post('/form', {
    name,
    email,
    message,
    phone
  }).then(this.handleFormReset());
   
}

//clearing form when submitted, resetting state to initial state
handleFormReset = () => {
  this.setState(() => this.initialState)
}

//error handling for blank form inputs
validate = () => {
    let nameError = "";
    let emailError = "";
    let phoneError = "";
    let messageError = "";
  
    if(!this.state.name){
      nameError = "You must type your name!";
    }
    if(!this.state.email){
      emailError = "You must give an email!";
    }
    if(!this.state.phone){
        phoneError = "You must give a number!";
    } 
    if(!this.state.message){
        messageError = "You must type a message!";
    }
    if(nameError || emailError || phoneError || messageError){
      this.setState({nameError, emailError, phoneError, messageError});
      return false;
    }
    //if passed return true
    return true;
       };
  
  
//changes in inputs
  handleChange = event =>{
    this.setState({ [event.target.name]: event.target.value })
      }

//submit
  handleSubmit = (event) => {
      event.preventDefault();
      const isValid = this.validate();

  //if inputs passed validation then sendEmail
    if(isValid){
      this.sendEmail();
    }
}

   
  render() {
    return (
      <div>
        <h1>Contact</h1>
        <form onSubmit = {this.handleSubmit}>

            <label>Name:</label>
            <input 
            name="name"
            type="text"
            onChange={this.handleChange}
            value = {this.state.name}
            />

            <div className="error">{this.state.nameError}</div>

            <label>Email:</label>
            <input   
            name="email"
            type="email"
            onChange={this.handleChange}
            value={this.state.email}
            />
             <div className="error">{this.state.emailError}</div>

            <label>Phone:</label>
            <input
            name="phone"
            type="integer"
            onChange={this.handleChange}
            value={this.state.phone}
            />
            <div className="error">{this.state.phoneError}</div>

            <label>Message:</label>
            <textarea
            name="message"
            type="textarea"
             onChange={this.handleChange}
             value={this.state.message}
             />
              <div className="error">{this.state.messageError}</div>

             <button>
               Submit
             </button>

        </form>
      </div>
    )
  }
}
export default Contact;