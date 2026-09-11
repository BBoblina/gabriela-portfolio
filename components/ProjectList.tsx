import Link from "next/link";
import { projects } from "../data/projects";

export default function ProjectList() {
    return (
        <nav>
            <ul>
                {projects.map((project) => (
                    <li key={project.slug}>
                        <Link href={`/project/${project.slug}`}>
                            <div className="grid grid-cols-3 border-b border-zinc-300 py-3 hover:bg-zinc-50 transition-colors">
                                <span>{project.title}</span>

                                <span className="text-center">
                                    {project.year}
                                </span>

                                <span className="text-right uppercase">
                                    {project.category}
                                </span>
                            </div>
                        </Link>
                    </li>
                ))}
            </ul>
        </nav>
    );
}