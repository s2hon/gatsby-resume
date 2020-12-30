import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLink } from '@fortawesome/free-solid-svg-icons'

const Education = ({ data }) => (
  <section className="mb-5">
    <h1 className="section-header mb-5">Education</h1>
    {data &&
      data.map(item => (
        <div className="my-2" key={item.degree}>
          <h1 className="item-header text-lg">{item.degree}
            {item.link ? 
              <a
                className="btn-social-icon"
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                style={{marginLeft: "5px"}}
              >
                  <FontAwesomeIcon icon={faLink} />
              </a> : ""}
          </h1>
          <h3 className="item-sub">{item.institution}</h3>
          <p className="text-sm text-neutral-500 font-light">
            {item.start} - {item.end}
          </p>
          <h4 className="item-sub">{item.description}</h4>
        </div>
      ))}
  </section>
);

export default Education;
