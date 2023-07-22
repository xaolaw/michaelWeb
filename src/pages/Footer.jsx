import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css';

function Footer() {
  return (
    <>
      <section className="links-cointener">
        <div className="phone">
          <address className="adres">
            <span>Janusz Filipczyk Smarthydro</span>
            <span>30-176 Kraków, Przewóz 32D lok. 9</span>
            <span>tel: +48 791-292-290</span>
            <span>e-mail: biuro@smarthydro</span>
            <span>NIP: 675-13-29-560</span>
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
