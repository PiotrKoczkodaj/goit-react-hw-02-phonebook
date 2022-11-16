

export const Filter = (state) => {
   
    const object = state.state;
    const contacts = object.contacts

   return (
    contacts.map((contact) => (

            <ul>
          
            <li key={contact.id}>{contact.name} {contact.number }</li>
            
            </ul>
            
        
        )))

}