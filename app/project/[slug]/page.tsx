import Image from "next/image";
import { notFound } from "next/navigation";
import { projects } from "../../../data/projects";

import StackLayout from "../../../components/layouts/StackLayout";
import GridLayout from "../../../components/layouts/GridLayout";
import FestivalLayout from "../../../components/layouts/FestivalLayout";
import AemVsLayout from "../../../components/layouts/AemVsLayout";
import OpenDataLayout from "../../../components/layouts/OpenDataLayout";
import Presentation3DLayout from "../../../components/layouts/Presentation3DLayout";
import OrdiUtileLayout from "../../../components/layouts/OrdiUtileLayout";
import OrqidLayout from "../../../components/layouts/OrqidLayout";

type Props = {
    params: Promise<{
        slug: string;
    }>;
};

export default async function ProjectPage({ params }: Props) {
    const { slug } = await params;

    const project = projects.find((p) => p.slug === slug);

    if (!project) {
        notFound();
    }

    console.log("Layout du projet :", project.layout);

    return (
        <main className="min-h-screen px-10 py-10">

            {/* Images */}

            {project.layout === "festival" ? (

                <FestivalLayout
                    images={project.images}
                    title={project.title}
                />

            ) : project.layout === "stack" ? (

                <StackLayout
                    images={project.images}
                    title={project.title}
                />

            ) : project.layout === "grid" ? (

                <GridLayout
                    images={project.images}
                    title={project.title}
                />

            ) : project.layout === "aemvs" ? (

                <AemVsLayout
                    images={project.images}
                    title={project.title}
                />

            ) : project.layout === "opendata" ? (

                <OpenDataLayout
                    images={project.images}
                    title={project.title}
                />

            ) : project.layout === "presentation3d" ? (

                <Presentation3DLayout
                    images={project.images}
                    title={project.title}
                />

            ) : project.layout === "orditutile" ? (

                <OrdiUtileLayout
                    images={project.images}
                    title={project.title}
                />

            ) : project.layout === "orqid" ? (

                <OrqidLayout
                    images={project.images}
                    title={project.title}
                />

            ) : (

                /* Layout de secours */

                <div className="mt-12 grid grid-cols-2 gap-6 items-start">

                    {project.images.map((image) => (

                        <div key={image}>

                            {/* Image */}

                            <Image
                                src={image}
                                alt={project.title}
                                width={1600}
                                height={1000}
                                className="w-full h-auto"
                                sizes="50vw"
                            />

                        </div>

                    ))}

                </div>

            )}


            {/* Description */}

            {project.description && (
                <p
                    className={`max-w-xl text-[12px] ${project.layout === "aemvs" ? "mt-12" : "mt-24"
                        }`}
                >
                    {project.description}
                </p>
            )}


            {/* Lien vers une maquette */}

            {project.prototypeUrl && (
                <div className="mt-6 flex justify-end">
                    <a
                        href={project.prototypeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black px-6 py-3 text-[12px] uppercase text-white"
                    >
                        Tester la maquette
                    </a>
                </div>
            )}


            {/* Lien externe */}

            {project.externalUrl && (
                <div className="mt-6 flex justify-end">
                    <a
                        href={project.externalUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black px-6 py-3 text-[12px] uppercase text-white"
                    >
                        Voir le site
                    </a>
                </div>
            )}


            {/* Lien vidéo */}

            {project.videoUrl && (
                <div className="mt-6 flex justify-end">
                    <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-black px-6 py-3 text-[12px] uppercase text-white"
                    >
                        Voir la vidéo
                    </a>
                </div>
            )}

        </main>
    );
}