import { Typography } from '@mui/material';

import '@/components/Footer/Footer.css';

import data from '@/utils/data';

const Footer = () =>
{
    return (
        <div className="footer">
            <div className="footer_left">
                <Typography className="footer_name">{data.name}</Typography>
            </div>
            <div className="footer_right">
                <Typography className="footer_copyright">
                    Diseñado y desarrollado por <a href="https://www.linkedin.com/in/eduardo-montenegro-sep%C3%BAlveda" target="_blank">Eduardo Montenegro Sepúlveda</a>
                    <br />
                    Créditos a <a href="https://themeforest.net/user/tavonline" target="_blank">Tavonline</a>
                </Typography>
            </div>
        </div>
    );
}

export default Footer;
