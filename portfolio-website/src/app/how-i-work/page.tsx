
import { ArrowRight, Brain, Code2, LineChart } from "lucide-react";

export default function HowIWorkPage() {
    return (
        <div className="py-20">
            <div className="container-custom max-w-4xl">
                <h1 className="text-4xl font-bold mb-12">How I Work</h1>

                {/* Philosophy Section */}
                <section className="mb-20">
                    <div className="bg-[#141922] border border-[#1F2937] rounded-2xl p-8 md:p-12">
                        <h2 className="text-3xl font-bold mb-6 text-white">Thinking Before Building.</h2>
                        <div className="space-y-6 text-[#E6E7EB] leading-relaxed text-lg">
                            <p>
                                Many analysts jump straight into SQL or Power BI. I start with the business question.
                                I believe that a dashboard without a clear purpose is just a collection of charts.
                            </p>
                            <p>
                                My approach focuses on the "Why"—identifying the critical business decisions stakeholders face, then designing backward to ensure every data point serves a purpose. I don't just build dashboards; I build decision support systems.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Workflow Section */}
                <section>
                    <h2 className="text-2xl font-bold mb-12 text-white">Analytical Workflow</h2>

                    <div className="space-y-8">
                        {/* Step 1 */}
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[#1F2937] ml-[27px]" />
                            <div className="flex flex-col md:flex-row gap-8 relative">
                                <div className="hidden md:flex flex-col items-center shrink-0 z-10">
                                    <div className="w-14 h-14 rounded-full bg-[#1F2937] border border-[#374151] flex items-center justify-center text-[#F59E0B]">
                                        <Brain size={28} />
                                    </div>
                                </div>
                                <div className="bg-[#0C0F14] border border-[#1F2937] p-8 rounded-xl flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">1. Define the Problem</h3>
                                    <p className="text-[#9CA3AF] mb-4">Understanding the core business need and success metrics.</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Stakeholder Interview", "KPI Definition", "Requirement Gathering"].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-[#141922] rounded text-[#9CA3AF] text-sm border border-[#1F2937]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 2 */}
                        <div className="relative pl-8 md:pl-0">
                            <div className="hidden md:block absolute left-0 top-0 bottom-0 w-px bg-[#1F2937] ml-[27px]" />
                            <div className="flex flex-col md:flex-row gap-8 relative">
                                <div className="hidden md:flex flex-col items-center shrink-0 z-10">
                                    <div className="w-14 h-14 rounded-full bg-[#1F2937] border border-[#374151] flex items-center justify-center text-[#34D399]">
                                        <Code2 size={28} />
                                    </div>
                                </div>
                                <div className="bg-[#0C0F14] border border-[#1F2937] p-8 rounded-xl flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">2. Processing & Analysis</h3>
                                    <p className="text-[#9CA3AF] mb-4">Cleaning, modeling, and querying data for accuracy.</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["SQL", "Python", "Power Query", "Data Modeling", "Excel"].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-[#141922] rounded text-[#9CA3AF] text-sm border border-[#1F2937]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Step 3 */}
                        <div className="relative pl-8 md:pl-0">
                            <div className="flex flex-col md:flex-row gap-8 relative">
                                <div className="hidden md:flex flex-col items-center shrink-0 z-10">
                                    <div className="w-14 h-14 rounded-full bg-[#1F2937] border border-[#374151] flex items-center justify-center text-[#F59E0B]">
                                        <LineChart size={28} />
                                    </div>
                                </div>
                                <div className="bg-[#0C0F14] border border-[#1F2937] p-8 rounded-xl flex-grow">
                                    <h3 className="text-xl font-bold text-white mb-2">3. Visualizing Decisions</h3>
                                    <p className="text-[#9CA3AF] mb-4">Creating intuitive dashboards that drive action.</p>
                                    <div className="flex flex-wrap gap-2">
                                        {["Power BI", "DAX", "Data Storytelling", "Dashboard Design"].map(skill => (
                                            <span key={skill} className="px-3 py-1 bg-[#141922] rounded text-[#9CA3AF] text-sm border border-[#1F2937]">
                                                {skill}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                <div className="mt-20 text-center">
                    <a
                        href="/SAMUEL_M_Resume.pdf"
                        download="SAMUEL_M_Resume.pdf"
                        className="inline-flex items-center px-8 py-4 bg-[#F59E0B] hover:bg-[#FBBF24] text-white font-bold rounded-lg transition-all shadow-[0_0_20px_-5px_var(--color-primary)] hover:shadow-[0_0_25px_-5px_var(--color-primary)]"
                        target="_blank"
                    >
                        Download Full Resume <ArrowRight className="ml-2" size={20} />
                    </a>
                </div>
            </div>
        </div>
    );
}
