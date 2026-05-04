import type React from "react";
import { motion } from "motion/react";

import type { StackItems } from "../../../data/StackItems";
import { stackitems } from "../../../data/StackItems";

import { Tooltip } from "../tooltip/Tooltip";
import { useState, useEffect } from "react";

interface StackProps {
    items: StackItems[]
}


export const StackList: React.FC<StackProps> = ({ items }) => {
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1000);
    }, [])
    return (
        <>
            {isLoading ? (
                <div className="grid grid-cols-4  md:grid-cols-5 gap-2 md:gap-5 place-items-center">
                    {[...Array(12)].map((_, i) => (
                        <div key={i} className=" h-12 w-12 bg-zinc-900/50 border border-white/10 rounded-2xl animate-pulse" />
                    ))}
                </div>
            ) : items.length === 0 ? (
                <div className="flex items-center justify-center py-12">
                    <p className="text-gray-500">No hay proyectos disponibles</p>
                </div>
            ) : (
                <div className="grid grid-cols-4 md:grid-cols-5 gap-2 md:gap-5 place-items-center">
                    {items.map((item, i) => (
                        <Tooltip key={item.id ?? i} text={item.name}>
                            <motion.div
                                whileHover={{ scale: 1.05, y: -2 }}
                                transition={{ duration: 0.3 }}
                                className="group/item  w-12 h-12 p-2 relative flex items-center justify-center 
                        rounded-2xl bg-zinc-900 border border-zinc-800
                        hover:border-purple-500/40">
                                <div className=" absolute inset-0 rounded-2xl
                            group-hover:opacity-100   transition duration-500 bg-gradient-to-br from-purple-500/10 to-transparent"></div>
                                <img src={item.icon} className="relative z-10 h-5 object-contain opacity-80 hover:opacity-100 transition" />
                            </motion.div>
                        </Tooltip>
                    ))}
                </div>
            )}
        </>
    )
}


export const StackGrid: React.FC = () => {
    return <StackList items={stackitems} />
}