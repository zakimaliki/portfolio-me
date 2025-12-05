'use client';

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        // Handle form submission here
        console.log('Form submitted:', formData);
        // Reset form
        setFormData({ name: '', email: '', subject: '', message: '' });
    };

    const contactInfo = [
        {
            icon: '📧',
            title: 'Email',
            value: 'malikzakitop@gmail.com',
            link: 'mailto:malikzakitop@gmail.com'
        },
        {
            icon: '📱',
            title: 'Phone',
            value: '085311759600',
            link: 'tel:085311759600'
        },
        {
            icon: '📍',
            title: 'Location',
            value: 'Sleman, Yogyakarta, Indonesia',
            link: '#'
        }
    ];

    return (
        <section id="contact" className="py-20 sm:py-28 md:py-32 bg-gradient-to-br from-blue-50 to-indigo-50">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Get In Touch
                    </h2>
                    <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        I'm always interested in hearing about new opportunities and exciting projects. Feel free to reach out—I'd love to collaborate or just have a conversation!
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-10">
                    {/* Left Section - Quick Actions */}
                    <div className="space-y-4 sm:space-y-6">
                        <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200">
                            <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-3 sm:mb-4 lg:mb-6">
                                Let's Schedule a Meeting
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 lg:mb-8 leading-relaxed">
                                The best way to discuss opportunities is through a direct conversation. Book a time that works best for you!
                            </p>
                            <a
                                href="https://calendly.com/malikizakitop/30min"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-block w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95 text-sm sm:text-base"
                            >
                                Schedule on Calendly
                            </a>
                        </div>

                        {/* Contact Methods */}
                        <div className="space-y-3 sm:space-y-4">
                            {contactInfo.map((info, index) => (
                                <a
                                    key={index}
                                    href={info.link}
                                    className="flex items-start gap-3 sm:gap-4 p-3 sm:p-4 lg:p-5 bg-white rounded-lg border border-gray-200 hover:border-blue-400 hover:shadow-md transition-all duration-300 group"
                                >
                                    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-blue-100 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-blue-200 transition-colors duration-300">
                                        <span className="text-lg sm:text-xl">{info.icon}</span>
                                    </div>
                                    <div className="flex-grow min-w-0">
                                        <h4 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">{info.title}</h4>
                                        <p className="text-blue-600 font-medium text-xs sm:text-sm hover:text-blue-700 break-all">
                                            {info.value}
                                        </p>
                                    </div>
                                    <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-400 group-hover:text-blue-600 transition-colors flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Right Section - Social Links */}
                    <div className="bg-white rounded-lg sm:rounded-xl shadow-lg p-4 sm:p-6 lg:p-8 border border-gray-200">
                        <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 mb-4 sm:mb-6 lg:mb-8">
                            Connect With Me
                        </h3>
                        <p className="text-sm sm:text-base text-gray-600 mb-6 sm:mb-8 leading-relaxed">
                            Follow my latest updates and projects on social media. Let's build something amazing together!
                        </p>
                        
                        <div className="space-y-4 mb-8">
                            <div className="flex flex-col gap-3">
                                <a 
                                    href="https://www.linkedin.com/in/zaki-maliki-b6a798168/" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-blue-50 to-blue-100 rounded-lg hover:from-blue-100 hover:to-blue-200 transition-all duration-300 border border-blue-200 hover:border-blue-400"
                                >
                                    <svg className="w-6 h-6 text-blue-600 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-gray-900">LinkedIn</p>
                                        <p className="text-sm text-gray-600">Connect professionally</p>
                                    </div>
                                </a>

                                <a 
                                    href="https://github.com/zakimaliki" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-gray-50 to-gray-100 rounded-lg hover:from-gray-100 hover:to-gray-200 transition-all duration-300 border border-gray-200 hover:border-gray-400"
                                >
                                    <svg className="w-6 h-6 text-gray-900 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-gray-900">GitHub</p>
                                        <p className="text-sm text-gray-600">Check my projects</p>
                                    </div>
                                </a>

                                <a 
                                    href="https://medium.com/@zakimaliki" 
                                    target="_blank" 
                                    rel="noopener noreferrer"
                                    className="flex items-center gap-3 p-4 bg-gradient-to-r from-amber-50 to-orange-100 rounded-lg hover:from-amber-100 hover:to-orange-200 transition-all duration-300 border border-orange-200 hover:border-orange-400"
                                >
                                    <span className="text-2xl">✍️</span>
                                    <div className="flex-grow">
                                        <p className="font-semibold text-gray-900">Medium</p>
                                        <p className="text-sm text-gray-600">Read my articles</p>
                                    </div>
                                </a>
                            </div>
                        </div>

                        {/* Quick Stats */}
                        <div className="border-t border-gray-200 pt-8">
                            <h4 className="font-semibold text-gray-900 mb-4">Response Time</h4>
                            <div className="flex items-center gap-2 text-sm text-gray-600">
                                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                                <span>Usually responds within 24 hours</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 