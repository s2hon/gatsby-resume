import React from 'react';

const Skills = ({ data }) => (
  <section>
    <h1 className="section-header">Technical Experience</h1>
    {data.map(skill => (
      <div key={skill.title} className="my-5">
        <h1 className="item-header font-semibold text-lg mb-2">
          {skill.title}
        </h1>
        {skill.subskills.map(subskill => (
          <span key={subskill.name}>
            {skill.type === 'tag' && (
              <span key={subskill.name} className="tag">
                {subskill.name}
              </span>
            )}
          </span>
        ))}
      </div>
    ))}
  </section>
);

export default Skills;
