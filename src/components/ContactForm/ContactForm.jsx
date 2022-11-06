import styles from './ContactForm.module.css';

export const ContactForm = () => {
    
    return (
        <div>
        <form className={styles.contact}>
                <label>Name</label>   
            <input className={styles.contactInput}
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required/>      
                
<button className={styles.contactButton}>Add contact</button>
            </form>

            </div>
    )

};