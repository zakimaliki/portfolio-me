"use client";
import { useEffect, useState } from 'react';

export default function Hero() {
    const [minHeight, setMinHeight] = useState('130vh');

    useEffect(() => {
        const handleResize = () => {
            if (window.matchMedia('(min-width: 640px)').matches) {
                setMinHeight('100vh');
            }
        };
        handleResize();
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <section id="home" className="flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 mt-6 sm" style={{ minHeight }}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-8">
                    {/* Profile Image */}
                    <div className="flex justify-center">
                        <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full bg-white p-2 shadow-md overflow-hidden flex items-center justify-center">
                            <img
                                src="/avatar.png"
                                alt="Avatar"
                                className="w-full h-full object-cover object-top rounded-full"
                                style={{ aspectRatio: "1/1", background: 'white' }}
                            />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-4">
                        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900">
                            Hi, I'm <span className="text-blue-600">Zaki Maliki</span>
                        </h1>
                        <p className="text-xl sm:text-2xl text-gray-600 max-w-3xl mx-auto">
                            Web Developer | Frontend Specialist
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-lg text-gray-500 max-w-2xl mx-auto leading-relaxed">
                        I am a Web Developer specializing in frontend development. I build modern, responsive, and user-friendly web applications with a focus on clean code and excellent user experience. Let's connect and collaborate!
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                        <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-lg hover:shadow-xl">
                            View My Work
                        </button>
                        <button className="border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                            Download CV
                        </button>
                    </div>

                    {/* Social Links */}
                    <div className="flex justify-center space-x-6 pt-8">
                        <a href="mailto:malikzakitop@gmail.com" className="text-gray-400 hover:text-blue-600 transition-colors duration-200" title="Email">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 6.99 8-6.99V20H4z" />
                            </svg>
                        </a>
                        <a href="https://linkedin.com/in/zaki-maliki-b6a798168" className="text-gray-400 hover:text-blue-600 transition-colors duration-200" title="LinkedIn" target="_blank" rel="noopener noreferrer">
                            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z" />
                            </svg>
                        </a>
                        <span className="text-gray-500 text-sm flex items-center" title="Location">
                            <svg className="w-5 h-5 mr-1" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" /></svg>
                            Sleman, Yogyakarta, Indonesia
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
} 