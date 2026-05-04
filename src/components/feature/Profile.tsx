import { AvatarRoot as Avatar } from "../ui/avatar/Avatar"
import { motion } from "motion/react";
import { Map, SMS, Copy, Check } from "../icons/UIIcons";
import { SocialLinks } from "../ui/social/SocialButton";
import AvatarImg from "../../assets/luis_avatar.avif"

import { useState } from "react";
import { Tooltip } from "../ui/tooltip/Tooltip";

export const UserProfile = () => {
    //
    const userHasImage = true;

    const [copiedEmail, setcopiedEmail] = useState(false)
   
    // email to copy
    const email = 'luis01.dev@gmail.com'
    // function to copy email to clipboard
    const copyEmail = async () => {
        try {
            await navigator.clipboard.writeText(email)
            setcopiedEmail(true)

            setTimeout(() => setcopiedEmail(false), 2000)
        } catch (e) {
            console.log('Error al copiar',e)
        }
    }
    
    return (
        <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }} 
            className="flex flex-col space-y-6 py-8">
            <Avatar>

                {userHasImage ? (
                    <Avatar.Image src={AvatarImg} alt="Luis Artega" />
                ) : (
                    <Avatar.Fallback>LA</Avatar.Fallback>
                )}
                <Avatar.Badge>Dispnible para proyectos</Avatar.Badge>
            </Avatar>
           
            <motion.div
                initial={{ x: -30, opacity: 0 }}
            animate={{ x: 0, opacity:  1 }}
            transition={{ delay: 0.4, duration: 0.6 }}

                 className="space-y-2">
                <h2 className=" text-4xl leading-12 font-semibold from-[#FF1CF7]  to-[#9810fa] bg-clip-text text-transparent bg-linear-to-b">Luis Artega</h2>
                <p className=" text-sm text-zinc-300 text-pretty">Desarrollador  Frontend · UI Especialista</p>
            </motion.div>
            <p className=" text-lg text-zinc-400 max-w-lg leading-relaxed text-balance ">Transformo diseño en 
                interfaces rápidas, accesibles y visualmente consistentes.</p>

            <p className="text-sm flex gap-2 items-center"><Map  className=" size-5 "/>Ciudad de México</p>

            <div className="flex items-center space-x-3">
                <motion.a
                    whileHover={{ scale: 1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    href="mailto:luis01.dev@gmail.com"
                    className="flex items-center gap-2 font-medium text-purple-500">
                     <SMS className="size-4"/>   luis01.dev@gmail.com
                </motion.a>
                <Tooltip text="copiar correo">

                <motion.button 
                    onClick={copyEmail}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className=" relative cursor-pointer p-1 rounded-lg hover:bg-white/5">
                        <motion.div 
                        key={copiedEmail ? 'check' : 'copy'}
                        initial={{ opacity: 0, scale: 0.5}}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.2 }}>
                            { copiedEmail  ? (
                                <Check className=" size-5 text-green-500"/>
                            ) : (
                                <Copy className=" size-5"/>
                            ) }

                        </motion.div>
                </motion.button>
                </Tooltip>
            </div>
            <SocialLinks/>
            
        </motion.div>
    );
}