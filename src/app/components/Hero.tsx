"use client";

export default function Hero() {
    const handleViewWork = () => {
        document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <section id="home" className="relative flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-indigo-50 pt-32 pb-20 sm:pt-40 sm:pb-32 md:py-44 overflow-hidden">
            {/* Background decoration */}
            <div className="absolute inset-0 opacity-30 pointer-events-none">
                <div className="absolute top-20 right-10 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
                <div className="absolute -bottom-8 left-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-3xl opacity-50"></div>
            </div>

            <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6 sm:space-y-8 lg:space-y-10">
                    {/* Profile Image */}
                    <div className="flex justify-center animate-float">
                        <div className="relative w-28 h-28 sm:w-36 sm:h-36 md:w-44 md:h-44 rounded-full bg-white p-1 sm:p-2 shadow-xl ring-4 ring-blue-100 overflow-hidden flex items-center justify-center">
                            <img
                                src="/avatar.png"
                                alt="Zaki Maliki"
                                className="w-full h-full object-cover object-top rounded-full"
                            />
                        </div>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-3 sm:space-y-4">
                        <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                            Hi, I'm <span className="text-blue-600 bg-gradient-to-r from-blue-600 to-blue-700 bg-clip-text text-transparent">Zaki Maliki</span>
                        </h1>
                        <p className="text-lg sm:text-2xl md:text-3xl font-semibold text-gray-700">
                            Web Developer & Frontend Specialist
                        </p>
                    </div>

                    {/* Description */}
                    <p className="text-base sm:text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        I build modern, responsive, and user-friendly web applications with a focus on clean code and excellent user experience. Passionate about EdTech and creating solutions that make a difference.
                    </p>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center pt-2 sm:pt-4">
                        <button 
                            onClick={handleViewWork}
                            className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95"
                        >
                            View My Work
                        </button>
                        <a 
                            href="/CV.pdf"
                            download="Zaki_Maliki_CV.pdf"
                            className="w-full sm:w-auto border-2 border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 text-center"
                        >
                            Download CV
                        </a>
                    </div>

                    {/* Social Links */}
                    <div className="flex flex-col sm:flex-row justify-center items-center gap-4 sm:gap-8 pt-4 sm:pt-8">
                        <a 
                            href="mailto:malikzakitop@gmail.com" 
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:scale-110" 
                            title="Email"
                            aria-label="Email"
                        >
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zM4 20V8.99l8 6.99 8-6.99V20H4z" />
                            </svg>
                        </a>
                        <a 
                            href="https://linkedin.com/in/zaki-maliki-b6a798168" 
                            className="text-gray-500 hover:text-blue-600 transition-colors duration-300 hover:scale-110" 
                            title="LinkedIn" 
                            target="_blank" 
                            rel="noopener noreferrer"
                            aria-label="LinkedIn"
                        >
                            <svg className="w-6 h-6 sm:w-7 sm:h-7" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M19 0h-14c-2.76 0-5 2.24-5 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5v-14c0-2.76-2.24-5-5-5zm-11 19h-3v-9h3v9zm-1.5-10.28c-.97 0-1.75-.79-1.75-1.75s.78-1.75 1.75-1.75 1.75.79 1.75 1.75-.78 1.75-1.75 1.75zm13.5 10.28h-3v-4.5c0-1.08-.02-2.47-1.5-2.47-1.5 0-1.73 1.17-1.73 2.39v4.58h-3v-9h2.89v1.23h.04c.4-.76 1.38-1.56 2.84-1.56 3.04 0 3.6 2 3.6 4.59v5.74z" />
                            </svg>
                        </a>
                        <div className="text-gray-600 text-sm flex items-center gap-1 sm:gap-2">
                            <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
                            </svg>
                            <span>Yogyakarta, Indonesia</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <svg className="w-6 h-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            </div>
        </section>
    );
} 