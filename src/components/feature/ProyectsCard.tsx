
import { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";


import { projectItem, caseStudies, personalItems } from "../../data/ProyectItems";
import type { ProyectItem } from "../../data/ProyectItems";
import type { CaseStudy } from "../../data/ProyectItems";
import type { PersonalItem } from "../../data/ProyectItems";


import { Github } from "@boxicons/react";

import { ArrowUpRight, Timer, Close } from "../icons/UIIcons";

import { ProjectsCarrusel } from "../ui/carrusel/ProjectsCarrusel";
import AnimatedTabs from "../ui/tabs/AnimatedTabs";
const tabs = [
    { id: "Web", label: "Desarrollo Web" },
    { id: "CaseStudy", label: "Infraestructura y Sistemas" },
    { id: "personal", label: "Personal" },
];

export const ProyectsCard = () => {

    const [activeTab, setActiveTab] = useState("Web");

    const [selectedProject, setSelectedProject] = useState<ProyectItem | CaseStudy | PersonalItem | null>(null)

    const openProject = (project: ProyectItem | CaseStudy | PersonalItem) => {
        setSelectedProject(project)
    }

    const [isLoading, setIsLoading] = useState(true);

    const closeProject = () => {
        setSelectedProject(null)
    }
    useEffect(() => {

        setTimeout(() => {
            setIsLoading(false);
        }, 2000);
    }, [])
    useEffect(() => {
        if (selectedProject) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        return () => {
            document.body.style.overflow = "unset";
        }
    }, [selectedProject])

    return (
        <motion.section
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="w-full">
            <h2 className="text-md text-gray-100">Proyectos</h2>
            <div className="mt-8">
                <div className="flex flex-col items-center gap-8">
                    <AnimatedTabs
                        activeTab={activeTab}
                        layoutId="pill-demo"
                        onChange={setActiveTab}
                        tabs={tabs}
                        variant="pill"
                    >

                        <AnimatePresence mode="wait">

                            {isLoading ? (
                                <motion.div
                                    key="skeleton-web"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full flex justify-center px-4"
                                >
                                    <div className="w-full max-w-[600px] h-64 md:h-90 bg-zinc-900/50 border border-white/10 rounded-4xl animate-pulse" />
                                </motion.div>
                            ) : projectItem.length === 0 ? (
                                <div className="flex items-center justify-center py-12">
                                    <p className="text-gray-500">No hay proyectos disponibles</p>
                                </div>
                            ) : (
                                <ProjectsCarrusel
                                    key="content-web"
                                    items={projectItem}
                                    renderItem={(item) => (
                                        <motion.div
                                            layoutId={`project-${item.id}`}
                                            onClick={() => openProject(item)}
                                            key={item.id}

                                            className="relative group ">

                                            <div className="group">
                                                <img src={item.image} className="h-full w-full object-cover transition duration-500 group-hover:scale-105" alt={item.name} loading="lazy" />
                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                                            </div>
                                            <div className=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
                                                <h2 className="text-md md:text-lg select-none font-semibold text-white backdrop-blur-md px-4 py-2 rounded-xl bg-black/40">
                                                    {item.name}
                                                </h2>
                                            </div>
                                        </motion.div>
                                    )}>
                                </ProjectsCarrusel>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="skeleton-case"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full flex justify-center px-4"
                                >
                                    <div className="w-full max-w-[600px] h-64 md:h-90 bg-zinc-900/50 border border-white/10 rounded-4xl animate-pulse" />
                                </motion.div>
                            ) : caseStudies.length === 0 ? (
                                <div className="flex items-center justify-center py-12">
                                    <p className="text-gray-500">No hay proyectos disponibles</p>
                                </div>

                            ) : (
                                <ProjectsCarrusel
                                    key="content-case"
                                    items={caseStudies}
                                    renderItem={(item) => (
                                        <motion.div
                                            layoutId={`project-${item.id}`}
                                            onClick={() => openProject(item)}
                                            key={item.id}

                                            className="relative group ">

                                            <div className="group">

                                                <img src={item.image}
                                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                    alt={item.name}
                                                    loading="lazy"
                                                />

                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                                            </div>
                                            <div className=" absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
                                                <h2 className=" text-md md:text-lg select-none font-semibold text-white backdrop-blur-md px-4 py-2 rounded-xl bg-black/40">
                                                    {item.name}
                                                </h2>
                                            </div>
                                        </motion.div>
                                    )}>
                                </ProjectsCarrusel>
                            )}
                        </AnimatePresence>

                        <AnimatePresence mode="wait">
                            {isLoading ? (
                                <motion.div
                                    key="skeleton-case"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    className="w-full flex justify-center px-4"
                                >
                                    <div className="w-full max-w-[600px] h-64 md:h-90 bg-zinc-900/50 border border-white/10 rounded-4xl animate-pulse" />
                                </motion.div>
                            ) : personalItems.length === 0 ? (
                                <div className="flex items-center justify-center py-12">
                                    <p className="text-gray-500">No hay proyectos disponibles</p>
                                </div>

                            ) : (
                                <ProjectsCarrusel
                                    key="content-case"
                                    items={personalItems}
                                    renderItem={(item) => (
                                        <motion.div
                                            layoutId={`project-${item.id}`}
                                            onClick={() => openProject(item)}
                                            key={item.id}

                                            className="relative group ">

                                            <div className="group">

                                                <img src={item.image}
                                                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                                                    alt={item.name}
                                                    loading="lazy"
                                                />

                                                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition" />
                                            </div>
                                            <div className=" absolute  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition">
                                                <h2 className=" text-md md:text-lg select-none font-semibold text-white backdrop-blur-md px-4 py-2 rounded-xl bg-black/40">
                                                    {item.name}
                                                </h2>
                                            </div>
                                        </motion.div>
                                    )}>
                                </ProjectsCarrusel>
                            )}
                        </AnimatePresence>


                    </AnimatedTabs>
                    <AnimatePresence>
                        {selectedProject && (
                            <div className=" fixed  inset-0 flex items-center justify-center z-50 p-4">
                                <motion.div
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    onClick={closeProject}
                                    className=" absolute inset-0 bg-black/60 backdrop-blur-sm p-4 ">
                                    <motion.div
                                        layoutId={`project-${selectedProject.id}`}
                                        className="absolute inset-0 m-auto z-10 w-full md:w-[90%] max-w-2xl  md:h-fit md:max-h-[85vh] 
                                            bg-zinc-950 border border-white/10 md:rounded-4xl 
                                             shadow-2xl flex flex-col overflow-hidden p-4 md:p-8"
                                        onClick={(e) => e.stopPropagation()}>
                                        <motion.button
                                            whileHover={{ scale: 1.1 }}
                                            whileTap={{ scale: 0.9 }}
                                            onClick={closeProject}
                                            className="md:hidden absolute top-4 right-4 w-fit h-fit p-1 cursor-pointer rounded-full bg-zinc-800 border border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20 transition-colors">
                                            <Close className="size-6" />
                                        </motion.button>

                                        <div className="overflow-y-auto mt-10 md:mt-0">
                                            {selectedProject.type === "web" && (
                                                <div
                                                    className="flex flex-col">
                                                    <header className="mb-6">
                                                        <motion.h2
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.4, duration: 0.6 }}
                                                            className=" text-2xl md:text-3xl font-bold text-white tracking-tight">
                                                            {selectedProject.name}
                                                        </motion.h2>
                                                        <motion.div
                                                            initial={{ opacity: 0, x: -20 }}
                                                            animate={{ opacity: 1, x: 0 }}
                                                            transition={{ delay: 0.6, duration: 0.6 }}
                                                            className="flex flex-col md:flex-row md:items-center items-start gap-3 text-xs text-zinc-500 mt-2">
                                                            <span className="bg-zinc-900 px-2 py-1 rounded text-zinc-400">
                                                                {selectedProject.date}
                                                            </span>
                                                            <span className="hidden md:inline-block w-1 h-1 rounded-full md:bg-zinc-700" />
                                                            <p className="flex items-center gap-1.5">
                                                                design by
                                                                <a
                                                                    href={selectedProject.url_author}
                                                                    target="_blank"
                                                                    rel="noopener noreferrer nofollow"
                                                                    className="text-purple-400 hover:text-purple-300 transition-colors">
                                                                    <span className="underline underline-offset-4">{selectedProject.autor}</span>
                                                                </a>
                                                            </p>
                                                        </motion.div>
                                                    </header>

                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 0.8, duration: 0.6 }}
                                                        className="relative group overflow-hidden rounded-2xl border border-white/10 shadow-2xl">
                                                        <img
                                                            src={selectedProject.image}
                                                            className=" w-full h-80 object-cover object-top transition-transform duration-500 group-hover:scale-105"
                                                            alt={selectedProject.name}
                                                            loading="lazy"
                                                        />

                                                        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/20 to-transparent" />
                                                    </motion.div>


                                                    <motion.p
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1, duration: 0.6 }}
                                                        className="mt-8 text-zinc-400 leading-relaxed text-base">
                                                        {selectedProject.description}
                                                    </motion.p>


                                                    <motion.div
                                                        initial={{ opacity: 0, y: 20 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: 1.2, duration: 0.6 }}
                                                        className="flex flex-wrap gap-2 mt-8">
                                                        {selectedProject.technologies.map(tech => (
                                                            <span
                                                                key={tech.id}
                                                                className="px-3 py-1 text-[10px] uppercase tracking-wider font-bold rounded-full bg-purple-500/10 text-purple-400 border border-purple-500/20"
                                                            >
                                                                {tech.name}
                                                            </span>
                                                        ))}
                                                    </motion.div>


                                                    <div className="flex items-center gap-6 mt-10 pt-6 border-t border-white/5">
                                                        <a
                                                            href={selectedProject.url_repo}
                                                            rel="noopener noreferrer"
                                                            target="_blank"
                                                            className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                                                        >
                                                            <Github className="size-5 transition-transform group-hover:-translate-y-1" />
                                                            Ver código
                                                        </a>

                                                        <a
                                                            href={selectedProject.url_demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 rounded-xl  text-purple-500 text-sm font-bold   hover:scale-105 transition-all"
                                                        >
                                                            <ArrowUpRight className="size-4 stroke-[3px]" />
                                                            Ver demo
                                                        </a>
                                                    </div>
                                                </div>
                                            )}
                                            {selectedProject.type === "caseStudy" && (
                                                <div className="space-y-8">
                                                    <motion.header
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.4, duration: 0.6 }}
                                                        className="flex flex-col gap-3">
                                                        <div className="space-y-1">
                                                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                                                                {selectedProject.title}
                                                            </h2>
                                                            <div className="flex flex-col md:flex-row md:items-center items-start gap-3 text-sm text-zinc-400">
                                                                <span>{selectedProject.date}</span>
                                                                <span className=" hidden md:inline-block w-1 h-1 rounded-full bg-zinc-700" />
                                                                <div className="flex items-center gap-1.5">
                                                                    <Timer className="size-4 text-purple-500" />
                                                                    <span>{selectedProject.time} de lectura</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-lg text-zinc-400 leading-relaxed">
                                                            {selectedProject.description}
                                                        </p>
                                                    </motion.header>

                                                    <hr className="border-white/5" />


                                                    <main className="space-y-10">
                                                        {selectedProject.sections.map((section) => (
                                                            <section key={section.id} className="flex flex-col gap-3">
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.6, duration: 0.6 }}
                                                                    className=" flex flex-col gap-1.5">
                                                                    <h3 className="text-lg  font-medium text-purple-400">
                                                                        {section.heading}
                                                                    </h3>
                                                                    <div className=" border-b-4 w-5 rounded-3xl border-b-fuchsia-500"></div>
                                                                </motion.div>

                                                                <motion.p
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.8, duration: 0.6 }}
                                                                    className="whitespace-pre-line text-sm text-zinc-300 leading-relaxed">
                                                                    {section.content}
                                                                </motion.p>
                                                                <div className="grid grid-cols-1  gap-4 mt-4">
                                                                    {section.image?.map((Studyimg, index) => (
                                                                        <div key={index} className="flex flex-col space-y-2 group">

                                                                            <div className="flex items-center gap-2">
                                                                                <span className="h-px w-4 bg-purple-600/50" />
                                                                                <h3 className="text-[10px] uppercase tracking-widest font-bold text-zinc-500 group-hover:text-purple-400 transition-colors">
                                                                                    {Studyimg.title}
                                                                                </h3>
                                                                            </div>


                                                                            <div className="overflow-hidden rounded-xl border border-white/5 bg-zinc-900">
                                                                                <img
                                                                                    src={Studyimg.image}
                                                                                    className="w-full aspect-video object-cover transition-transform duration-500 group-hover:scale-105"
                                                                                    alt={Studyimg.title}
                                                                                    loading="lazy"
                                                                                />
                                                                            </div>
                                                                        </div>
                                                                    ))}
                                                                </div>

                                                            </section>
                                                        ))}
                                                    </main>
                                                </div>

                                            )}
                                            {selectedProject.type === "personal" && (
                                                <div className="space-y-8">
                                                    <motion.header
                                                        initial={{ opacity: 0, x: -20 }}
                                                        animate={{ opacity: 1, x: 0 }}
                                                        transition={{ delay: 0.4, duration: 0.6 }}
                                                        className="flex flex-col gap-3">
                                                        <div className="space-y-1">
                                                            <h2 className="text-2xl md:text-3xl font-bold tracking-tight text-white">
                                                                {selectedProject.title}
                                                            </h2>
                                                            <div className="flex flex-col md:flex-row md:items-center items-start gap-3 text-sm text-zinc-400">
                                                                <span>{selectedProject.date}</span>
                                                                <span className=" hidden md:inline-block w-1 h-1 rounded-full bg-zinc-700" />
                                                                <div className="flex items-center gap-1.5">
                                                                    <Timer className="size-4 text-purple-500" />
                                                                    <span>{selectedProject.time} de lectura</span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <p className="text-lg text-zinc-400 leading-relaxed">
                                                            {selectedProject.description}
                                                        </p>
                                                    </motion.header>

                                                    <hr className="border-white/5" />


                                                    <main className="space-y-10">
                                                        {selectedProject.sections.map((section) => (
                                                            <section key={section.id} className="flex flex-col gap-3">
                                                                <motion.div
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.6, duration: 0.6 }}
                                                                    className=" flex flex-col gap-1.5">
                                                                    <h3 className="text-lg  font-medium text-purple-400">
                                                                        {section.heading}
                                                                    </h3>
                                                                    <div className=" border-b-4 w-5 rounded-3xl border-b-fuchsia-500"></div>
                                                                </motion.div>

                                                                <motion.p
                                                                    initial={{ opacity: 0, y: 20 }}
                                                                    animate={{ opacity: 1, y: 0 }}
                                                                    transition={{ delay: 0.8, duration: 0.6 }}
                                                                    className="whitespace-pre-line text-sm text-zinc-300 leading-relaxed">
                                                                    {section.content}
                                                                </motion.p>



                                                            </section>
                                                        ))}
                                                    </main>
                                                    <div className="flex items-center gap-6 mt-10 pt-6 border-t border-white/5">
                                                        <a
                                                            href={selectedProject.url_repo}
                                                            rel="noopener noreferrer"
                                                            target="_blank"
                                                            className="group flex items-center gap-2 text-sm font-medium text-zinc-400 hover:text-white transition-colors"
                                                        >
                                                            <Github className="size-5 transition-transform group-hover:-translate-y-1" />
                                                            Ver código
                                                        </a>

                                                        <a
                                                            href={selectedProject.url_demo}
                                                            target="_blank"
                                                            rel="noopener noreferrer"
                                                            className="flex items-center gap-2 rounded-xl  text-purple-500 text-sm font-bold   hover:scale-105 transition-all"
                                                        >
                                                            <ArrowUpRight className="size-4 stroke-[3px]" />
                                                            Ver demo
                                                        </a>
                                                    </div>
                                                </div>

                                            )}
                                        </div>
                                    </motion.div>
                                </motion.div>
                            </div>
                        )}
                    </AnimatePresence>
                </div>


            </div>
        </motion.section>
    )
}