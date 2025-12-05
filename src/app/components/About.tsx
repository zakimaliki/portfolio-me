export default function About() {
    const skills = [
        'React.js',
        'Web Development',
        'Front-end Development',
        'Next.js',
        'Vue.js',
        'Vuetify',
        'Go (Programming Language)',
        'Nuxt.js',
        'Full-Stack Development',
        'Back-End Web Development'
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        About Me
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        I am Zaki Maliki, a Web Developer specializing in frontend development. I have experience building modern, responsive, and user-friendly web applications. My journey includes roles as a frontend developer, programmer, and educator. Let's connect and collaborate!
                    </p>
                </div>

                <div className="grid lg:grid-cols-2 gap-12 items-start">
                    {/* About Content */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            My Journey
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            I started my journey in educational technology with a passion for making learning more accessible and engaging.
                            What began as a curiosity about how technology can enhance education quickly turned into a mission to transform the learning experience.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            I believe in creating educational tools that are not only functional but also intuitive and engaging for students of all ages.
                            Every project is an opportunity to make learning more effective, accessible, and enjoyable.
                        </p>
                        <p className="text-gray-600 leading-relaxed">
                            When I'm not developing educational software, you can find me researching new learning methodologies,
                            collaborating with educators, or exploring emerging technologies that can revolutionize education.
                        </p>
                    </div>

                    {/* Skills */}
                    <div className="space-y-6">
                        <h3 className="text-2xl font-semibold text-gray-900 mb-6">
                            EdTech Skills & Expertise
                        </h3>
                        <div className="grid grid-cols-2 gap-3">
                            {skills.map((skill, index) => (
                                <div key={index} className="bg-blue-50 border border-blue-200 rounded-lg px-4 py-3">
                                    <span className="text-blue-800 font-medium text-sm">{skill}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
} 