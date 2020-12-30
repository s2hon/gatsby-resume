import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faCircleNotch
} from "@fortawesome/free-solid-svg-icons";

const ListItem = ({ text }) => (
  <div className="my-1">
    <FontAwesomeIcon icon={faCircleNotch} className="inline-block h-3 fill-current text-secondary-500"
          style={{ color: '#de3618' }} size="2x" />
    <span className="inline-block font-medium ml-2">{text}</span>
  </div>
);

export default ListItem;
