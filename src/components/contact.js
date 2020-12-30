import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faEnvelope,
  faMobile,
  faThumbtack,
  faHeart
} from "@fortawesome/free-solid-svg-icons";

const Contact = ({ field, value }) => (
  <span className="flex my-3 text-primary-900 tracking-widest items-center">
    {field === 'email' && (
      <>
        <a className="contact-link" href={`mailto:${value}`} title="email">
        <FontAwesomeIcon icon={faEnvelope} /> {value}
        </a>
      </>
    )}
    {field === 'phone' && (
      <>
        <a className="contact-link" href={`tel:${value}`} title="phone">
        <FontAwesomeIcon icon={faMobile} /> {value}
        </a>
      </>
    )}
    {field === 'website' && (
      <>
        <a
          className="contact-link"
          target="_blank"
          href={value}
          rel="noopener noreferrer"
          title="website"
        >
          <FontAwesomeIcon icon={faHeart} /> Portfolio
        </a>
      </>
    )}
    {field === 'location' && (
      <>
        <span className="contact-link">
          <FontAwesomeIcon icon={faThumbtack} /> {value}
        </span>
      </>
    )}
  </span>
);

export default Contact;
