import { motion } from "motion/react";
import type { SocialItems } from "../../../data/SocialItems";
import { socialitems } from "../../../data/SocialItems";
import type React from "react";

import { Tooltip } from "../tooltip/Tooltip";


interface SocialProps {
    items: SocialItems[]
}


export const SocialList: React.FC<SocialProps> = ({ items }) => {

    return (
        <div className="flex items-center space-x-3">
            {items.map((item, i) => (
                <Tooltip key={item.id ?? i} text={item.name}>
                    <motion.a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.8 }}
                    className="w-10 h-10 p-2 rounded-xl bg-zinc-900 border border-zinc-800 
                        transition-all duration-300 
                        hover:text-purple-500
                        hover:border-purple-500/40" >
                        <item.Icon className=" size-6"/>
                    </motion.a>
                </Tooltip>
            ))
    
            }
        </div>
    )
}

export const SocialLinks: React.FC = ()  => {
    return <SocialList items={socialitems} />
}