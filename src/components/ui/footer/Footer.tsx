
import { StartUI } from "../../icons/UIIcons"
import { SocialLinks } from "../social/SocialButton"



export const Footer = () => {
    return (
            <div className="p-2 space-y-2">
                <div className="flex flex-col md:flex-row gap-4  justify-between">
                    <div className="p-2 space-y-1.5">
                        <h4 className="text-gray-300 flex gap-1 text-xs md:text-sm ">Gracias por pasar por aquí. <span><StartUI className="size-6" /></span> </h4>
                        <p className="text-xs md:text-sm">Deja un <a href="https://github.com/luisart3" target="_blank" rel="noopener noreferrer" className=" rounded-full text-gray-400 hover:text-gray-200 p-1" >❤️ follow</a> si disfrutaste la experiencia.</p>
                    </div>
                    <SocialLinks/>
                </div>

                <hr className="border-white/5" />

                <div className="flex flex-col items-center justify-center text-xs text-gray-400  mt-8  space-y-1.5">
                    <p className="flex items-center gap-1">
                        Ilustraciones/Iconos 3D por
                        <a href="https://www.thiings.co/things" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-200">Thiings</a>
                    </p>
                    <p className="flex items-center gap-1">
                        Inspirado en componentes de
                        <a href="https://smoothui.dev/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-200">SmoothUI</a>
                    </p>
                    <p className="flex items-center gap-1">
                        Logos de tecnologías de
                        <a href="https://svgl.app/" target="_blank" rel="noopener noreferrer nofollow" className="underline hover:text-gray-200">SVGL</a>
                    </p>
                </div>
            </div>

    )
}