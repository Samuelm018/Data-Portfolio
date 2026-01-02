import { projects } from "@/lib/projects";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Github, Download, ArrowLeft, ExternalLink } from "lucide-react";

interface ProjectDetailProps {
    params: Promise<{
        slug: string;
    }>;
}

export async function generateStaticParams() {
    return projects.map((project) => ({
        slug: project.slug,
    }));
}

export default async function ProjectDetail({ params }: ProjectDetailProps) {
    const { slug } = await params;
    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    return (
        <div className="min-h-screen pb-20">
            {/* Header */}
            <div className="bg-card border-b border-gray-800 py-12">
                <div className="container-custom">
                    <Link
                        href="/projects"
                        className="inline-flex items-center text-gray-400 hover:text-white mb-8 transition-colors"
                    >
                        <ArrowLeft className="mr-2" size={20} /> Back to Projects
                    </Link>

                    <h1 className="text-4xl md:text-5xl font-bold mb-6">{project.title}</h1>
                    <p className="text-xl text-gray-400 max-w-3xl mb-8 leading-relaxed">
                        {project.description}
                    </p>

                    <div className="flex flex-wrap gap-4">
                        <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center px-6 py-3 bg-gray-800 hover:bg-gray-700 text-white font-semibold rounded-lg transition-colors border border-gray-700"
                        >
                            <Github className="mr-2" size={20} /> View Source
                        </a>
                        {project.downloadUrl && (
                            <a
                                href={project.downloadUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center px-6 py-3 bg-primary hover:bg-blue-600 text-white font-semibold rounded-lg transition-colors"
                            >
                                <Download className="mr-2" size={20} /> Download Resource
                            </a>
                        )}
                    </div>
                </div>
            </div>

            <div className="container-custom py-12">
                {/* Main Dashboard Image */}
                <div className="relative w-full aspect-video bg-gray-800 rounded-xl overflow-hidden border border-gray-800 shadow-2xl mb-16 group">
                    <Image
                        src={project.imageUrl}
                        alt={`${project.title} Dashboard`}
                        fill
                        className="object-cover object-top"
                        quality={100}
                    />
                    <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                        <span className="text-white font-medium flex items-center bg-black/80 px-4 py-2 rounded-full backdrop-blur-sm">
                            <ExternalLink className="mr-2" size={16} /> Full View
                        </span>
                    </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Business Problem</h2>
                            <div className="prose prose-invert max-w-none text-gray-300">
                                <p>{project.businessProblem}</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Analytical Approach</h2>
                            <div className="prose prose-invert max-w-none text-gray-300">
                                <p>{project.approach}</p>
                            </div>
                        </section>

                        <section>
                            <h2 className="text-2xl font-bold mb-4 text-white">Key Insights</h2>
                            <ul className="space-y-3">
                                {project.keyInsights.map((insight, index) => (
                                    <li key={index} className="flex items-start">
                                        <span className="inline-block w-2 h-2 rounded-full bg-primary mt-2 mr-3" />
                                        <span className="text-gray-300">{insight}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                    </div>

                    {/* Sidebar */}
                    <div className="space-y-8">
                        <div className="bg-card border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-lg font-bold mb-4 text-white">Tech Stack</h3>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        key={tech}
                                        className="px-3 py-1 text-sm font-medium rounded-md bg-gray-800 text-blue-200 border border-gray-700"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </div>

                        <div className="bg-card border border-gray-800 p-6 rounded-xl">
                            <h3 className="text-lg font-bold mb-4 text-white">Dataset Details</h3>
                            <p className="text-gray-400 text-sm">
                                {project.dataset}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
