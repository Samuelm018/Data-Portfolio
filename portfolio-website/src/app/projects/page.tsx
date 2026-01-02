import ProjectCard from "@/components/ProjectCard";
import { projects } from "@/lib/projects";

export default function ProjectsPage() {
    return (
        <div className="py-20">
            <div className="container-custom">
                <div className="max-w-2xl mb-16">
                    <h1 className="text-4xl font-bold mb-6">Data Analytics Projects</h1>
                    <p className="text-xl text-gray-400">
                        A collection of business intelligence dashboards, SQL analyses, and data visualization projects solving real-world business problems.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project) => (
                        <ProjectCard key={project.slug} project={project} />
                    ))}
                </div>
            </div>
        </div>
    );
}
