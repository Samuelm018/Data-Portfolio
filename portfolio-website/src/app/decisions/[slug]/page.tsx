
import { decisions } from "@/lib/decisions";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Github, Download, CheckCircle2 } from "lucide-react";

interface PageProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return decisions.map((decision) => ({
        slug: decision.slug,
    }));
}

export default async function DecisionPage({ params }: PageProps) {
    const { slug } = await params;
    const decision = decisions.find((d) => d.slug === slug);

    if (!decision) {
        notFound();
    }

    return (
        <article className="min-h-screen bg-[#0C0F14] pb-20">
            {/* Header Section */}
            <div className="bg-[#141922] border-b border-[#1F2937]">
                <div className="container-custom py-12">
                    <Link
                        href="/decisions"
                        className="inline-flex items-center text-[#9CA3AF] hover:text-[#F59E0B] transition-colors mb-8 group"
                    >
                        <ArrowLeft className="mr-2 group-hover:-translate-x-1 transition-transform" size={20} />
                        Back to Decisions
                    </Link>

                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
                        {decision.title}
                    </h1>

                    <div className="flex flex-wrap gap-2 mb-8">
                        {decision.tools.map((tool) => (
                            <span
                                key={tool}
                                className="px-3 py-1 text-sm font-medium rounded-md bg-[#0C0F14] text-[#9CA3AF] border border-[#1F2937]"
                            >
                                {tool}
                            </span>
                        ))}
                    </div>

                    <div className="flex gap-4">
                        <a
                            href={decision.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-[#1F2937] hover:bg-[#374151] text-white font-semibold rounded-lg transition-colors"
                        >
                            <Github className="mr-2" size={20} /> Repository
                        </a>
                        {decision.powerBiFile && (
                            <a
                                href={decision.powerBiFile}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-[#1F2937] hover:bg-[#374151] text-white font-semibold rounded-lg transition-colors"
                            >
                                <Download className="mr-2" size={20} /> Download .pbix
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="container-custom mt-12 space-y-16">

                {/* 1. The Business Question */}
                <section>
                    <div className="border-l-4 border-[#F59E0B] pl-6 py-2">
                        <h2 className="text-lg uppercase tracking-wider text-[#6B7280] font-bold mb-2">The Business Question</h2>
                        <p className="text-2xl md:text-3xl font-medium text-white loading-relaxed">
                            {decision.businessQuestion}
                        </p>
                    </div>
                </section>

                {/* 2. The Analysis */}
                <section>
                    <h2 className="text-2xl font-bold text-white mb-6">The Analysis</h2>
                    <div className="bg-[#141922] border border-[#1F2937] rounded-xl p-8 mb-8">
                        <p className="text-[#E6E7EB] text-lg leading-relaxed mb-8">
                            {decision.analysisSummary}
                        </p>
                    </div>

                    {/* Full Width Dashboard Image */}
                    <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-[#1F2937] shadow-2xl shadow-black/50">
                        <Image
                            src={decision.dashboardImage}
                            alt={`${decision.title} Dashboard`}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </section>

                {/* 3. The Decision Enabled */}
                <section>
                    <div className="bg-[#0C0F14] border border-[#34D399]/20 rounded-xl p-8 relative overflow-hidden">
                        <div className="absolute top-0 left-0 w-1 h-full bg-[#34D399]" />
                        <div className="flex items-start gap-4">
                            <CheckCircle2 className="text-[#34D399] mt-1 shrink-0" size={32} />
                            <div>
                                <h2 className="text-xl font-bold text-[#34D399] mb-4">Decision Enabled</h2>
                                <p className="text-[#E6E7EB] text-xl leading-relaxed">
                                    {decision.decisionEnabled}
                                </p>
                            </div>
                        </div>
                    </div>
                </section>

            </div>
        </article>
    );
}
