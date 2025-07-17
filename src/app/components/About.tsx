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

    const experiences = [
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

                {/* Experience */}
                <div className="mt-20">
                    <h3 className="text-2xl font-semibold text-gray-900 text-center mb-12">
                        Professional Experience
                    </h3>
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow duration-200">
                                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                                    <h4 className="text-xl font-semibold text-gray-900">{exp.title}</h4>
                                    <span className="text-blue-600 font-medium">{exp.period}</span>
                                </div>
                                <p className="text-gray-600 font-medium mb-2">{exp.company}</p>
                                <p className="text-gray-600">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
} 