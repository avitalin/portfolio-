import React from 'react';

interface AboutProps {
  phone: string;
  email: string;
  website: string;
  location: string;
  description: string[];
}

const About = ({ phone, email, website, location, description }: AboutProps) => {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">Phone:</span>
              <span className="text-gray-600">{phone}</span>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">Email:</span>
              <a href={`mailto:${email}`} className="text-amber-600 hover:text-amber-700">
                {email}
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">Website:</span>
              <a href={website} className="text-amber-600 hover:text-amber-700" target="_blank">
                Portfolio
              </a>
            </div>
            <div className="flex items-center space-x-4">
              <span className="font-medium text-gray-700">Location:</span>
              <span className="text-gray-600">{location}</span>
            </div>
          </div>
          <div className="space-y-4">
            {description.map((paragraph, index) => (
              <p key={index} className="text-gray-600 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 