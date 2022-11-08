import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";

export class App extends Component{
  
  constructor() {
    super();

       this.state = {
    contacts: [],
    name: ''
       };
    
  };

  ;

    handleChange = evt => {
      evt.preventDefault();
    
    this.setState({ name: evt.target.value });
  
    };
  
  name = () => {

    

 return(<p>{this.state.name }</p>)

  }

    
 
  
  handleSubmit = (evt,arr) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    
    console.log(this.state.name);
    
   

    form.reset()
    
   

    

 
   
    
  };

  render() {
      return (
    <div
      style={{
        height: '100vh',
        fontSize: 40,
        color: '#010101'
      }}
        >
          <h1>Phonebook</h1>
          <ContactForm name={this.name} handleChange={this.handleChange} handleSubmit={this.handleSubmit} />

    </div>
      );
    }
}






