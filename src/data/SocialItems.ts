import { Linkedin, Github } from "@boxicons/react";

export interface SocialItems {
    id: number,
    name: string
    url: string
    Icon: any
}


export const socialitems: SocialItems[] = [
    {
        id: 1, name: 'Github', url: 'https://github.com/luisart3', Icon: Github,
    },
    {
        id: 2, name: 'Linkedin', url:'https://www.linkedin.com/in/luisarte-dev/', Icon: Linkedin,
    },
]