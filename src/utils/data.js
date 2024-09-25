import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

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
            icon: <FacebookIcon />
        },
        Twitter:
        {
            link: 'https://www.facebook.com',
            text: 'MyTwitter',
            icon: <TwitterIcon />
        },
        LinkedIn:
        {
            link: 'https://www.facebook.com',
            text: 'MyLinkedIn',
            icon: <LinkedInIcon />
        },
        GitHub:
        {
            link: 'https://www.facebook.com',
            text: 'MyGithub',
            icon: <GitHubIcon />
        }
    }
}
