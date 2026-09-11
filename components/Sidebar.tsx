"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "../data/projects";

export default function Sidebar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <>
            {/* =========================
                VERSION MOBILE
            ========================== */}

            <header className="md:hidden w-full px-6 py-6 flex items-start justify-between">

                {/* Nom */}

                <Link href="/" className="inline-block">
                    <h1 className="text-[22px] uppercase tracking-[0.2em] leading-[130%]">
                        <span className="block">
                            GABRIELA
                        </span>

                        <span className="block">
                            ARRABAÇO
                        </span>
                    </h1>
                </Link>


                {/* Bouton Menu */}

                <button
                    type="button"
                    onClick={() => setMenuOpen(true)}
                    className="text-[12px]"
                >
                    Menu
                </button>

            </header>


            {/* =========================
                MENU MOBILE OUVERT
            ========================== */}

            {menuOpen && (
                <div className="md:hidden fixed inset-0 z-50 bg-[#f8f7f5] px-6 py-6 flex flex-col">

                    {/* Haut du menu */}

                    <div className="flex items-start justify-between">

                        {/* Nom */}

                        <Link
                            href="/"
                            onClick={() => setMenuOpen(false)}
                            className="inline-block"
                        >
                            <h1 className="text-[22px] uppercase tracking-[0.2em] leading-[130%]">
                                <span className="block">
                                    GABRIELA
                                </span>

                                <span className="block">
                                    ARRABAÇO
                                </span>
                            </h1>
                        </Link>


                        {/* Fermer */}

                        <button
                            type="button"
                            onClick={() => setMenuOpen(false)}
                            className="text-[12px]"
                        >
                            Fermer
                        </button>

                    </div>


                    {/* Liste des projets */}

                    <nav className="mt-12">

                        <ul className="space-y-4">

                            {projects.map((project) => (

                                <li key={project.slug}>

                                    <Link
                                        href={`/project/${project.slug}`}
                                        onClick={() => setMenuOpen(false)}
                                        className="grid grid-cols-[minmax(0,1fr)_50px] gap-x-4 text-[14px]"
                                    >

                                        {/* Projet */}

                                        <span>
                                            {project.title}
                                        </span>


                                        {/* Année */}

                                        <span className="text-neutral-500 text-right">
                                            {project.year}
                                        </span>

                                    </Link>

                                </li>

                            ))}

                        </ul>

                    </nav>


                    {/* Bas du menu */}

                    <div className="mt-auto">

                        {/* Contact */}

                        <Link
                            href="/contact"
                            onClick={() => setMenuOpen(false)}
                            className="block text-[14px]"
                        >
                            Contact
                        </Link>


                        {/* Langues */}

                        <div className="mt-6 flex gap-4 text-[12px]">
                            <button type="button">
                                FR
                            </button>

                            <button type="button">
                                DE
                            </button>

                            <button type="button">
                                EN
                            </button>
                        </div>


                        {/* Profession */}

                        <p className="mt-6 text-[11px] uppercase">
                            Interactive Media Designer
                        </p>

                    </div>

                </div>
            )}


            {/* =========================
                VERSION DESKTOP
            ========================== */}

            <aside className="hidden md:flex w-[45vw] min-w-[300px] max-w-[620px] px-12 py-12 flex-col min-h-screen">

                {/* En-tête */}

                <div className="grid grid-cols-[minmax(0,1fr)_clamp(38px,4vw,55px)_clamp(90px,10vw,140px)] gap-x-[clamp(8px,1.5vw,24px)] items-start">

                    {/* Nom */}

                    <Link href="/" className="inline-block w-fit">
                        <h1 className="text-[clamp(22px,3vw,33px)] uppercase tracking-[0.2em] leading-[130%]">

                            <span className="block whitespace-nowrap">
                                GABRIELA
                            </span>

                            <span className="block whitespace-nowrap">
                                ARRABAÇO
                            </span>

                        </h1>
                    </Link>


                    {/* Colonne année vide */}

                    <div />


                    {/* Contact */}

                    <Link
                        href="/contact"
                        className="text-[clamp(11px,1.2vw,15px)] whitespace-nowrap hover:underline"
                    >
                        Contact
                    </Link>

                </div>


                {/* Liste des projets */}

                <nav className="mt-12">

                    <ul className="space-y-3">

                        {projects.map((project) => (

                            <li key={project.slug}>

                                <Link
                                    href={`/project/${project.slug}`}
                                    className="group block"
                                >

                                    <div className="grid grid-cols-[minmax(0,1fr)_clamp(38px,4vw,55px)_clamp(90px,10vw,140px)] gap-x-[clamp(8px,1.5vw,24px)] items-center text-[clamp(9px,0.9vw,12px)]">

                                        {/* Projet */}

                                        <span className="min-w-0 truncate group-hover:translate-x-2 transition-transform">
                                            {project.title}
                                        </span>


                                        {/* Année */}

                                        <span className="text-neutral-500 text-center whitespace-nowrap">
                                            {project.year}
                                        </span>


                                        {/* Catégorie */}

                                        <span className="text-neutral-500 whitespace-nowrap">
                                            {project.category}
                                        </span>

                                    </div>

                                </Link>

                            </li>

                        ))}

                    </ul>

                </nav>


                {/* Bas de la sidebar */}

                <div className="mt-auto pt-16">

                    {/* Langues */}

                    <div className="flex gap-4 text-[11px]">
                        <button type="button">
                            FR
                        </button>

                        <button type="button">
                            DE
                        </button>

                        <button type="button">
                            EN
                        </button>
                    </div>


                    {/* Profession */}

                    <p className="mt-4 text-[clamp(9px,0.9vw,12px)] uppercase whitespace-nowrap">
                        INTERACTIVE MEDIA DESIGNER
                    </p>

                </div>

            </aside>
        </>
    );
}