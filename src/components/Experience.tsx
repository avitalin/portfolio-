import React from 'react';
import { Experience as ExperienceType } from '../types';

interface ExperienceProps {
  experiences: ExperienceType[];
}

const Experience = ({ experiences }: ExperienceProps) => {
  return (
    <section className="py-20 bg-white" id="experience">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Experience</h2>
        <div className="space-y-12">
          {experiences.map((exp, index) => (
            <div key={index} className="border-l-4 border-amber-600 pl-6">
              <h3 className="text-xl font-bold text-gray-800 mb-2">{exp.title}</h3>
              <p className="text-amber-600 mb-2">{exp.company}</p>
              <p className="text-gray-600 mb-4">
                {exp.period} | {exp.location}
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600">
                {exp.description.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience; 