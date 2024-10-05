import Link from 'next/link';

import { Button } from '@mui/material';

import '@/components/Button/Button.css';

const CustomButton = ({ text, icon, download }) =>
{
    return (
        <>

            {
                download ?
                (
                    <Button
                        href="/storage/resources/curriculum_vitae_eduardo.pdf"
                        component={Link}
                        className="custom_btn"
                        target="_blank"
                        download
                        endIcon=
                        {
                            icon ? <div className="btn_icon_container">{icon}</div> : null
                        }
                    >
                        <span className="btn_text">{text}</span>
                    </Button>
                ) :
                (
                    <Button
                        className="custom_btn"
                        endIcon=
                        {
                            icon ? <div className="btn_icon_container">{icon}</div> : null
                        }
                    >
                        <span className="btn_text">{text}</span>
                    </Button>
                )
            }

        </>
    );
}

export default CustomButton;
