import { faFacebook, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import '../styles/Footer.css';

function Footer() {
  return (
    <>
      <section className="links">
        <a
          className="facebook"
          href={`https://www.facebook.com/profile.php?id=100070135072665`}
          target="blank"
        >
          <FontAwesomeIcon icon={faFacebook} />
        </a>
        <div className="phone">
          <FontAwesomeIcon icon={faPhone} />
        </div>
        <a
          className="linkedin"
          href={`https://www.linkedin.com/in/janusz-filipczyk-6a551bb1/`}
          target="blank"
        >
          <FontAwesomeIcon icon={faLinkedin} />
        </a>
      </section>
    </>
  );
}

export default Footer;
