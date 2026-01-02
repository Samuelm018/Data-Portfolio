import Image from "next/image";
import Link from "next/link";
import { Project } from "@/lib/projects";

export default function ProjectCard({ project }: { project: Project }) {
    return (
        <div className="group bg-card rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
            <div className="relative h-48 w-full overflow-hidden">
                <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover object-top transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60" />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-2">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                    {project.techStack.slice(0, 3).map((tech) => (
                        <span
                            key={tech}
                            className="px-2 py-1 text-xs font-medium rounded-md bg-gray-800 text-gray-300"
                        >
                            {tech}
                        </span>
                    ))}
                </div>

                <div className="flex gap-3">
                    <Link
                        href={`/projects/${project.slug}`}
                        className="flex-1 px-4 py-2 bg-primary hover:bg-blue-600 text-white text-sm font-semibold rounded-lg transition-colors text-center"
                    >
                        View Project
                    </Link>
                    <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-4 py-2 bg-gray-800 hover:bg-gray-700 text-white text-sm font-semibold rounded-lg transition-colors text-center"
                    >
                        GitHub
                    </a>
                </div>
            </div>
        </div>
    );
}
