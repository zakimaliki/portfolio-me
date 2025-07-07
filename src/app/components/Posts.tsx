export default function Posts() {
    const projects = [
        {
            title: 'E-Commerce Platform',
            description: 'A full-stack e-commerce solution built with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.',
            image: '🛒',
            technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
            link: '#',
            github: '#'
        },
        {
            title: 'Task Management App',
            description: 'A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.',
            image: '📋',
            technologies: ['React', 'TypeScript', 'Socket.io', 'PostgreSQL'],
            link: '#',
            github: '#'
        },
        {
            title: 'Weather Dashboard',
            description: 'A beautiful weather application that displays current weather and forecasts with interactive maps and location-based services.',
            image: '🌤️',
            technologies: ['React', 'OpenWeather API', 'Leaflet Maps', 'CSS3'],
            link: '#',
            github: '#'
        },
        {
            title: 'Portfolio Website',
            description: 'A modern, responsive portfolio website built with Next.js and Tailwind CSS, featuring smooth animations and optimal performance.',
            image: '💼',
            technologies: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
            link: '#',
            github: '#'
        },
        {
            title: 'Chat Application',
            description: 'Real-time chat application with features like message encryption, file sharing, and group conversations.',
            image: '💬',
            technologies: ['React', 'Socket.io', 'Express', 'Redis'],
            link: '#',
            github: '#'
        },
        {
            title: 'Fitness Tracker',
            description: 'A comprehensive fitness tracking app that helps users monitor workouts, nutrition, and progress with detailed analytics.',
            image: '💪',
            technologies: ['React Native', 'Firebase', 'Chart.js', 'Expo'],
            link: '#',
            github: '#'
        }
    ];

    return (
        <section id="posts" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        My Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Here are some of the projects I've worked on. Each one represents a unique challenge
                        and an opportunity to create something meaningful.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                            {/* Project Image */}
                            <div className="h-48 bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                                <span className="text-6xl">{project.image}</span>
                            </div>

                            {/* Project Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 text-sm leading-relaxed mb-4">
                                    {project.description}
                                </p>

                                {/* Technologies */}
                                <div className="flex flex-wrap gap-2 mb-6">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-blue-100 text-blue-800 text-xs font-medium rounded-full"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>

                                {/* Project Links */}
                                <div className="flex gap-3">
                                    <a
                                        href={project.link}
                                        className="flex-1 bg-blue-600 hover:bg-blue-700 text-white text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                                    >
                                        Live Demo
                                    </a>
                                    <a
                                        href={project.github}
                                        className="flex-1 border border-gray-300 hover:border-gray-400 text-gray-700 text-center py-2 px-4 rounded-lg text-sm font-medium transition-colors duration-200"
                                    >
                                        GitHub
                                    </a>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More Button */}
                <div className="text-center mt-12">
                    <button className="bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-200">
                        View All Projects
                    </button>
                </div>
            </div>
        </section>
    );
} 