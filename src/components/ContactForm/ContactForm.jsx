import styles from './ContactForm.module.css';

export const ContactForm =({handleSubmit,handleChangeName,handleChangeNumber}) =>{
    

    return (
        
        <div>
        <form onSubmit={handleSubmit}  className={styles.contact}>
                <label >Name</label> 
                
                <input className={styles.contactInput}
  onChange={handleChangeName}                  
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required/>      
                <label>Number</label>
                <input onChange={handleChangeNumber}
  type="tel"
  name="number"
  pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
  title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
  required
/>
<button  type='submit' className={styles.contactButton}>Add contact</button>
            </form>
        
        </div>
        
    
    )

 
};