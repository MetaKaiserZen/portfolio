'use client';


import
{
    Grid2,
    Typography,
    TextField
} from '@mui/material';

import CustomButton from '@/components/Button/Button';

import '@/components/Contact/Contact.css';

import data from '@/utils/data';

const Contact = () =>
{
    return (
        <>
            {/* Contact */}
            <Grid2 container spacing={6} className="section pt_45 pb_45">
                {/* Contact form */}
                <Grid2 size={{ xs: 12, lg: 7 }}>
                    <Grid2 container>
                        <Grid2 className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Form</h6>
                        </Grid2>
                    </Grid2>

                    <>
                        <Grid2 container spacing={3}>
                            <Grid2 size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth name="name" label="Name" variant="standard" autoComplete="off" />
                            </Grid2>
                            <Grid2 size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth name="email" label="E-mail" variant="standard" autoComplete="off" />
                            </Grid2>
                            <Grid2 size={12}>
                                <TextField fullWidth name="message" label="Message" multiline rows={4} variant="standard" autoComplete="off" />
                            </Grid2>
                            <Grid2 size={12}>
                                <CustomButton text="Submit" />
                            </Grid2>
                        </Grid2>
                    </>
                </Grid2>

                {/* Contact information */}
                <Grid2 size={{ xs: 12, lg: 5 }}>
                    <Grid2 container>
                        <Grid2 className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Information</h6>
                        </Grid2>
                    </Grid2>

                    <>
                        <Grid2 container>
                            <Grid2 size={12}>
                                <Typography className="contactInfo_item">
                                    <span>Address:</span>{' '}{data.address}
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography className="contactInfo_item">
                                    <span>Phone:</span>{' '}{data.phone}
                                </Typography>
                            </Grid2>
                            <Grid2 size={12}>
                                <Typography className="contactInfo_item">
                                    <span>Email:</span>{' '}{data.email}
                                </Typography>
                            </Grid2>
                        </Grid2>
                    </>

                    <>
                        <Grid2 container className="contactInfo_socialsContainer">

                            {
                                Object.keys(data.socials).map((key, index) =>
                                (
                                    <Grid2 key={index} className="contactInfo_social">
                                        <a href={data.socials[key].link}>{data.socials[key].icon}</a>
                                    </Grid2>
                                ))
                            }

                        </Grid2>
                    </>
                </Grid2>
            </Grid2>
        </>
    );
}

export default Contact;
