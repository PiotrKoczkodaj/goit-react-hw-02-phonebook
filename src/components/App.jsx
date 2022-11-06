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
          <ContactForm/>

    </div>
      );
    }
}






