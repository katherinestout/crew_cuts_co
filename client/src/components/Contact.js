import React, { Component } from 'react';
import axios from 'axios';

class Contact extends Component {
    //set initial state
    constructor(){
      super();
      this.state ={
        name: '',
        email: '',
        phone: '',
        message: ''
      }
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
      
    }

//clearing form when submitted, resetting state to initial state
 /* handleFormReset = () => {
    this.setState(() => this.initialState)
  }*/

//send email
sendEmail = () => {
    console.log("hey");
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
  
  

  handleChange(event){
    this.setState({ [event.target.name]: event.target.value });
      }

  async handleSubmit (event){
      event.preventDefault();

        //const isValid = this.validate();
  //if it passed validation then sendEmail

  const {name, email, message} = this.state;


  const form = await axios.post('/form', {
    name,
    email,
    message
  }).then(console.log("yay"));
    console.log(form);
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
            />

            <div className="error">{this.state.nameError}</div>

            <label>Email:</label>

            <input   
            name="email"
            type="email"
            onChange={this.handleChange}
            />
             <div className="error">{this.state.emailError}</div>

            <label>Message:</label>

            <textarea
            name="message"
            type="textarea"
             onChange={this.handleChange}
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