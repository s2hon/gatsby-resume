
import React from 'react';

const Honors = ({ data }) => (
  <section className="mb-5">
  <h1 className="section-header-2 mb-5">Awards and Honors</h1>
  {data &&
    data.map((item, i) => (
      <div className="my-2" key={i}>
        <p className="text-sm text-neutral-500 font-light">
        {item.date}
        </p>
        <h4 className="item-sub">{item.name}</h4>
      </div>
    ))}
</section>
);

export default Honors;

