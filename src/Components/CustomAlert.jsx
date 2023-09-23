import {
  faCircleCheck,
  faCircleExclamation,
  faXmark,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PropTypes from 'prop-types';
import '../styles/components/Alert.css';

function CustomAlert({ type, msg, title, onClose }) {
  function generateIcon(type) {
    switch (type) {
      case 'success':
        return <FontAwesomeIcon icon={faCircleCheck} />;
      case 'error':
        return <FontAwesomeIcon icon={faCircleExclamation} />;
      default:
        return <p>DEFAULT</p>;
    }
  }
  return (
    <>
      <div className={`alert-container ${type}`}>
        {generateIcon(type)}
        <p className="alert-title">{title}</p>
        <p className="alert-msg">{msg}</p>
        <FontAwesomeIcon
          className="close-mark"
          icon={faXmark}
          onClick={onClose}
        />
      </div>
    </>
  );
}
CustomAlert.propTypes = {
  title: PropTypes.string.isRequired,
  msg: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
};
export default CustomAlert;
