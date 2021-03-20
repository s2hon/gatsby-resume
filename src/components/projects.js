import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faLink,
  faCircleNotch
} from '@fortawesome/free-solid-svg-icons'
import {
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const Projects = ({ data }) => (
  <section>
    <h1 className="section-header">Projects</h1>
    {data.map(item => (
      <article className="my-5" key={item.name}>
        <div className="row">
          <h2 className="item-header">{item.name}
          <a
            key={item.service}
            className="btn-social-icon"
            href={item.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{marginLeft: "10px"}}
          >
          <FontAwesomeIcon icon={faGithub} />
          </a>      
          <a
            key={item.service}
            className="btn-social-icon"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            style={{marginLeft: "10px"}}
          >
          <FontAwesomeIcon icon={faLink} />
          </a>
          </h2> 
        </div>
        <div className="row" align="right">
          <h4 className="item-header">{item.title}</h4> 
        </div>
        <h3 className="text-sm text-neutral-500 font-light"> {item.summary}</h3>
        {item.description &&
          item.description.map(item => 
              (
              <div className="my-1">
                <p className="inline-block item-sub"><FontAwesomeIcon icon={faCircleNotch} className="inline-block h-3 fill-current text-secondary-500" style={{ color: '#de3618' }} size="fa-xs"/> {item}</p>
              </div>))
        }
        <h4 className="text-sm text-neutral-500 font-light">Stack: {item.tools}</h4>

      </article>
    ))}
  </section>
);

export default Projects;
