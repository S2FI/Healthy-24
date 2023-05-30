import React,{useState} from 'react'
import classes from './contact.module.scss'
const Contact = () => {

const [fullName, setFullName] = useState('');
const [email, setEmail] = useState('');
const [message, setMessage] = useState('');

const handleSubmit = (e: React.FormEvent) => {
  e.preventDefault();

  // Perform form submission or validation here

  // Clear form fields
  setFullName('');
  setEmail('');
  setMessage('');
};

return (
  <div className={classes.contact} id='contact'>
  
  <div className={classes.contact__form}>
    <header>
    Contact us
    </header>
    <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
    </p>
  <form onSubmit={handleSubmit}>
    <div className={classes.contact__form__name}>
      <label htmlFor="fullName">Full Name</label>
      <input
        type="text"
        id="fullName"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
        placeholder=" Your name"
        required
      />
    </div>
    <div className={classes.contact__form__email}>
      <label htmlFor="email">Email</label>
      <input
        type="email"
        id="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder=" Your email address"
        required
      />
    </div>
    <div className={classes.contact__form__message}>
      <label htmlFor="message">Message</label>
      <textarea
        id="message"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder=" Type your message.."
        required
      />
    </div>
    <button type="submit">Submit</button>
  </form>
  </div>

  <div className={classes.contact_media}>
    <header>

    </header>
    

  </div>
  </div>
);
};

export default Contact