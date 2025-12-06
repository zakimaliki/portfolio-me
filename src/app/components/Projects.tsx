export default function Projects() {
    const projects = [
        {
            title: 'Sistem Informasi Madrasah',
            description: 'Integrated information system for Islamic school management with features for administration, learning, and reporting.',
            link: 'https://sistem-informasi-madrasah.vercel.app/',
            category: 'Full-Stack Web Application',
            icon: '🏫',
            tags: ['Next.js', 'TypeScript', 'Database']
        },
        {
            title: 'Lifetime Art',
            description: 'Digital art gallery platform showcasing artworks with selling features and collection curation capabilities.',
            link: 'https://lifetimeart.vercel.app/',
            category: 'E-Commerce Platform',
            icon: '🎨',
            tags: ['React', 'E-Commerce', 'Design']
        },
        {
            title: 'Warkop AI',
            description: 'AI-powered conversation application providing an interactive and enjoyable digital coffee shop experience.',
            link: 'https://warkop-ai.vercel.app/',
            category: 'AI-Powered Application',
            icon: '🤖',
            tags: ['AI', 'Chat', 'Frontend']
        },
        {
            title: 'Pijar',
            description: 'Digital learning platform designed to support innovative and effective teaching and learning processes.',
            link: 'https://pijar.vercel.app/',
            category: 'E-Learning Platform',
            icon: '📚',
            tags: ['EdTech', 'Learning', 'Full-Stack']
        },
        {
            title: 'Zero Editor',
            description: 'A powerful and intuitive code editor designed for modern development with clean syntax highlighting and real-time collaboration features.',
            link: 'https://zero-editor.vercel.app/',
            category: 'Developer Tool',
            icon: '📝',
            tags: ['Code Editor', 'Developer Tools', 'Web App']
        }
    ];

    return (
        <section id="projects" className="py-20 sm:py-28 md:py-32 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16 sm:mb-20">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-900 mb-4 sm:mb-6">
                        My Projects
                    </h2>
                    <div className="h-1 w-16 bg-blue-600 mx-auto mb-6"></div>
                    <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
                        Exploring innovation through real-world projects. Each represents my dedication to creating meaningful digital solutions with clean code and excellent user experience.
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 lg:gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group h-full bg-white rounded-lg sm:rounded-xl border border-gray-200 hover:border-blue-400 overflow-hidden transition-all duration-300 hover:shadow-xl hover:-translate-y-1 sm:hover:-translate-y-2 active:scale-95 flex flex-col"
                        >
                            {/* Project Header with Icon */}
                            <div className="relative h-24 sm:h-32 md:h-40 bg-gradient-to-br from-blue-50 to-indigo-50 border-b border-gray-100 flex items-center justify-center overflow-hidden group-hover:from-blue-100 group-hover:to-indigo-100 transition-all duration-300 flex-shrink-0">
                                <span className="text-4xl sm:text-5xl md:text-6xl">{project.icon}</span>
                                <div className="absolute inset-0 opacity-0 group-hover:opacity-10 bg-gradient-to-r from-blue-600 to-indigo-600 transition-opacity duration-300"></div>
                            </div>

                            {/* Project Content */}
                            <div className="p-4 sm:p-5 lg:p-6 flex-grow flex flex-col">
                                {/* Category Badge */}
                                <div className="mb-2 sm:mb-3">
                                    <span className="inline-block px-2 sm:px-3 py-1 bg-blue-100 text-blue-800 text-xs font-semibold rounded-full hover:bg-blue-200 transition-colors duration-300">
                                        {project.category}
                                    </span>
                                </div>

                                {/* Title */}
                                <h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-300 line-clamp-2">
                                    {project.title}
                                </h3>

                                {/* Description */}
                                <p className="text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 flex-grow line-clamp-2 sm:line-clamp-3">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span 
                                            key={tagIndex}
                                            className="text-xs px-2 py-0.5 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors duration-300"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                {/* CTA Link */}
                                <div className="inline-flex items-center text-blue-600 font-semibold text-xs sm:text-sm group-hover:text-blue-800 transition-all duration-300">
                                    Visit Project
                                    <svg className="w-3 h-3 sm:w-4 sm:h-4 ml-1 sm:ml-2 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>

                {/* Call to Action */}
                <div className="mt-16 sm:mt-20 text-center">
                    <p className="text-gray-600 mb-6 text-base sm:text-lg">
                        Want to see more of my work?
                    </p>
                    <a 
                        href="https://github.com/zakimaliki"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
                    >
                        View on GitHub
                    </a>
                </div>
            </div>
        </section>
    );
}
