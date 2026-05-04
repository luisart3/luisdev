import { useState, useEffect } from "react";
import {
    ArrowUpRight, StartUI,
    Layers, Magicpen, Layers_2,
    Components_token, Typography,
    Cursor, Info, HanTwoTap,
    HandTwoScrollUp, HandTwoScrollDown,
    MouseIcon, TapScrollUp, TapScrollDown, FingerTap,
    Plus, Close
} from "../icons/UIIcons";
import { motion, AnimatePresence } from "motion/react";

import { BentoGrids } from "../ui/bentogrid/BentoGrid";
import { CardRoot as Card } from "../ui/card/Card";
import { StackGrid } from "../ui/stack/Stack";

import { SkillsCard } from "./SkillsCard";

import { Tooltip, TooltipCard } from "../ui/tooltip/Tooltip";
import devarteaga from '../../assets/dev_arteaga.svg'
import AvatarImg from '../../assets/luis_avatar.avif'

export const BentoMain = () => {
    const [selectedId, setSelectedId] = useState<string | null>(null);
    useEffect(() => {
        if (selectedId) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }

        // limpiar el efecto al desmontar el componente
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [selectedId]);

    return (
        <section className="w-full">
            <div className="grid gap-6">
                <BentoGrids cols={5}>
                    <Card
                        span={2}
                        layoutId="about"
                        onClick={() => setSelectedId('about')}>
                        <Card.Header>
                            <Card.Title>About</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <div className=" select-none bg-gradient-to-tr from-zinc-800 to-zinc-900  rounded-3xl p-4">
                                <div className="flex flex-col space-y-1.5">
                                    <p className="text-sm text-gray-100">Luis Artega</p>
                                    <p className="text-sm text-gray-300">Soy desarrollador Frontend con enfoque en UI y mentalidad UX. Me apasiona...</p>
                                </div>
                            </div>
                        </Card.Content>
                        <Card.Footer>
                            <ArrowUpRight className="size-5 text-purple-500 transition-transform duration-300 
                                        group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Card.Footer>

                    </Card>
                    <Card
                        span={3}
                        layoutId="experience"
                        onClick={() => setSelectedId('experience')}>
                        <Card.Header>
                            <Card.Title>Experiencia</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <div className="relative w-full">
                                <div
                                    className="absolute inset-0  bg-zinc-900 border border-white/10 rounded-3xl -rotate-10 opacity-60 transition duration-300 group-hover:-rotate-6 p-4">

                                </div>
                                <div
                                    className="absolute inset-0  bg-zinc-900 border border-white/10 rounded-3xl -rotate-6 opacity-80 transition duration-300 group-hover:-rotate-3">

                                </div>
                                <div
                                    className="relative bg-zinc-900 border border-white/10 rounded-3xl -rotate-2 transition duration-300 group-hover:rotate-0 p-4">
                                    <div className="flex flex-col  md:flex-row items-start md:items-center justify-between gap-4 w-full p-2">
                                        <div className="flex flex-col gap-1">
                                            <h3 className="text-md font-semibold tracking-tight text-purple-600 leading-none select-none">H. Ayuntamiento de Ixcateopan</h3>
                                            <p className="text-sm text-zinc-400 select-none ">Soporte web y sistemas técnicos</p>
                                        </div>
                                        <div className=" self-start md:self-center">
                                            <p className="text-xs select-none text-gray-400">2026</p>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </Card.Content>
                        <Card.Footer>
                            <ArrowUpRight className="size-5 text-purple-500 transition-transform duration-300 
                              group-hover:translate-x-1 group-hover:-translate-y-1" />
                        </Card.Footer>
                    </Card>
                </BentoGrids>
                <BentoGrids cols={5}>
                    <Card
                        span={3}
                        layoutId="stack">
                        <Card.Header>
                            <Card.Title>Stack</Card.Title>
                        </Card.Header>
                        <Card.Content>
                            <StackGrid />
                        </Card.Content>
                    </Card>
                    <Card
                        span={2}
                        layoutId="focus">
                        <Card.Header>
                            <h3 className="text-center select-none font-semibold text-purple-500">Actualmente Profundizando</h3>
                        </Card.Header>
                        <Card.Content>
                            <motion.div

                                className="flex flex-col gap-4 items-center">
                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"

                                    }}
                                    className=" bg-zinc-900 p-2 border rotate-6 border-purple-600/20 rounded-full ">
                                    <span className="flex text-xs select-none gap-1.5">
                                        <Layers className=" size-5" /> Arquitectura Frontend
                                    </span>
                                </motion.div>
                                <motion.div animate={{
                                    y: [0, 10, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"

                                    }}
                                    className=" bg-zinc-900 p-2 border -rotate-3 border-purple-600/20 rounded-full ">
                                    <span className="flex select-none text-xs gap-1.5">
                                        <Magicpen className=" size-5" /> UX/UI Design
                                    </span>
                                </motion.div>
                                <motion.div
                                    animate={{
                                        y: [0, 10, 0],
                                        rotate: [0, 5, -5, 0]
                                    }}
                                    transition={{
                                        duration: 5,
                                        repeat: Infinity,
                                        ease: "easeInOut"

                                    }}
                                    className=" bg-zinc-900 p-2 border -rotate-8 border-purple-600/20 rounded-full ">
                                    <span className="flex  select-none text-xs gap-1.5">
                                        <StartUI className=" size-5" /> Microinteracciones
                                    </span>
                                </motion.div>
                            </motion.div>

                        </Card.Content>
                    </Card>
                </BentoGrids>
                <BentoGrids cols={5}>
                    <Card span={2}
                        layoutId="mascota">
                        <Card.Content >
                            <div className="grid grid-rows-2 gap-1.5 items-center">

                                <span className=" p-2 border-purple-700 border rounded-2xl">
                                    <p className="text-xs text-center select-none font-medium text-purple-300">
                                        luisdev</p>
                                </span>
                                <div className=" relative inline-block">
                                    <img src={devarteaga} className="size-24 select-none" />
                                    <motion.div

                                        animate={{
                                            y: [0, 10, 0],
                                            rotate: [0, 5, -5, 0]
                                        }}
                                        transition={{
                                            duration: 5,
                                            repeat: Infinity,
                                            ease: "easeInOut"

                                        }}

                                        className=" absolute -top-4 -left-12 z-10  ">
                                        <div className="relative group">
                                            <div className="px-4 py-1.5 rounded-2xl rounded-br-none bg-gradient-to-tr from-zinc-800 to-zinc-900 shadow-lg shadow-purple-500/10">
                                                <span className="text-xs select-none text-white font-bold drop-shadow-sm">
                                                    ¡Hola!
                                                </span>
                                            </div>
                                        </div>

                                    </motion.div>
                                </div>
                            </div>
                        </Card.Content>
                    </Card>
                    <Card span={3}
                        layoutId="atomic">
                        <Card.Header>
                            <h3 className="text-center font-semibold select-none text-purple-500">UI System Thinking</h3>
                        </Card.Header>
                        <Card.Content>
                            <motion.div
                                animate={{
                                    y: [0, -10, 0],
                                    rotate: [0, 5, -5, 0]
                                }}
                                transition={{
                                    duration: 5,
                                    repeat: Infinity,
                                    ease: "easeInOut"
                                }}
                                className="grid md:grid-cols-2 justify-center gap-4 ">
                                <div className="bg-zinc-950 px-3 py-1.5 border -rotate-6 border-zinc-700 rounded-full hover:-rotate-2 transition-transform shadow-md">
                                    <span className="flex select-none items-center text-xs gap-2 text-zinc-400">
                                        <Layers_2 className="size-7 opacity-70" />
                                        Design Tokens
                                    </span>
                                </div>
                                <div className="bg-zinc-950 px-3 py-1.5 border rotate-2 border-zinc-700 rounded-full hover:rotate-0 transition-transform">
                                    <span className="flex select-none items-center text-xs gap-2 text-zinc-400">
                                        <Typography className="size-7 opacity-70" />
                                        Typography System
                                    </span>
                                </div>
                                <div className="bg-zinc-950 px-3 py-1.5 border rotate-6 border-zinc-700 rounded-full hover:rotate-0 transition-transform">
                                    <span className="flex select-none items-center text-xs gap-2 text-zinc-400">
                                        <Cursor className="size-7 opacity-70" />
                                        User Experience
                                    </span>
                                </div>
                                <div className="bg-zinc-950 px-3 py-1.5 border -rotate-2 border-zinc-700 rounded-full">
                                    <span className="flex select-none items-center text-xs gap-2 text-zinc-400">
                                        <Components_token className="size-7 opacity-70" />
                                        Atomic Components
                                    </span>
                                </div>
                            </motion.div>
                        </Card.Content>
                    </Card>

                </BentoGrids>


            </div>
            <AnimatePresence>
                {selectedId && (
                    <div className="fixed  inset-0 flex items-center justify-center z-50 p-4">
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setSelectedId(null)}
                            className=" absolute inset-0 bg-black/60 backdrop-blur-sm p-4">
                            <motion.div
                                layoutId={selectedId ?? undefined}
                                className="absolute inset-0 m-auto z-10 w-full md:w-[90%] max-w-2xl md:h-fit h-full md:max-h-[85vh] 
                                bg-zinc-950 border border-white/10 md:rounded-4xl 
                                  shadow-2xl flex flex-col  p-5 md:p-8"
                                onClick={(e) => e.stopPropagation()}>
                                    <motion.button
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.9 }}
                                        onClick={() => setSelectedId(null)}
                                        className="md:hidden absolute top-4 right-4 w-fit h-fit p-1 cursor-pointer rounded-full bg-zinc-800 border border-white/10 text-gray-400 hover:text-gray-200 hover:border-white/20 transition-colors">
                                        <Close className="size-6" />
                                    </motion.button>
                                    <div className="overflow-y-auto mt-10 md:mt-0">

                                        {selectedId === 'about' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                            
                                            <h2 className="text-lg font-medium mb-4">About</h2>
                                            <div className="flex flex-col md:flex-row space-x-5">
                                                <div className="flex flex-col space-y-2 justify-center items-center">

                                                    <div className=" relative w-fit ">

                                                        <motion.div
                                                            whileHover={{ scale: 1.05, rotate: 0 }}
                                                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                                            className=" w-30 h-30 overflow-hidden rounded-4xl border-2 border-white/20  rotate-6 ">
                                                            <img src={AvatarImg} className="h-full w-full object-cover select-none" alt="Avatar" />
                                                        </motion.div>
                                                        <motion.div
                                                            initial={{ scale: 0 }}
                                                            animate={{ scale: 1 }}
                                                            whileHover={{ scale: 1.2 }}
                                                            whileTap={{ scale: 0.9 }}
                                                            className="absolute inset bottom-0 right-0 z-20 "
                                                        >
                                                            <Tooltip text="Sígueme en GitHub">
                                                            <a
                                                                href="https://github.com/luisart3"
                                                                target="_blank"
                                                                rel="noopener noreferrer"
                                                                className="flex items-center justify-center w-8 h-8 rounded-full bg-purple-800 border border-purple-950 text-white shadow-lg hover:bg-purple-500 transition-colors"
                                                            >
                                                                <Plus className=" size-5" />
                                                                <span className="absolute inset-0 rounded-full bg-purple-600 animate-ping opacity-25 -z-10" />
                                                            </a>
                                                            </Tooltip>
                                                        </motion.div>
                                                    </div>
                                                    <p className="text-lg  text-center font-semibold text-gray-100">Luis Artega</p>
                                                </div>
                                                <div className="flex flex-col space-y-3">
                                                    <p className="text-base text-gray-400 leading-relaxed">
                                                        Soy <span className="text-purple-500 font-medium">desarrollador Frontend</span>  con enfoque en <span className=" text-purple-500 font-medium">UI y mentalidad UX. </span>
                                                        Me apasiona transformar ideas en interfaces claras, funcionales y visualmente cuidadas.
                                                    </p>

                                                    <p className="text-base text-gray-400 leading-relaxed">
                                                        Trabajo desde la <span className="text-purple-600 font-medium">conceptualización en Figma</span>  hasta la <span className="text-purple-500 font-medium">implementación en código</span>,
                                                        aplicando <span className="text-purple-500 font-medium">arquitectura basada en componentes</span> y principios de usabilidad
                                                        para crear experiencias intuitivas y escalables.
                                                    </p>

                                                    <p className="text-base text-gray-400 leading-relaxed">
                                                        Disfruto <span className="text-purple-500 font-medium inline-flex items-center gap-1"> <Magicpen className=" size-3.5" /> optimizar detalles</span>, <span className="text-purple-500 font-medium inline-flex items-center gap-1 "> <StartUI className=" size-3.5 relative top-[1px]" /> microinteracciones</span>  y flujos para que cada producto
                                                        se sienta natural, <span className="text-purple-500 font-medium">moderno y bien construido.</span>
                                                    </p>
                                                </div>
                                            </div>
                                        </motion.div>
                                    )}

                                </div>
                                <div className=" overscroll-contain">

                                    {selectedId === 'experience' && (
                                        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 0.2 }}>
                                            <h2 className="text-lg font-medium mb-4">Experiencia</h2>
                                            <div className="flex  justify-end items-center">
                                                <TooltipCard
                                                    className=""
                                                    content={
                                                        <div className="flex flex-col gap-1.5 p-2">

                                                            <h3 className="hidden md:flex gap-2 items-center text-md font-medium"> <HanTwoTap className="size-6" /> Desplazamiento con dos dedos </h3>
                                                            <p className=" hidden md:inline text-sm text-gray-300">Coloca el cursor sobre la tarjeta y desliza con dos dedos para desplazarte. </p>
                                                            <h3 className=" md:hidden flex gap-2 items-center text-md font-medium"> <FingerTap className="size-6" /> Desplazamiento con un dedo </h3>
                                                            <p className="md:hidden text-sm text-gray-300">Coloca tu dedo sobre la tarjeta y desliza con un dedo para desplazarte. </p>
                                                            <div className="grid grid-rows-2 gap-2 p-2 items-center">
                                                                <div className="flex flex-col gap-4">
                                                                    {/*Scroll Up */}
                                                                    <div className=" hidden md:flex gap-1.5 items-center">
                                                                        <HandTwoScrollUp className="size-6" />
                                                                        <p className="text-sm text-gray-300">Desliza hacia arriba</p>
                                                                    </div>
                                                                    {/*Scroll Down */}
                                                                    <div className=" hidden md:flex gap-1.5 items-center">
                                                                        <HandTwoScrollDown className="size-6" />
                                                                        <p className=" text-sm text-gray-300">Desliza haci abajo</p>
                                                                    </div>
                                                                    <div className=" hidden  md:flex gap-1.5 items-center">
                                                                        <MouseIcon className=" size-6" />
                                                                        <p className=" text-sm text-gray-300">Usa la rueda</p>
                                                                    </div>
                                                                    <div className="md:hidden flex gap-1.5 items-center">
                                                                        <TapScrollUp className="size-6!" />
                                                                        <p className="text-sm text-gray-300">Desliza hacia arriba</p>
                                                                    </div>
                                                                    {/*Scroll Down */}
                                                                    <div className="md:hidden flex gap-1.5 items-center">
                                                                        <TapScrollDown className="size-6" />
                                                                        <p className=" text-sm text-gray-300">Desliza haci abajo</p>
                                                                    </div>

                                                                </div>
                                                                <motion.div
                                                                    whileHover={{ scale: 1.03 }}
                                                                    transition={{ type: "spring", stiffness: 200 }}
                                                                    className=" flex justify-center gap-1.5 items-center bg-zinc-900 border-2  rounded-2xl w-60 p-10 mx-auto">
                                                                    <motion.div
                                                                        animate={{
                                                                            scale: [1, 1.2, 1],
                                                                            opacity: [0.8, 1, 0.8]
                                                                        }}
                                                                        transition={{
                                                                            duration: 1.2,
                                                                            repeat: Infinity
                                                                        }} className=" bg-gradient-to-tr from-purple-400 to-purple-600 h-3 w-3 rounded-full shadow-2xs"></motion.div>
                                                                    <motion.div
                                                                        animate={{
                                                                            scale: [1, 1.2, 1],
                                                                            opacity: [0.8, 1, 0.8]
                                                                        }}
                                                                        transition={{
                                                                            duration: 1.2,
                                                                            repeat: Infinity
                                                                        }}
                                                                        className=" hidden md:inline bg-gradient-to-tr -mt-4 from-purple-400 to-purple-600 h-3 w-3 rounded-full shadow-2xs"></motion.div>
                                                                </motion.div>
                                                            </div>
                                                        </div>

                                                    }>

                                                    <Info className="size-6 stroke-purple-500" />
                                                </TooltipCard>
                                            </div>
                                            <SkillsCard />
                                        </motion.div>
                                    )}
                                </div>



                            </motion.div>
                        </motion.div>
                    </div>
                )

                }
            </AnimatePresence>

        </section>

    )
}