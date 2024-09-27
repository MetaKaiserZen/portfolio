import
{
    Facebook,
    Twitter,
    LinkedIn,
    GitHub,
    WebOutlined,
    AssignmentOutlined
} from '@mui/icons-material';

export default
{
    name: 'Salman Fazal',
    title: 'Full stack developer',

    birthday: '06th December 1999',
    email: 'sam@sam.com',
    address: '123 Test St',
    phone: '123 456 7890',

    socials:
    {
        Facebook:
        {
            link: 'https://www.facebook.com',
            text: 'SamIsCoding',
            icon: <Facebook />
        },
        Twitter:
        {
            link: 'https://www.facebook.com',
            text: 'MyTwitter',
            icon: <Twitter />
        },
        LinkedIn:
        {
            link: 'https://www.facebook.com',
            text: 'MyLinkedIn',
            icon: <LinkedIn />
        },
        GitHub:
        {
            link: 'https://www.facebook.com',
            text: 'MyGithub',
            icon: <GitHub />
        }
    },

    about: 'Started earnest brother believe an exposed so. Me he believing daughters if forfeited at furniture. Age again and stuff downs spoke. Late hour new nay able fat each sell. Nor themselves age introduced frequently use unsatiable devonshire get. They why quit gay cold rose deal park. One same they four did ask busy. Reserved opinions fat him nay position. Breakfast as zealously incommode do agreeable furniture. One too nay led fanny allow plate. \n\nQuick six blind smart out burst. Perfectly on furniture dejection determine my depending an to. Add short water court fat. Her bachelor honoured perceive securing but desirous ham required. Questions deficient acuteness to engrossed as. Entirely led ten humoured greatest and yourself. Besides ye country on observe. She continue appetite endeavor she judgment interest the met. For she surrounded motionless fat resolution may.',

    experiences:
    [
        {
            title: 'Work 1',
            date: '2018 - Present',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
        },
        {
            title: 'Work 2',
            date: '2014 - 2015',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
        },
        {
            title: 'Work 3',
            date: 'Aug 2016 - Sept 2018',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
        }
    ],

    education:
    [
        {
            title: 'Education 1',
            date: '2018 - Present',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
        },
        {
            title: 'Education 2',
            date: '2014 - 2015',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
        },
        {
            title: 'Education 3',
            date: 'Aug 2016 - Sept 2018',
            description: 'Expenses as material breeding insisted building to in. Continual so distrusts pronounce by unwilling listening. Thing do taste on we manor.'
        }
    ],

    services:
    [
        {
            title: 'Web Development',
            description: 'I have been working on web design for 10 years.',
            icon: <WebOutlined />
        },
        {
            title: 'Branding Identity',
            description: 'We will make you a brand that is catchy and leaves a trace.',
            icon: <AssignmentOutlined />
        },
        {
            title: 'Illustrator',
            description: 'I have been working on illustration design for 6 years.',
            icon: <WebOutlined />
        }
    ],
    
    skills:
    [
        {
            title: 'FRONT-END',
            description:
            [
                'ReactJS',
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
                'NodeJS',
                'Java',
                'Python',
                'Solidity'
            ]
        },
        {
            title: 'DATABASES',
            description:
            [
                'Firebase',
                'Ms SQL Server',
                'MySQL',
                'MongoDB'
            ]
        },
        {
            title: 'SOURCE CONTROL',
            description:
            [
                'Git',
                'GitHub',
                'SCRUM/Agile'
            ]
        }
    ]
}
