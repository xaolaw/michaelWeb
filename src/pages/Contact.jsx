import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  [mail,setMail] = useState('');
  [topic,setTopic] = useState('');
  [mail,setMail] = useState('');
  const sendMail = () =>{
    alert('sending mail');
  }
  return (
    <>
    <section className="send-mail">
      <form className="mail-sender" onSubmit={sendMail}>
        <div className="form-div" >
          <label>Twój mail:</label>
          <input type='text'></input>
        </div>
        <div className="form-div">
          <label>Temat wiadomości:</label>
          <input type='text'></input>
        </div>
        <div className="form-div">
          <label>Treść wiadomości:</label>
          <textarea></textarea>
        </div>
        <div className="form-div">
          <input type="submit" value="Wyślij!"></input>
        </div>
      </form>
    </section>
    </>
  );
}

export default Contact;
