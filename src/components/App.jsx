import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { nanoid } from 'nanoid';

export class App extends Component {
  
  constructor() {
    super();

    this.state = {
      contacts: [],
      name: '',
      number:''
    };
    
  };

  ;

  handleChange = evt => {
    evt.preventDefault();
    
    this.setState({
      name: evt.target.value,

    });
  
  };
  
 handleChanged = evt => {
    evt.preventDefault();
    
    this.setState({
      number: evt.target.value,

    });
  
  };
 
    
  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = this.state.name;
    const numberd = this.state.number;
    let contactArray = this.state.contacts;
    contactArray.push({ name: name, id:nanoid(), number:numberd});

    console.log(contactArray)

    form.reset();
    
  }

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
          <ContactForm state={this.state} handleChange={this.handleChange} handleSubmit={this.handleSubmit} handleChanged = {this.handleChanged} />
          <h2>Contacts</h2>
        </div>
      );
    }
  }

