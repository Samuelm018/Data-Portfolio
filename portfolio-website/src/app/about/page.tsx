import { ArrowRight } from "lucide-react";

export default function AboutPage() {
    return (
        <div className="py-20">
            <div className="container-custom max-w-4xl">
                <h1 className="text-4xl font-bold mb-12">About Me</h1>

                {/* Summary Section */}
                <section className="mb-16">
                    <div className="bg-card border border-gray-800 rounded-2xl p-8 md:p-12">
                        <h2 className="text-2xl font-bold mb-6 text-white">Professional Summary</h2>
                        <div className="space-y-6 text-gray-300 leading-relaxed text-lg">
                            <p>
                                I am a results-driven Data Analyst with a strong foundation in translating complex datasets into actionable business insights. My expertise lies in building intuitive dashboards, conducting rigorous statistical analysis, and optimizing data workflows to support strategic decision-making.
                            </p>
                            <p>
                                With proficiency in SQL, Power BI, Python, and Excel, I focus on solving real-world business problems—whether it&apos;s reducing customer churn, optimizing HR workforce planning, or analyzing sales performance. I believe that data is only as valuable as the decisions it empowers.
                            </p>
                            <p>
                                I am currently seeking opportunities where I can leverage my analytical skills to drive business growth and operational efficiency.
                            </p>
                        </div>

                        <div className="mt-8 pt-8 border-t border-gray-800">
                            <a
                                href="/SAMUEL_M_Resume.pdf"
                                download="SAMUEL_M_Resume.pdf"
                                className="inline-flex items-center text-primary font-semibold hover:text-blue-400 transition-colors"
                                target="_blank"
                            >
                                Download Resume <ArrowRight className="ml-2" size={20} />
                            </a>
                        </div>
                    </div>
                </section>

                {/* Skills Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-8 text-white">Technical Skills</h2>

                    <div className="grid md:grid-cols-2 gap-8">
                        <div className="space-y-6">
                            <div className="bg-card border border-gray-800 p-6 rounded-xl">
                                <h3 className="text-lg font-bold mb-4 text-secondary">Data Visualization</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Power BI", "Tableau", "Excel Dashboards", "Matplotlib", "Seaborn"].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-900 rounded-md text-gray-300 text-sm border border-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-card border border-gray-800 p-6 rounded-xl">
                                <h3 className="text-lg font-bold mb-4 text-primary">Data Analysis & Processing</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Python", "Pandas", "NumPy", "Power Query", "Data Cleaning", "Advanced Excel"].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-900 rounded-md text-gray-300 text-sm border border-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <div className="bg-card border border-gray-800 p-6 rounded-xl">
                                <h3 className="text-lg font-bold mb-4 text-purple-500">Database & SQL</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["MySQL", "PostgreSQL", "Data Modeling", "Complex Queries", "Database Design"].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-900 rounded-md text-gray-300 text-sm border border-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="bg-card border border-gray-800 p-6 rounded-xl">
                                <h3 className="text-lg font-bold mb-4 text-green-500">Soft Skills</h3>
                                <div className="flex flex-wrap gap-2">
                                    {["Problem Solving", "Strategic Thinking", "Data Storytelling", "Stakeholder Communication", "Attention to Detail"].map(skill => (
                                        <span key={skill} className="px-3 py-1 bg-gray-900 rounded-md text-gray-300 text-sm border border-gray-800">
                                            {skill}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}
