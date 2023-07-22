import { useState } from 'react';
import '../styles/Contact.css';

function Contact() {
  const [mail,setMail] = useState('');
  const [topic,setTopic] = useState('');
  const [content,setContent] = useState('');
  const validMail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
  const sendMail = (event) =>{
    event.preventDefault();
    console.log(checkValues);
    if (checkValues){
      alert('send mail');
    }
  }
  const checkValues = () =>{
    if(mail === '' || topic ==='' || content===''){
      return false;
    }
    if(!validMail.test(mail)){
      return false;
    }
    console.log(!validMail.test(mail));
    return true;
  }
  return (
    <>
    <section className="send-mail">
      <form className="mail-sender" onSubmit={sendMail}>
        <div className="form-div" >
          <label>Twój mail:</label>
          <input type='text' onChange={(event)=>{setMail(event.target.value)}}></input>
        </div>
        <div className="form-div">
          <label>Temat wiadomości:</label>
          <input type='text' onChange={(event)=>{setTopic(event.target.value)}}></input>
        </div>
        <div className="form-div">
          <label>Treść wiadomości:</label>
          <textarea onChange={(event)=>{setContent(event.target.value)}}></textarea>
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
