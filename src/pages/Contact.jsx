import { useState } from 'react';
import CustomAlert from '../Components/CustomAlert';
import MapComponent from '../Components/MapComponent';
import '../styles/Contact2.css';

function Contact() {
  //mail validation variables
  const [mail, setMail] = useState('');
  const [topic, setTopic] = useState('');
  const [content, setContent] = useState('');
  const validMail = new RegExp('^[a-zA-Z0-9._:$!%-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');

  //alert variables
  const [alert,setAlert] = useState(null);
  function createNewAlert(type,title,msg){
    return { 
      type: type, 
      title: title, 
      msg: msg 
    };
  }
  const sendMail = (event) => {
    setAlert(null);
    event.preventDefault();
    switch (checkValues()) {
      case 'OK':
        setAlert(createNewAlert('success','Sukces!','Pomyślnie przesłano maila'));
        break;
      case 'Validation':
        setAlert(createNewAlert('error','Błąd!','Podałeś nieporawny adres e-mail'));
        break;
      case 'NotAllSubmited':
        setAlert(createNewAlert('error','Błąd!','Nie uzupełniłeś wszytskich pól'));
        break;
      default:
        setAlert(null);
    }
    
  };
  function highLightInput(){
    
  }
  function checkValues(){
    if (mail === '' || topic === '' || content === '') {
      return 'NotAllSubmited';
    }
    if (!validMail.test(mail)) {
      return 'Validation';
    }
    return 'OK';
  }
  return (
    <>
      <section className="send-mail">
        <div className='background-image'/>
        <div className='contact-header'>
          <h2>Kontakt</h2>
          <p>Chcesz dowiedzieć się więcej?
            
          </p>
          <p>Zapraszamy do kontaktu poprzez formularz!</p>
        </div>
        <form className="mail-sender" onSubmit={sendMail}>
          <h2>Formularz kontaktowy</h2>
          <div className="form-div">
            <label>Twój mail:</label>
            <input
              type="text"
              onChange={(event) => {
                setMail(event.target.value);
              }}
              placeholder="Podaj swój adres email"
            ></input>
          </div>
          <div className="form-div">
            <label>Temat wiadomości:</label>
            <input
              type="text"
              onChange={(event) => {
                setTopic(event.target.value);
              }}
              placeholder="Podaj temat wiadomości"
            ></input>
          </div>
          <div className="form-div">
            <label>Treść wiadomości:</label>
            <textarea
              onChange={(event) => {
                setContent(event.target.value);
              }}
              placeholder="Podaj treść swojej wiadomości"
            ></textarea>
          </div>
          <div className="form-div">
            <input type="submit" value="Wyślij!"></input>
          </div>
        </form>
        {
          alert && (
            <CustomAlert className="CustomAlert" type={alert.type} title={alert.title} msg={alert.msg} onClose={() => setAlert(null)}></CustomAlert>
          )
        }
      </section>
      <section className='map-section'>
        <h2>Znajdź nas w Krakowie!</h2>
        <MapComponent className='map-component'></MapComponent>
      </section>
    </>
  );
}

export default Contact;
