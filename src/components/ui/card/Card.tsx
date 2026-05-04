import { motion } from "motion/react";
import React from "react";
interface CardProps {
    children: React.ReactNode,
    span: number,
    layoutId: string,
    onClick?: () => void
};
const spanClasses: Record<number, string> = {
    1: "md:col-span-1",
    2: "md:col-span-2",
    3: "md:col-span-3",
    4: "md:col-span-4",
    5: "md:col-span-5",
};


export const Card = ({ children, span = 1, layoutId, onClick  }: CardProps) => {
    return (
        <div className={spanClasses[span]}>
            
            <motion.div
                layoutId={layoutId}
                onClick={onClick}
                whileHover={{ y: -8, rotate: -2 }}
                whileTap={{ scale: 0.98 }}
                transition={{ type: "spring",
                    stiffness: 400,
                    damping: 30,
                    mass: 0.8,}}
                className="group relative h-full flex flex-col bg-zinc-950 border border-zinc-800 hover:border-purple-500/40 
                            rounded-4xl p-6 overflow-hidden">
                <div className="absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100 transition duration-500 
                       bg-gradient-to-br from-purple-500/8 via-transparent to-transparent pointer-events-none"/>
                {children}
            </motion.div>
        </div>
    )
}

interface CardHeaderProps{
    children: React.ReactNode
}

export const Header = ({ children }:CardHeaderProps) => {
    return (
        <div className="mb-2  md:mb-4 ">
            {children}
        </div>
    )
}
// ttile
interface CardTitleProps{
    children: React.ReactNode
}

export const Title = ({ children }:CardTitleProps) => {
    return (
        <h2 className=" text-base font-medium select-none text-purple-500">{children}</h2>
    )
}


// Contenten
interface CardContentProps {
    children: React.ReactNode
}

export const Content = ({ children }: CardContentProps) => {
    return (

        <div className="flex-grow flex items-center justify-center p-4">{children}</div>
    )
}

interface CardFooterProps{
    children: React.ReactNode
}

export const Footer = ({ children }:CardFooterProps) => {
    return (
        <div className="flex items-center justify-between">{children}</div>
    )
}


export const CardRoot = Object.assign(Card, { Header, Title, Content, Footer })

