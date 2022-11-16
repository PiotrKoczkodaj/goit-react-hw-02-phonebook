import styles from './ContactForm.module.css';

export const ContactForm =({handleSubmit,handleChange,handleChanged}) =>{
    

    return (
        
        <div>
        <form onSubmit={handleSubmit}  className={styles.contact}>
                <label >Name</label> 
                
                <input className={styles.contactInput}
  onChange={handleChange}                  
  type="text"
  name="name"
  pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
  title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
  required/>      
                <label>Number</label>
                <input onChange={handleChanged} type="tel" name="number"/>
<button  type='submit' className={styles.contactButton}>Add contact</button>
            </form>
        
        </div>
        
    
    )

 
};