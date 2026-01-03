import Link from "next/link";
import { decisions } from "@/lib/decisions";
import { Github } from "lucide-react";
import Image from "next/image";

export default function DecisionsPage() {
    return (
        <div className="py-20">
            <div className="container-custom">
                <div className="max-w-3xl mb-16">
                    <h1 className="text-4xl md:text-5xl font-bold mb-6">Decisions Enabled</h1>
                    <p className="text-xl text-gray-400">
                        A catalog of business questions I&apos;ve answered and the actions they empowered.
                    </p>
                </div>

                <div className="grid gap-12">
                    {decisions.map((decision) => (
                        <div
                            key={decision.slug}
                            className="group relative bg-[#141922] border border-[#1F2937] rounded-xl overflow-hidden hover:border-[#F59E0B]/50 transition-all duration-300"
                        >
                            <div className="grid md:grid-cols-12 gap-0">
                                {/* Image Section - Dominant */}
                                <div className="md:col-span-8 relative aspect-video md:aspect-auto h-64 md:h-96 w-full overflow-hidden border-b md:border-b-0 md:border-r border-[#1F2937]">
                                    <div className="absolute inset-0 bg-[#0C0F14]/20 group-hover:bg-transparent transition-colors z-10" />
                                    <Image
                                        src={decision.dashboardImage}
                                        alt={decision.title}
                                        fill
                                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                                        sizes="(max-width: 768px) 100vw, 66vw"
                                    />
                                </div>

                                {/* Content Section */}
                                <div className="md:col-span-4 p-8 flex flex-col h-full bg-[#141922]/95 backdrop-blur-sm">
                                    <h2 className="text-2xl font-bold mb-2 text-white group-hover:text-[#F59E0B] transition-colors">{decision.title}</h2>

                                    <div className="flex-grow space-y-6 pt-6">
                                        <div>
                                            <div className="text-xs uppercase tracking-wider text-[#6B7280] font-semibold mb-2">Business Question</div>
                                            <p className="text-[#E6E7EB] font-medium leading-relaxed">{decision.businessQuestion}</p>
                                        </div>

                                        <div className="pt-4 border-t border-[#1F2937]">
                                            <div className="text-xs uppercase tracking-wider text-[#34D399] font-semibold mb-2">Decision Enabled</div>
                                            <p className="text-[#9CA3AF] text-sm leading-relaxed">{decision.decisionEnabled}</p>
                                        </div>
                                    </div>

                                    <div className="flex flex-wrap gap-2 my-8">
                                        {decision.tools.map(tool => (
                                            <span key={tool} className="text-xs px-2 py-1 rounded bg-[#0C0F14] border border-[#1F2937] text-[#9CA3AF]">
                                                {tool}
                                            </span>
                                        ))}
                                    </div>

                                    <div className="flex items-center gap-4 mt-auto">
                                        <Link
                                            href={`/decisions/${decision.slug}`}
                                            className="flex-1 inline-flex items-center justify-center px-4 py-3 bg-[#F59E0B] hover:bg-[#FBBF24] text-white font-semibold rounded-lg transition-colors"
                                        >
                                            View Case
                                        </Link>
                                        <a
                                            href={decision.githubUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-3 bg-[#0C0F14] hover:bg-[#1F2937] text-white rounded-lg border border-[#1F2937] transition-colors"
                                            aria-label="View on GitHub"
                                        >
                                            <Github size={20} />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
