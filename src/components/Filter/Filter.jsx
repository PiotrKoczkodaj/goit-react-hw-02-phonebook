import styles from './Filter.module.css';

export const Filter = (state) => {
   
    const object = state.state;
    const contacts = object.contacts

    return (
        <ul  className={styles.list}>
            
            {
                contacts.map((contact) => (
                    <li key={contact.id}>{contact.name}: {contact.number}</li> 
                    
                ))
            }

            </ul>
        )

}