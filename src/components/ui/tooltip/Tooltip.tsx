import { motion, AnimatePresence } from "motion/react";
import React, { useState } from "react";
import { cn } from "../../../utils/utils";



interface TooltipProps {
    children: React.ReactNode,
    text: string
}

export const Tooltip = ({ children, text }: TooltipProps) => {

    const [isVisible, setIsVisible] = useState(false)
    return (
        <div
            className="relative flex items-center justify-center"
            onMouseEnter={() => setIsVisible(true)}
            onMouseLeave={() => setIsVisible(false)}>
            {children}
            <AnimatePresence>
                {isVisible && (
                    <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95, rotate: -4 }}
                        animate={{ opacity: 1, y: 0, scale: 1, rotate: 4 }}
                        exit={{ opacity: 0, y: 5, scale: 0.95 }}
                        transition={{ duration: 0.15, ease: "easeOut" }}
                        className=" absolute bottom-full mb-3 px-3 py-1.5 z-50 whitespace-nowrap">
                        <div className="bg-zinc-900 border select-none border-zinc-800 text-zinc-200 text-xs font-medium px-3 py-1.5 rounded-xl shadow-xl">
                            {text}
                            <div className="absolute top-full left-1/2 -z-10 -translate-x-1/2 -mt-2">
                                 <div className=" absolute top-0 -translate-y-1/2 size-2.5 rounded-xs rotate-45  bg-stone-700 "></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}

interface TooltipCardProps {
    children: React.ReactNode,
    className: string
    content: React.ReactNode
}

export const TooltipCard = ({ children, content, className}:TooltipCardProps) => {

    const [isVisible, setIsVisible] = useState(false)

    return (
        <div
        className="relative inline-block"
        onMouseEnter={() => setIsVisible(true)}
        onMouseLeave={() => setIsVisible(false)}>

            <div className=" p-1 rounded-xl">
                {children}
            </div>

            <AnimatePresence>
                {isVisible && (
                    <motion.div
                    initial={{ opacity: 0, scale: 0.9, y: 10 }}
                    animate={{ opacity: 1, scale: 1, y: 0 }}
                    exit={{ opacity: 0, scale: 0.9, y: 5}}
                     className={cn("absolute md:right-full top-full -right-1/2  md:-translate-y-1/2 mb-4 z-50", className)}>
                        <div className="bg-zinc-900 border border-zinc-800 p-4 rounded-2xl shadow-2xl  w-[90vw] md:w-auto md:min-w-[400px] md:max-w-[600px]">
                            {content}
                            <div className=" absolute -z-10 md:left-full md:top-1/2 bottom-full left-10/12 md:-translate-x-1/2 translate-y-1/2  size-2.5 md:-mt-8 rounded-xs rotate-45  bg-stone-700 "></div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )
}