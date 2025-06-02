import
{
    Facebook,
    Twitter,
    LinkedIn,
    GitHub,
    AssignmentOutlined,
    WebOutlined,
    Smartphone,
    YouTube,
    Language
} from '@mui/icons-material';

export default
{
    name: 'Eduardo Montenegro Sepúlveda',
    title: 'Full Stack Developer',

    birthday: '24 de Agosto de 1990',
    email: 'contacto@correo.cl',
    address: 'Avenida Principal #123',
    phone: '+56 9 1234 5678',

    socials:
    {
        Facebook:
        {
            link: 'https://www.facebook.com',
            text: '',
            icon: <Facebook />
        },
        Twitter:
        {
            link: 'https://x.com',
            text: '',
            icon: <Twitter />
        },
        LinkedIn:
        {
            link: 'https://www.linkedin.com/in/eduardo-montenegro-sep%C3%BAlveda',
            text: '/eduardo-montenegro-sepúlveda',
            icon: <LinkedIn />
        },
        GitHub:
        {
            link: 'https://github.com/eduardo-montenegro-sepulveda',
            text: '/eduardo-montenegro-sepulveda',
            icon: <GitHub />
        }
    },

    about: 'Estudiante titulado de Ingeniería de Ejecución en Informática Mención Desarrollo de Sistemas del Instituto Profesional AIEP. Especialista en áreas de soporte TI y con destacada experiencia en el desarrollo web en lenguajes de programación, tales como PHP y JavaScript, y en el manejo de bases de datos MySQL y MongoDB. Habilidades demostrables al momento de liderar eficientemente un equipo de trabajo durante un Proyecto Informático. Creativo y orientado al cumplimiento de objetivos.',

    experiences:
    [
        {
            title: 'Ideas Digitales',
            date: '2025',
            description: '- Construcción de aplicaciones utilizando los Frameworks definidos por la compañía.\n- Colaboración en el diseño e implementación de los procesos a construir.\n- Creación y documentación de APIs RESTful seguras y eficientes.\n- Mantención de código según los estándares de calidad y mejores prácticas.\n- Implementación de medidas de seguridad en el Backend para proteger datos sensibles.\n- Participación de análisis y pruebas de vulnerabilidades en el código.\n- Participación en revisiones de código y optimización de procesos.'
        },
        {
            title: 'Denergía',
            date: '2024',
            description: '- Desarrollo de portales informativos del rubro del acero utilizando el Framework Next.js.\n- Automatización de tareas e integración de cambios de código de forma continua mediante CI/CD.'
        },
        {
            title: 'Tranvial',
            date: '2020, 2021, 2022 y 2023',
            description: '- Desarrollo y mantención de sitios web utilizando el Framework Laravel, utilizando Eloquent ORM, consola de comandos Artisan y plantillas Blade para el desarrollo de sitios web a la medida.\n- Formulación de las especificaciones necesarias para la elaboración de informes de estudios preliminares y de factibilidad para la adquisición de software y hardware y para el desarrollo de nuevos sistemas informáticos.\n- Asesoramiento y monitoreo en casos de problemas técnicos de equipamiento e implementación de sistemas informáticos.\n- Coordinación y asesoramiento de la instalación de servicios informáticos complementarios, tales como redes, correo electrónico e Internet.'
        },
        {
            title: 'Instituto Profesional AIEP',
            date: '2018 y 2019',
            description: '- Instalación de Sistemas Operativos (Windows 7 y Windows 10) y clonación de equipos (Acronis).\n- Preparación de equipos del personal administrativo con software corporativo.\n- Instalación y configuración de Office 2016 Plus y Office 365.\n- Configuración de direcciones IP estáticas.\n- Subir equipos al dominio corporativo con Active Directory.\n- Configuración de navegadores para la habilitación de páginas corporativas.\n- Realizar planillas de inventario Activos Fijos.\n- Optimización en el rendimiento de los equipos.\n- Realizar respaldo de información de archivos y correos (PST).\n- Creación de carpetas compartidas con los atributos solicitados (Lectura, Escritura y Control Total).\n- Conocimiento de SLA (Aranda Service Desk).\n- Configuración de proyectores por VGA y por red.\n- Realizar congelación de equipos (Deep Freeze).'
        }
    ],

    education:
    [
        {
            title: 'Enseñanza Básica',
            date: 'Promoción del 2004',
            description: 'Escuela John. F. Kennedy.'
        },
        {
            title: 'Enseñanza Media',
            date: 'Promoción del 2009',
            description: 'Liceo de Educación de Adultos Juan Francisco González Reyes.'
        },
        {
            title: 'Estudios Universitarios',
            date: '2015, 2016 y 2017',
            description: 'Técnico en Programación y Análisis de Sistemas. Instituto Profesional AIEP.'
        },
        {
            title: 'Estudios Universitarios',
            date: '2018',
            description: 'Ingeniería de Ejecución en Informática Mención Desarrollo de Sistemas. Instituto Profesional AIEP.'
        },
        {
            title: 'Estudios Complementarios',
            date: '2021',
            description: 'Desarrollo de Aplicaciones Full Stack JavaScript Trainee. Talento Digital Para Chile.'
        },
        {
            title: 'Estudios Complementarios',
            date: '2022 y 2023',
            description: 'Desarrollador Front End con React. Desafío Latam.'
        }
    ],

    services:
    [
        {
            title: 'Consultoría',
            description: 'Llevo más de 6 años trabajando como consultor para el levantamiento de requerimientos.',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Desarrollo Web',
            description: 'Llevo más de 6 años trabajando en el desarrollo web.',
            icon: <WebOutlined />
        },
        {
            title: 'App Mobile',
            description: 'Llevo más de un año trabajando en el desarrollo de aplicaciones móviles híbridas',
            icon: <Smartphone />
        }
    ],
    
    skills:
    [
        {
            title: 'FRONT-END',
            description:
            [
                'React',
                'JavaScript',
                'TypeScript',
                'Bootstrap',
                'Material UI'
            ]
        },
        {
            title: 'BACK-END',
            description:
            [
                'Node.js',
                'PHP'
            ]
        },
        {
            title: 'BASES DE DATOS',
            description:
            [
                'Microsoft SQL Server',
                'MySQL',
                'MongoDB'
            ]
        },
        {
            title: 'FRAMEWORKS',
            description:
            [
                'Laravel',
                'Next.js',
                'React Native'
            ]
        },
        {
            title: 'CONTROL DE VERSIONES',
            description:
            [
                'Git',
                'GitHub'
            ]
        }
    ],

    projects:
    [
        {
            tag: 'HTML',
            image: 'viajes-chile.jpg',
            images:
            [
                'viajes-chile-1.png',
                'viajes-chile-2.png',
                'viajes-chile-3.png'
            ],
            title: 'Viajes Chile',
            caption: 'HTML / Bootstrap',
            description: 'Proyecto realizado con HTML y Bootstrap.',
            links:
            [
                {
                    link: '',
                    icon: <YouTube />
                },
                {
                    link: 'https://github.com/eduardo-montenegro-sepulveda/viajes-chile',
                    icon: <GitHub />
                },
                {
                    link: 'https://viajes-chile-lyart.vercel.app',
                    icon: <Language />
                }
            ]
        },
        {
            tag: 'React',
            image: 'pokeapi.png',
            images:
            [
                'pokeapi-1.png',
                'pokeapi-2.png',
                'pokeapi-3.png'
            ],
            title: 'PokéAPI',
            caption: 'React / React Bootstrap',
            description: 'Proyecto realizado en React y con React Bootstrap haciendo uso de la PokéAPI.',
            links:
            [
                {
                    link: '',
                    icon: <YouTube />
                },
                {
                    link: 'https://github.com/eduardo-montenegro-sepulveda/pokeapi',
                    icon: <GitHub />
                },
                {
                    link: 'https://pokeapi-two-pi.vercel.app',
                    icon: <Language />
                }
            ]
        },
        {
            tag: 'React',
            image: 'mamma-mia.jpg',
            images:
            [
                'mamma-mia-1.png',
                'mamma-mia-2.png',
                'mamma-mia-3.png',
                'mamma-mia-4.png',
                'mamma-mia-5.png'
            ],
            title: 'Mamma Mia',
            caption: 'React / Material UI',
            description: 'Proyecto realizado en React y con Material UI.',
            links:
            [
                {
                    link: '',
                    icon: <YouTube />
                },
                {
                    link: 'https://github.com/eduardo-montenegro-sepulveda/mamma-mia',
                    icon: <GitHub />
                },
                {
                    link: 'https://mamma-mia-one.vercel.app',
                    icon: <Language />
                }
            ]
        },
        {
            tag: 'React Native',
            image: 'pokedex.png',
            images:
            [
                'pokedex-1.png',
                'pokedex-2.png',
                'pokedex-3.png',
                'pokedex-4.png'
            ],
            title: 'Pokédex',
            caption: 'React Native',
            description: 'Proyecto realizado en React Native haciendo uso de la PokéAPI.',
            links:
            [
                {
                    link: '',
                    icon: <YouTube />
                },
                {
                    link: 'https://github.com/eduardo-montenegro-sepulveda/pokedex',
                    icon: <GitHub />
                },
                {
                    link: '',
                    icon: <Language />
                }
            ]
        },
        {
            tag: 'React Native',
            image: 'chat-app.jpg',
            images:
            [
                'chat-app-1.png',
                'chat-app-2.png',
                'chat-app-3.png'
            ],
            title: 'Chat App',
            caption: 'React Native',
            description: 'Proyecto realizado en React Native con conexión a MongoDB.',
            links:
            [
                {
                    link: '',
                    icon: <YouTube />
                },
                {
                    link: 'https://github.com/eduardo-montenegro-sepulveda/chat-app',
                    icon: <GitHub />
                },
                {
                    link: '',
                    icon: <Language />
                }
            ]
        }
    ]
}
