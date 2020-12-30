import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircleNotch } from '@fortawesome/free-solid-svg-icons'

const Experience = ({ data }) => (
  <section>
    <h1 className="section-header">Experience</h1>
    {data &&
      data.map((item, i) => (
        <article className="my-5" key={`${item.company}-${i}`}>
          <div className="row">
            <h2 className="item-header">{item.role}</h2>
            <h3 className="text-sm text-neutral-500 font-light">
              {item.company} | {item.location} | {item.start} - {item.end || 'PRESENT'} 
            </h3>
            <h4 className="item-sub"><span className="font-bold">Goal:</span> {item.goal}</h4>
            <h4 className="item-sub"><span className="font-bold">Value:</span>  {item.value}</h4>
            <h4 className="item-sub font-bold">My Contributions:</h4>
            {item.contribution &&
              item.contribution.map(item => 
                (
                  <p className="inline-block item-sub"><FontAwesomeIcon icon={faCircleNotch} className="inline-block h-3 fill-current text-secondary-500" style={{ color: '#de3618' }} size="fa-xs"/> {item}</p>
                ))
              }
          </div>
        </article>
      ))}
  </section>
);

export default Experience;
