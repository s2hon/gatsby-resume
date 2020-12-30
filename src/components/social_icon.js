import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn

} from "@fortawesome/free-brands-svg-icons";

const SocialIcon = ({ type }) => {
  switch (type) {
    case 'linkedin':
      return <FontAwesomeIcon icon={faLinkedinIn} size="2x" />;
    // case 'twitter':
    //   return <TwitterIcon className="footer-social-icon" />;
    case 'facebook':
      return <FontAwesomeIcon icon={faFacebookF} size="2x" />;
    // case 'youtube':
    //   return <YoutubeIcon className="footer-social-icon" />;
    case 'instagram':
      return <FontAwesomeIcon icon={faInstagram} size="2x" />;
    case 'github':
      return <FontAwesomeIcon icon={faGithub} size="2x" />;
    // case 'behance':
    //   return <BehanceIcon className="footer-social-icon" />;
    // case 'dribbble':
    //   return <DribbbleIcon className="footer-social-icon" />;
    // case 'angellist':
    //   return <AngelIcon className="footer-social-icon" />;
    default:
      return null;
  }
};

export default SocialIcon;
