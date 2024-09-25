'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Navbar, Nav } from 'react-bootstrap';

import
{
    HomeRounded,
    SchoolRounded,
    WorkOffRounded,
    Facebook,
    Twitter,
    LinkedIn,
    GitHub,
    Telegram
} from '@mui/icons-material'

import 'bootstrap/dist/css/bootstrap.min.css';

import CustomButton from '@/components/Button/Button';

import '@/components/Header/Header.css';

import data from '@/utils/data';

const Header = () =>
{
    const pathname = usePathname();

    return (
        <Navbar expand="lg" sticky="top" className="header">
            {/* Home link */}
            <Nav.Link as={Link} href="/">
                <Navbar.Brand className="header_home">
                    <HomeRounded />
                </Navbar.Brand>
            </Nav.Link>

            <Navbar.Toggle />

            <Navbar.Collapse>
                <Nav className="header_left">
                    {/* Resume Link */}
                    <Nav.Link as={Link} href="/" className={ pathname == '/' ? 'header_link_active' : 'header_link' }>Resume</Nav.Link>

                    {/* Portfolio Link */}
                    <Nav.Link as={Link} href="/portfolio" className={ pathname == '/portfolio' ? 'header_link_active' : 'header_link' }>Portfolio</Nav.Link>
                </Nav>

                <div className="header_right">

                    {
                        Object.keys(data.socials).map((key, index) =>
                        (
                            <a key={index} href={data.socials[key].link} target="_blank">{data.socials[key].icon}</a>
                        ))
                    }

                    <CustomButton text="Hire me" icon={<Telegram />} />
                </div>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
