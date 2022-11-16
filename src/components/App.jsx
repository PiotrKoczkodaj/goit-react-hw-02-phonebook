import React, { Component } from "react";
import { ContactForm } from "./ContactForm/ContactForm";
import { Filter } from "./Filter/Filter";
import { nanoid } from 'nanoid';
  

export class App extends Component {

  constructor() {
    super();

    this.state = {
      contacts: [ {id: 'id-1', name: 'Rosie Simpson', number: '459-12-56'},
    {id: 'id-2', name: 'Hermione Kline', number: '443-89-12'},
    {id: 'id-3', name: 'Eden Clements', number: '645-17-79'},
    {id: 'id-4', name: 'Annie Copeland', number: '227-91-26'}],
      name: '',
      number:''
    };
    
  };

  handleChangeName = evt => {
    evt.preventDefault();
    
    this.setState({
      name: evt.target.value,

    });
  
  };
  
 handleChangeNumber = evt => {
    evt.preventDefault();
    
    this.setState({
      number: evt.target.value,

    });
  
  };
 
    
  handleSubmit = (evt) => {
    evt.preventDefault();
    const form = evt.currentTarget;
    const name = this.state.name;
    const number = this.state.number;
    // let contactArray = this.state.contacts;
    // contactArray.push({ name: name, id: nanoid(), number: number });
    this.setState(prevState => ({
      contacts: [...prevState.contacts,
        {
          name: name,
          id: nanoid(),
          number: number
        }]
    }))

    // console.log(contactArray)

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
          <ContactForm state={this.state} handleChangeName={this.handleChangeName} handleSubmit={this.handleSubmit} handleChangeNumber = {this.handleChangeNumber} />
          <h2>Contacts</h2>
          <Filter state={this.state} />
        </div>
      );
    }
  }

