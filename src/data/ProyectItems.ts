export interface CarouselItem {
  id: number
  type: "web" | "caseStudy";
  name: string
  image: string
}

export interface ProyectItem extends CarouselItem {
  id: number
  type: "web"
  name: string
  image: string
  description: string
  date: string
  autor: string
  url_author: string
  url_repo?: string
  url_demo?: string

  technologies: Tag[]
}

export interface CaseStudy extends CarouselItem {
  id: number
  type: "caseStudy"
  name: string
  title: string
  description: string
  date: string
  time: string
  image: string
  sections: CaseStudySection[]
}

export interface CaseStudySection {
  id: number
  heading: string
  content: string
  image?: CaseStudyImage[]
}

export interface CaseStudyImage {
  id: number
  title?: string
  image?: string
}

export interface Tag {
  id: number
  name: string
}



export const projectItem: ProyectItem[] = [
  {
    id: 1,
    type: "web",
    name: 'Gen Ai',
    image: new URL('../../src/assets/proyects/genai.avif', import.meta.url).href,
    autor: 'Dsingr',
    url_author: 'https://www.figma.com/@dsingr',
    url_repo: 'https://github.com/luisart3/genai',
    url_demo: 'https://luisart3.github.io/genai/',
    description: 'UI desarrollada a partir de diseño en Figma, enfocada en detalle visual, estructura escalable y experiencia consistente.',
    date: 'Marzo 2026',
    technologies: [
      {
        id: 1,
        name: 'Vite'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Tailwindcss'
      },
      {
        id: 4,
        name: 'TypeScript'
      }
    ]

  },
  {
    id: 2,
    type: "web",
    name: 'Duke',
    image: new URL('../../src/assets/proyects/duke.avif', import.meta.url).href,
    autor: 'Dsingr',
    url_author: 'https://www.figma.com/@dsingr',
    url_repo: 'https://github.com/luisart3/duke',
    url_demo: 'https://luisart3.github.io/duke/',
    description: 'UI desarrollada a partir de diseño en Figma, enfocada en detalle visual, estructura escalable y experiencia consistente.',
    date: 'Marzo 2026',
    technologies: [
      {
        id: 1,
        name: 'Vite'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Tailwindcss'
      },
      {
        id: 4,
        name: 'TypeScript'
      }
    ]

  },
  {
    id: 3,
    type: "web",
    name: 'Codshell',
    image: new URL('../../src/assets/proyects/codshell.avif', import.meta.url).href,
    autor: 'Dsingr',
    url_author: 'https://www.figma.com/@dsingr',
    url_repo: 'https://github.com/luisart3/codshell',
    url_demo: 'https://luisart3.github.io/codshell/',
    description: 'UI desarrollada a partir de diseño en Figma, enfocada en detalle visual, estructura escalable y experiencia consistente..',
    date: 'Marzo 2026',
    technologies: [
      {
        id: 1,
        name: 'Vite'
      },
      {
        id: 2,
        name: 'React'
      },
      {
        id: 3,
        name: 'Tailwindcss'
      },
      {
        id: 4,
        name: 'TypeScript'
      }
    ]
  },
  {
    id: 4,
    type: "web",
    name: 'Veg',
    image: new URL('../../src/assets/proyects/veg.avif', import.meta.url).href,
    autor: 'Dsingr',
    url_author: 'https://www.figma.com/@dsingr',
    url_repo: 'https://github.com/luisart3/veg',
    url_demo: 'https://luisart3.github.io/veg/',
    description: 'UI desarrollada a partir de diseño en Figma, enfocada en detalle visual, estructura escalable y experiencia consistente..',
    date: 'Marzo 2026',
    technologies: [
      {
        id: 1,
        name: 'Vite'
      },
      {
        id: 2,
        name: 'Vue'
      },
      {
        id: 3,
        name: 'Tailwindcss'
      },
      {
        id: 4,
        name: 'TypeScript'
      }
    ]

  },
  {
    id: 5,
    type: "web",
    name: "Bento",
    image: new URL('../../src/assets/proyects/bentoui.avif', import.meta.url).href,
    autor: 'Dsingr',
    url_author: 'https://www.figma.com/@dsingr',
    url_repo: 'https://github.com/luisart3/bentoui',
    url_demo: 'https://luisart3.github.io/bentoui/',
    description: 'UI desarrollada a partir de diseño en Figma, enfocada en detalle visual, estructura escalable y experiencia consistente. Proyecto para portafolio.',
    date: 'Marzo 2026',
    technologies: [
      {
        id: 1,
        name: 'Vite'
      },
      {
        id: 2,
        name: 'Vue'
      },
      {
        id: 3,
        name: 'Tailwindcss'
      },
      {
        id: 4,
        name: 'TypeScript'
      }
    ]

  }
]

export const caseStudies: CaseStudy[] = [
  {
    id: 1,
    type: "caseStudy",
    title: "Infraestructura segura para sistema contable institucional",
    description: "Implementación de servidor y acceso remoto seguro para SAACG.NET",
    name: "Infraestructura VPN",
    date: "Realizado el 5 de Marzo del 2026",
    time: "2min",
    image: new URL('../../src/assets/proyects/InfraestructuraVPN.avif', import.meta.url).href,
    sections: [
      {
        id: 1,
        heading: "Contexto y recto",
        content: "La institución utilizaba SAACG.NET en una sola computadora configurada en modo monousuario. Esto limitaba el acceso al sistema contable, ya que solo un usuario podía trabajar a la vez y no existía acceso remoto para auditorías o trabajo fuera de la oficina.",
      },
      {
        id: 2,
        heading: "Oportunidad",
        content: "Existía la oportunidad de transformar el sistema a una arquitectura cliente-servidor, permitiendo que varios equipos accedieran simultáneamente al sistema contable y habilitando acceso remoto seguro para auditorías y trabajo fuera de la oficina."
      },
      {
        id: 3,
        heading: "Proceso",
        content: "Investigación del sistema\n Estudié la arquitectura de SAACG.NET para comprender su funcionamiento en modo servidor y cliente.\n\n  Configuración de infraestructura\n   Implementé: \n  * servidor central del sistema \n  * conexión de múltiples equipos cliente\n  * pruebas de red y diagnóstico de conectividad\n\n  Acceso remoto seguro \n Implementé una VPN utilizando WireGuard y DNS dinámico con No-IP para permitir acceso remoto estable.\n\n Organización de archivos \n Configuré almacenamiento centralizado con Synology DS225+ para compartir documentación, perfiles de conexión y recursos internos.",
        image: [
          {
            id: 1,
            title: "Arquitectura de acceso remoto",
            image: new URL('../../src/assets/proyects/Arquitectura-acceso-remoto.avif', import.meta.url).href
          },
          {
            id: 2,
            title: "Arquitectura interna del sistema",
            image: new URL('../../src/assets/proyects/Arquitectura-interna-sistema.avif', import.meta.url).href
          },
        ]
      },
      {
        id: 4,
        heading: "Evidencia",
        content: "1. Conexión simultánea de 5 equipos\n 2. cliente al sistema contable\n 3. Acceso remoto seguro para auditorías\n 4. Centralización de documentos y recursos técnicos\n 5. Mejora en la disponibilidad del sistema",
        
      },
      {
        id: 5,
        heading: "Reflexión",
        content: "Este proyecto me permitió aprender a implementar infraestructura de red real, configurar VPN seguras y comprender cómo integrar sistemas administrativos dentro de una red institucional. También comprendí la importancia de documentar procesos técnicos para facilitar el mantenimiento del sistema por otros usuarios."
      }
    ]
  },
  {
    id: 2,
    type: "caseStudy",
    title: "Optimización y mantenimiento de equipos para entorno contable",
    description: "Mejora de rendimiento en equipos de oficina mediante upgrade de almacenamiento y mantenimiento",
    name: "Optimización de equipos",
    date: "Realizado el 10 de Marzo del 2026",
    time: "3min",
    image: new URL('../../src/assets/proyects/OptimizacionEquipos.avif', import.meta.url).href,
    sections: [
      {
        id: 1,
        heading: "Contexto y recto",
        content: "Los equipos utilizados para trabajar con SAACG.NET presentaban bajo rendimiento debido al uso de discos duros (HDD) y falta de mantenimiento.\n Esto generaba:\n\n 1. Uso constante del disco al 100%\n 2. Lentitud al abrir programas\n 3. Bajo rendimiento en tareas contables\n 4. Interrupciones en el flujo de trabajo",
      },
      {
        id: 2,
        heading: "Oportunidad",
        content: "Identifiqué la oportunidad de mejorar significativamente el rendimiento mediante:\n 1. actualización de almacenamiento (HDD → SSD)\n 2. mantenimiento preventivo de hardware\n 3.optimización del sistema operativo\n El objetivo era reducir tiempos de espera y mejorar la productividad del equipo."
      },
      {
        id: 3,
        heading: "Proceso",
        content: "Diagnóstico\n Analicé el rendimiento de los equipos, detectando cuellos de botella en el disco duro.\n\n Optimización de hardware\n 1. Reemplazo de HDD por SSD NVMe M.2\n 2. Limpieza interna de componentes\n 3. Cambio de pasta térmica para mejorar disipación de calor\n\n Configuración\n  1. Instalación de sistema operativo\n  2. Configuración de equipos para uso contable\n  3. Conexión y configuración de impresoras en red\n\n Recomendación técnica\n 1. Selección de modelos de SSD compatibles\n 2. Asesoramiento en compra de hardware adecuado"
      },
      {
        id: 4,
        heading: "Evidencia",
        content: "• Reducción del uso de disco de 100% a ~1-10%\n • Mejora notable en velocidad de arranque y ejecución\n • Equipos más estables para uso diario\n • Implementación en 3 equipos funcionales\n\n Antes:\n Equipo lento\n Disco al 100%\n Flujo de trabajo interrumpido\n\n Después:\n Sistema fluido \n Mayor productividad"
      }, 
      {
        id: 5,
        heading: "Reflexión",
        content: "Este proyecto me permitió desarrollar habilidades prácticas en:\n • diagnóstico y mantenimiento de hardware\n • optimización de rendimiento en equipos reales\n • selección de componentes compatibles\n • resolución de problemas en entornos de trabajo\n\n También reforcé la importancia de enfrentar nuevos retos técnicos para seguir aprendiendo y mejorar continuamente."
      }

    ]
  }
]