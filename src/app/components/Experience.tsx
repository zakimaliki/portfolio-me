'use client';

import { useState } from 'react';

interface Experience {
    title: string;
    company: string;
    period: string;
    description: string;
}

export default function Experience() {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(0);

    const experiences: Experience[] = [
        {
            title: 'Software Engineer PHP & VueJS Developer',
            company: 'Ascendiz',
            period: 'Aug 2025 - Present',
            description: 'Working as a Software Engineer specializing in PHP and Vue.js development. Building robust and scalable web applications using Vue.js for frontend and Laravel/PHP for backend systems.'
        },
        {
            title: 'Teacher and Mentor',
            company: 'Celerates School',
            period: 'Sep 2025 - Present',
            description: 'Freelance teacher and mentor providing guidance and education to students. Remote position focused on delivering quality educational content and mentoring in web development and programming.'
        },
        {
            title: 'Back End Developer',
            company: 'Integrasi Logistik Cipta Solusi (ILCS)',
            period: 'Nov 2024 - May 2025',
            description: 'As a Backend Developer at Integrasi Logistik Cipta Solusi (ILCS), I contributed to the YMS project by developing and maintaining backend systems using Golang. My responsibilities included optimizing database queries to enhance performance, designing Technical Requirement Documents (TRD) to ensure clear project documentation, and creating unit tests to improve code reliability and quality.'
        },
        {
            title: 'Academic Coding Instructor (Fullstack Website)',
            company: 'Pijar Camp',
            period: 'Mar 2022 - Present',
            description: 'Pijar Indonesia is an end-to-end education ecosystem service in Indonesia by providing a digital-based learning platform so as to create excellent human resources who are competent, innovative, and ready to work.'
        },
        {
            title: 'Frontend Web Developer',
            company: 'Akar Inti Teknologi',
            period: 'Sep 2021 - Mar 2022',
            description: 'Revamp project BPP CMS (laravel), Revamp project RTS CMS (laravel), Integrate to backend and third party (laravel), Maintenance projects RTS CMS, BPP CMS (laravel).'
        },
        {
            title: 'Junior Programmer',
            company: 'anilo',
            period: 'Aug 2021 - Mar 2022',
            description: 'Assist in developing innovative IT solutions for companies who demand reliable smart technologies.'
        },
        {
            title: 'Frontend Engineer',
            company: 'amalan international',
            period: 'Mar 2021 - Aug 2021',
            description: 'Revamp project ayolunas.com (vue.js), Integrate to third party project ayolunas.com (vue.js).'
        },
        {
            title: 'Frontend Developer',
            company: 'PT. Ellen May Indonesia',
            period: 'Jul 2020 - Oct 2020',
            description: 'Split from laravel to vue as frontend Eraste.com and make pwa (vue.js), Helping to create template artara (laravel), emtrade.id (vue.js), obvest.com (vue.js).'
        },
        {
            title: 'Assistant Lecturer',
            company: 'Universitas Teknologi Digital Indonesia',
            period: 'Jun 2018 - Jun 2020',
            description: 'Teaching Algorithms and programming, Advanced Algorithms and programming, Data Structures, Computer Networks, Inductive Statistics using R language, Big Data Analytics, Technology Data Base (Using No SQL).'
        },
        {
            title: 'Student Bootcamp Frontend Developer',
            company: 'Praxis Academy',
            period: 'Jun 2019 - Aug 2019',
            description: 'Student bootcamp for frontend development.'
        },
        {
            title: 'Frontend Developer',
            company: 'Amigo Group Indonesia',
            period: 'Apr 2018 - Apr 2019',
            description: 'Create a discount setup dashboard template (vuetify), Integrate to third parties in the dashboard (vue.js), Integrate data on the backend to the frontend at check in products (javafx).'
        },
        {
            title: 'Junior Frontend',
            company: 'volunteers.id',
            period: 'Jun 2018 - Dec 2018',
            description: 'Junior frontend developer.'
        },
        {
            title: 'Teacher',
            company: 'SMKS KHOZINATUL ULUM TODANAN',
            period: 'Nov 2016 - Dec 2017',
            description: 'Taught computer network engineering, computer systems, basic programming, and operating systems.'
        }
    ];

    const toggleExpand = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <section id="experience" className="py-20 bg-gray-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Professional Experience
                    </h2>
                    <p className="text-lg text-gray-600">
                        My career journey in web development and education
                    </p>
                </div>

                {/* Timeline */}
                <div className="space-y-4">
                    {experiences.map((exp, index) => (
                        <div
                            key={index}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden transition-all duration-300 hover:border-blue-400 hover:shadow-md"
                        >
                            {/* Header - Always Visible */}
                            <button
                                onClick={() => toggleExpand(index)}
                                className="w-full px-6 py-4 flex items-center justify-between hover:bg-gray-50 transition-colors"
                            >
                                <div className="text-left flex-grow">
                                    <h3 className="text-lg font-semibold text-gray-900 mb-1">
                                        {exp.title}
                                    </h3>
                                    <p className="text-sm text-gray-600">
                                        {exp.company} • {exp.period}
                                    </p>
                                </div>
                                <svg
                                    className={`w-5 h-5 text-gray-400 transition-transform duration-300 flex-shrink-0 ml-4 ${
                                        expandedIndex === index ? 'transform rotate-180' : ''
                                    }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                                </svg>
                            </button>

                            {/* Expanded Content */}
                            {expandedIndex === index && (
                                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                                    <p className="text-gray-700 leading-relaxed">
                                        {exp.description}
                                    </p>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
