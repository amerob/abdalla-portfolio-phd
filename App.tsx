import React from 'react';
import { Navbar } from './components/Navbar';
import { Section } from './components/Section';
import { 
    ABOUT_ME, 
    CONTACT_INFO, 
    EDUCATION, 
    EXPERIENCE, 
    PROJECTS, 
    PUBLICATIONS, 
    RESEARCH_INTERESTS, 
    SKILLS, 
    TEACHING_HIGHLIGHTS 
} from './constants';
import { PublicationType } from './types';
import { Mail, Phone, MapPin, Download, ExternalLink, Calendar, MapPin as LocationIcon, User } from 'lucide-react';

function App() {
  const getPublicationsByType = (type: PublicationType) => {
    return PUBLICATIONS.filter(pub => pub.type === type);
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-700" id="top">
      <Navbar />

      {/* Hero Section */}
      <header className="bg-white border-b border-gray-200">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
            <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                {/* Profile Image Placeholder */}
                <div className="flex-shrink-0 order-first md:order-last lg:order-last">
<div className="w-32 h-32 md:w-48 md:h-48 rounded-full border-4 border-white shadow-lg overflow-hidden">
    <img
        src="/images/abdalla.jpg"
        alt="Abdullah Alkhatib"
        className="w-full h-full object-cover"
    />
</div>
                </div>

                <div className="flex-grow max-w-3xl text-center md:text-left">
                    <h1 className="text-4xl sm:text-5xl font-serif font-bold text-academic-900 mb-4">
                        {CONTACT_INFO.name}
                    </h1>
                    <p className="text-xl text-academic-600 mb-8 font-light">
                        {CONTACT_INFO.title}
                    </p>
                    <div className="flex flex-col sm:flex-row items-center md:items-start justify-center md:justify-start gap-4 sm:gap-8 text-sm text-gray-600 mb-8">
                        <a href={`mailto:${CONTACT_INFO.email}`} className="flex items-center hover:text-academic-700 transition-colors">
                            <Mail className="w-4 h-4 mr-2" />
                            {CONTACT_INFO.email}
                        </a>
                        <div className="flex items-center">
                            <Phone className="w-4 h-4 mr-2" />
                            {CONTACT_INFO.phone}
                        </div>
                        <div className="flex items-center">
                            <MapPin className="w-4 h-4 mr-2" />
                            {CONTACT_INFO.location}
                        </div>
                    </div>
                    
                    <div className="flex flex-wrap justify-center md:justify-start gap-4">
                        {CONTACT_INFO.links.map((link) => (
                            <a 
                                key={link.name} 
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-4 py-2 border border-gray-300 shadow-sm text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-academic-500 transition-all"
                            >
                                <link.icon className="w-4 h-4 mr-2" />
                                {link.name}
                            </a>
                        ))}
                        <button className="inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-academic-700 hover:bg-academic-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-academic-500 transition-all">
                            <Download className="w-4 h-4 mr-2" />
                            Download CV
                        </button>
                    </div>
                </div>
            </div>
        </div>
      </header>

      <main>
        {/* About & Interests */}
        <Section id="about" title="Biography">
            <div className="prose max-w-none text-gray-700 leading-relaxed">
                <p>{ABOUT_ME}</p>
            </div>
        </Section>

        <Section id="research" title="Research Interests">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {RESEARCH_INTERESTS.map((interest, idx) => (
                    <div key={idx} className="flex items-center p-4 bg-white rounded-lg border border-gray-200 shadow-sm hover:border-academic-300 transition-colors">
                        <div className="h-2 w-2 rounded-full bg-academic-500 mr-3"></div>
                        <span className="font-medium text-gray-800">{interest}</span>
                    </div>
                ))}
            </div>
        </Section>

        {/* Publications */}
        <Section id="publications" title="Publications">
            <div className="space-y-10">
                {[PublicationType.JOURNAL, PublicationType.CONFERENCE, PublicationType.UNDER_REVIEW].map((type) => {
                    const pubs = getPublicationsByType(type);
                    if (pubs.length === 0) return null;
                    return (
                        <div key={type}>
                            <h3 className="text-lg font-bold text-academic-800 mb-4 uppercase tracking-wider text-sm border-b border-gray-200 pb-2">
                                {type}
                            </h3>
                            <ul className="space-y-4">
                                {pubs.map((pub, idx) => (
                                    <li key={idx} className="bg-white p-4 rounded-md border border-gray-100 hover:shadow-sm transition-shadow">
                                        <p className="font-serif font-medium text-gray-900 mb-1">{pub.title}</p>
                                        <p className="text-sm text-gray-600 mb-1">{pub.authors}</p>
                                        <div className="flex items-baseline text-sm">
                                            <span className="font-medium text-academic-700 italic">{pub.venue}</span>
                                            {pub.year && <span className="ml-2 text-gray-500">({pub.year})</span>}
                                        </div>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    );
                })}
            </div>
        </Section>

        {/* Experience & Teaching */}
        <Section id="experience" title="Academic & Professional Experience">
            <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-slate-300 before:to-transparent">
                {EXPERIENCE.map((exp, idx) => (
                    <div key={idx} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                        <div className="flex items-center justify-center w-10 h-10 rounded-full border border-white bg-slate-300 group-[.is-active]:bg-academic-500 text-slate-500 group-[.is-active]:text-emerald-50 shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2">
                            <Calendar className="w-5 h-5" />
                        </div>
                        <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-slate-200 bg-white shadow-sm">
                            <div className="flex flex-col mb-1">
                                <div className="font-bold text-academic-900">{exp.role}</div>
                                <div className="text-sm font-medium text-academic-600">{exp.institution}</div>
                                <div className="flex justify-between text-xs text-slate-500 mt-1">
                                    <span>{exp.period}</span>
                                    <span>{exp.location}</span>
                                </div>
                            </div>
                            <ul className="mt-3 list-disc list-outside ml-4 space-y-1 text-sm text-slate-600">
                                {exp.details.map((detail, dIdx) => (
                                    <li key={dIdx}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-12 bg-academic-50 p-6 rounded-lg border border-academic-100">
                <h3 className="text-lg font-bold text-academic-900 mb-4">Teaching & Mentorship Highlights</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {TEACHING_HIGHLIGHTS.map((item, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-700">
                            <span className="mr-2 text-academic-500">•</span>
                            {item}
                        </li>
                    ))}
                </ul>
            </div>
        </Section>

        {/* Education */}
        <Section id="education" title="Education">
            <div className="grid grid-cols-1 gap-6">
                {EDUCATION.map((edu, idx) => (
                    <div key={idx} className="flex flex-col sm:flex-row sm:items-start justify-between p-4 bg-white border border-gray-100 rounded-lg hover:border-academic-200 transition-colors">
                        <div className="mb-2 sm:mb-0">
                            <h3 className="font-bold text-lg text-gray-900">{edu.institution}</h3>
                            <p className="text-academic-700 font-medium">{edu.degree}</p>
                            {edu.gpa && <p className="text-sm text-gray-500 mt-1">{edu.gpa}</p>}
                        </div>
                        <div className="text-right sm:text-right flex flex-col items-start sm:items-end">
                             <div className="flex items-center text-sm text-gray-600 font-medium">
                                <LocationIcon className="w-3 h-3 mr-1" />
                                {edu.location}
                            </div>
                            <span className="inline-block mt-1 px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded font-mono">
                                {edu.period}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* Projects */}
        <Section id="projects" title="Projects">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {PROJECTS.map((proj, idx) => (
                    <div key={idx} className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm flex flex-col">
                        <h3 className="font-bold text-gray-900 mb-3">{proj.title}</h3>
                        <p className="text-sm text-gray-600 leading-relaxed flex-grow">{proj.description}</p>
                    </div>
                ))}
            </div>
        </Section>

        {/* Skills */}
        <Section id="skills" title="Technical Skills">
            <div className="space-y-6">
                {SKILLS.map((cat, idx) => (
                    <div key={idx}>
                        <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-3">{cat.category}</h4>
                        <div className="flex flex-wrap gap-2">
                            {cat.skills.map((skill, sIdx) => (
                                <span key={sIdx} className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-slate-100 text-slate-800 border border-slate-200">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </Section>

        {/* Contact Footer */}
        <footer className="bg-academic-900 text-white mt-20 py-12" id="contact">
            <div className="max-w-4xl mx-auto px-4 text-center">
                <h2 className="text-2xl font-serif font-bold mb-6">Get In Touch</h2>
                <p className="text-academic-200 mb-8 max-w-xl mx-auto">
                    I am always open to discussing research collaborations, academic opportunities, or technical consulting.
                </p>
                <a 
                    href={`mailto:${CONTACT_INFO.email}`} 
                    className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-academic-900 bg-white hover:bg-gray-100 transition-colors"
                >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact via Email
                </a>
                
<div className="mt-12 pt-8 border-t border-academic-700 text-sm text-academic-400">
  <p>&copy; 2022 {CONTACT_INFO.name}. All rights reserved.</p>
</div>

            </div>
        </footer>
      </main>
    </div>
  );
}

export default App;
