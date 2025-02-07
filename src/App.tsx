import React from 'react';
import Header from './components/Header';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Contact from './components/Contact';
import { Experience as ExperienceType } from './types';

const App = () => {
  const socialLinks = [
    {
      platform: 'LinkedIn',
      url: 'https://linkedin.com/in/avita-lin-233811104/',
      icon: 'icon-linkedin2'
    },
    {
      platform: 'Instagram',
      url: 'https://instagram.com/avita_911_',
      icon: 'icon-instagram'
    },
    {
      platform: 'YouTube',
      url: 'https://youtube.com/@avitalin_79',
      icon: 'icon-youtube'
    }
  ];

  const skills = [
    { name: 'HTML', percentage: 95 },
    { name: 'CSS', percentage: 93 },
    { name: 'JavaScript', percentage: 90 },
    { name: 'React.js', percentage: 89 },
    { name: 'Bootstrap', percentage: 91 },
    { name: 'Web Optimization', percentage: 92 }
  ];

  // Add experiences data
  const experiences: ExperienceType[] = [
    {
      title: "DIGITAL MARKETING AND BRANDING",
      company: "Syncwell Company, Oxford, United Kingdom (Remote)",
      period: "August 2024 - Current",
      location: "Remote",
      description: [
        "Assist in the development and execution of digital marketing strategies.",
        "Conduct market research and analyze trends.",
        "Manage and create content for our social media platforms.",
        "Assist in SEO efforts and website analytics.",
        "Collaborate with team members on various marketing projects."
      ]
    },
    // Add other experiences...
  ];

  return (
    <div className="bg-white">
      <Header
        name="Avita Lin"
        title="Front-end Developer / Marketing Consultant"
        socialLinks={socialLinks}
      />
      <About
        phone="+ 8869 85 994 729"
        email="avitalin79@gmail.com"
        website="https://avitalin79.mystrikingly.com"
        location="Taiwan (Remote available)"
        description={[
          "Resourceful front-end developer with a proven track record in creating innovative web designs and features.",
          "Skilled at HTML, CSS, JavaScript, and Bootstrap, with a strong ability to quickly learn new technologies."
        ]}
      />
      <Skills skills={skills} />
      <Experience experiences={experiences} />
      <Contact />
    </div>
  );
};

export default App; 