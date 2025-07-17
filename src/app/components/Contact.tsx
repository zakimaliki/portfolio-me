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
        <section id="contact" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        Get In Touch
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        I'm always interested in hearing about new opportunities and exciting projects.
                        Feel free to reach out if you'd like to collaborate or just want to say hello!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12">
                    {/* Meeting (kiri) */}
                    <div className="flex flex-col justify-start items-center lg:items-start h-full">
                        <div className="text-center lg:text-left w-full mt-0 flex flex-col justify-start h-full">
                            <h3 className="text-2xl font-semibold text-gray-900 mb-6">Ingin Diskusi atau Meeting?</h3>
                            <p className="mb-4 text-gray-600">Jadwalkan pertemuan dengan saya secara langsung melalui Calendly.</p>
                            <div className="flex justify-center lg:justify-start">
                                <a
                                    href="https://calendly.com/malikizakitop/30min"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="bg-blue-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-blue-700 transition w-fit"
                                >
                                    Jadwalkan Meeting via Calendly
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Contact Information */}
                    <div className="space-y-6 flex flex-col justify-start h-full">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            Contact Information
                        </h3>
                        <div className="space-y-6">
                            {contactInfo.map((info, index) => (
                                <div key={index} className="flex items-center space-x-4">
                                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                                        <span className="text-2xl">{info.icon}</span>
                                    </div>
                                    <div>
                                        <h4 className="text-lg font-medium text-gray-900">{info.title}</h4>
                                        <a
                                            href={info.link}
                                            className="text-blue-600 hover:text-blue-700 transition-colors duration-200"
                                        >
                                            {info.value}
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Social Links */}
                        <div className="pt-8">
                            <h4 className="text-lg font-medium text-gray-900 mb-4">Follow Me</h4>
                            <div className="flex space-x-4">
                                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                </a>
                                <a href="#" className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-lg flex items-center justify-center transition-colors duration-200">
                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 