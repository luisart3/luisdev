import { motion } from "motion/react";
import React from "react";

interface AvartarProps {
    children: React.ReactNode
};


// main Pincipal
export const Avatar = ({ children }: AvartarProps) => {
    return (
        <motion.div
            initial={{ scale: 1 , opacity: 0 , y: 20 }}
            animate={{ scale: 1 , opacity: 1 , y: 0 }}
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 250 }}
            className="relative w-fit">
            <div className="h-24 w-24  rounded-full p-0.5 border border-white/10">
                <div className="h-full w-full overflow-hidden rounded-full bg-zinc-900">
                    {children}
                </div>
            </div>
        </motion.div>
    );
};

// Imagen

interface ImageProps {
    src: string;
    alt: string;
}

export const Image: React.FC<ImageProps> = ({ src, alt }) => {
    return (
        <img
            src={src}
            alt={alt}
            className=" aspect-square h-full w-full object-cover"
            loading="lazy"
        />
    );
};

interface FallbackProps {
    children: React.ReactNode
}

export const Fallback = ({ children }: FallbackProps) => {
    return (
        <div className="flex h-full w-full justify-center items-center rounded-full bg-zinc-900 text-sm font-medium uppercase">
            {children}
        </div>
    )
}

// badge 
interface BadgeProps {
    children: React.ReactNode
}

export const Badge = ({ children }: BadgeProps) => {
    return (
        <div className=" absolute -bottom-2 left-16">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-zinc-950/90 backdrop-blur border border-white/10 shadow-lg">
                <span className="relative flex size-2.5">
                    <span
                        className="absolute inline-flex h-full w-full animate-ping rounded-full bg-lime-400 opacity-75"></span>
                    <span className="relative inline-flex size-2.5 rounded-full bg-lime-500"></span>
                </span>
                <p className="text-xs text-zinc-300 whitespace-nowrap">{children}</p>
            </div>
        </div>
    )
}


export const AvatarRoot = Object.assign(Avatar, { Image, Fallback, Badge })

