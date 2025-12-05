export default function About() {
    const skills = [
        'React.js',
        'Next.js',
        'Frontend Development',
        'Web Development',
        'Vue.js',
        'Nuxt.js',
        'TypeScript',
        'Tailwind CSS',
        'Full-Stack Development',
        'Backend Development'
    ];

    return (
        <section id="about" className="py-20 sm:py-28 md:py-32 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        About Me
                    </h2>
                    <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        I am a Web Developer specializing in frontend development with expertise in building modern, responsive, and user-friendly web applications. My journey combines education technology passion with clean code practices.
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 md:gap-16 items-start">
                    {/* About Content */}
                    <div className="space-y-6 sm:space-y-8">
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-bold text-gray-900 mb-6">
                                My Journey
                            </h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                I started my journey in educational technology with a passion for making learning more accessible and engaging. What began as curiosity quickly transformed into a mission to revolutionize the learning experience through technology.
                            </p>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                I believe in creating educational tools that are not only functional but also intuitive and engaging. Every project is an opportunity to make learning more effective, accessible, and enjoyable for students of all ages.
                            </p>
                            <p className="text-gray-600 leading-relaxed">
                                When I'm not developing, I'm researching new methodologies, collaborating with educators, or exploring emerging technologies that can transform education.
                            </p>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-gray-200">
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-600">4+</div>
                                <p className="text-sm text-gray-600 mt-2">Years Experience</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-600">20+</div>
                                <p className="text-sm text-gray-600 mt-2">Projects Completed</p>
                            </div>
                            <div className="text-center">
                                <div className="text-2xl sm:text-3xl font-bold text-blue-600">100%</div>
                                <p className="text-sm text-gray-600 mt-2">Satisfaction</p>
                            </div>
                        </div>
                    </div>

                    {/* Skills */}
                    <div className="space-y-6 sm:space-y-8">
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-900">
                            Skills & Technologies
                        </h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                            {skills.map((skill, index) => (
                                <div 
                                    key={index} 
                                    className="bg-gradient-to-br from-blue-50 to-blue-100 border border-blue-200 rounded-lg px-4 sm:px-5 py-3 sm:py-4 hover:shadow-md transition-all duration-300 hover:border-blue-400"
                                >
                                    <span className="text-blue-900 font-semibold text-sm sm:text-base">{skill}</span>
                                </div>
                            ))}
                        </div>
                        
                        {/* Download CV Button */}
                        <div className="pt-6 sm:pt-8">
                            <a 
                                href="/CV.pdf"
                                download="Zaki_Maliki_CV.pdf"
                                className="inline-block w-full sm:w-auto text-center bg-blue-600 hover:bg-blue-700 text-white px-6 sm:px-8 py-3 sm:py-4 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                            >
                                Download Full CV
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 