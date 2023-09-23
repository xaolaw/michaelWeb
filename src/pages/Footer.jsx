import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faHouse,
  faIdCard,
  faPhone,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css';

function Footer() {
  return (
    <>
      <section className="links-cointener">
        <div className="phone">
          <address className="adres">
            <span className="span-box">
              <FontAwesomeIcon
                icon={faUser}
                className="fa-icon"
              ></FontAwesomeIcon>
              Janusz Filipczyk Smarthydro
            </span>
            <span className="span-box">
              <FontAwesomeIcon
                icon={faHouse}
                className="fa-icon"
              ></FontAwesomeIcon>
              30-176 Kraków, Przewóz 32D lok. 9
            </span>
            <span className="span-box">
              <FontAwesomeIcon icon={faPhone} className="fa-icon" />
              +48 791-292-290
            </span>
            <span className="span-box">
              <FontAwesomeIcon icon={faEnvelope} className="fa-icon" />
              biuro@smarthydro.pl
            </span>
            <span className="span-box">
              <FontAwesomeIcon icon={faIdCard} className="fa-icon" />
              NIP: 675-13-29-560
            </span>
          </address>
        </div>
      </section>
      <div className="links">
        <a
          className="facebook"
          href={`https://www.facebook.com/profile.php?id=100070135072665`}
          target="blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <a
          className="linkedin"
          href={`https://www.linkedin.com/in/janusz-filipczyk-6a551bb1/`}
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </div>
    </>
  );
}

export default Footer;
