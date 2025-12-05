export default function Projects() {
    const projects = [
        {
            title: 'Sistem Informasi Madrasah',
            description: 'Sistem informasi terintegrasi untuk manajemen madrasah dengan fitur administrasi, pembelajaran, dan pelaporan.',
            link: 'https://sistem-informasi-madrasah.vercel.app/',
            category: 'Full-Stack Web Application'
        },
        {
            title: 'Lifetime Art',
            description: 'Platform galeri seni digital yang menampilkan karya seniman dengan fitur penjualan dan kurasi koleksi.',
            link: 'https://lifetimeart.vercel.app/',
            category: 'E-Commerce Platform'
        },
        {
            title: 'Warkop AI',
            description: 'Aplikasi percakapan berbasis AI untuk pengalaman warung kopi digital yang interaktif dan menyenangkan.',
            link: 'https://warkop-ai.vercel.app/',
            category: 'AI-Powered Application'
        },
        {
            title: 'Pijar',
            description: 'Platform pembelajaran digital untuk mendukung proses belajar mengajar yang inovatif dan efektif.',
            link: 'https://pijar.vercel.app/',
            category: 'E-Learning Platform'
        }
    ];

    return (
        <section id="projects" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
                        My Projects
                    </h2>
                    <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                        Exploring innovation through real-world projects. Each project represents my dedication to creating meaningful digital solutions.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 gap-8">
                    {projects.map((project, index) => (
                        <a
                            key={index}
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group bg-white rounded-lg border border-gray-200 hover:border-blue-400 overflow-hidden transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                        >
                            <div className="p-6 h-full flex flex-col">
                                <div className="mb-4">
                                    <span className="inline-block px-3 py-1 bg-blue-100 text-blue-800 text-sm font-semibold rounded-full">
                                        {project.category}
                                    </span>
                                </div>
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-gray-600 mb-4 flex-grow">
                                    {project.description}
                                </p>
                                <div className="inline-flex items-center text-blue-600 font-semibold group-hover:text-blue-800 transition-colors">
                                    Visit Project
                                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                                    </svg>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
