'use client';

import Grid from '@mui/material/Grid2';

import { Typography, TextField } from '@mui/material';

import CustomButton from '@/components/Button/Button';

import '@/components/Contact/Contact.css';

import data from '@/utils/data';

const Contact = () =>
{
    return (
        <>
            {/* Contact */}
            <Grid container spacing={6} className="section pt_45 pb_45">
                {/* Contact form */}
                <Grid size={{ xs: 12, lg: 7 }}>
                    <Grid container>
                        <Grid className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Form</h6>
                        </Grid>
                    </Grid>

                    <>
                        <Grid container spacing={3}>
                            <Grid size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth name="name" label="Name" variant="standard" autoComplete="off" />
                            </Grid>
                            <Grid size={{ xs: 12, lg: 6 }}>
                                <TextField fullWidth name="email" label="E-mail" variant="standard" autoComplete="off" />
                            </Grid>
                            <Grid size={12}>
                                <TextField fullWidth name="message" label="Message" multiline rows={4} variant="standard" autoComplete="off" />
                            </Grid>
                            <Grid size={12}>
                                <CustomButton text="Submit" />
                            </Grid>
                        </Grid>
                    </>
                </Grid>

                {/* Contact information */}
                <Grid size={{ xs: 12, lg: 5 }}>
                    <Grid container>
                        <Grid className="section_title mb_30">
                            <span></span>
                            <h6 className="section_title_text">Contact Information</h6>
                        </Grid>
                    </Grid>

                    <>
                        <Grid container>
                            <Grid size={12}>
                                <Typography className="contactInfo_item">
                                    <span>Address:</span>{' '}{data.address}
                                </Typography>
                            </Grid>
                            <Grid size={12}>
                                <Typography className="contactInfo_item">
                                    <span>Phone:</span>{' '}{data.phone}
                                </Typography>
                            </Grid>
                            <Grid size={12}>
                                <Typography className="contactInfo_item">
                                    <span>Email:</span>{' '}{data.email}
                                </Typography>
                            </Grid>
                        </Grid>
                    </>

                    <>
                        <Grid container className="contactInfo_socialsContainer">

                            {
                                Object.keys(data.socials).map((key, index) =>
                                (
                                    <Grid key={index} class="contactInfo_social">
                                        <a href={data.socials[key].link}>{data.socials[key].icon}</a>
                                    </Grid>
                                ))
                            }

                        </Grid>
                    </>
                </Grid>
            </Grid>
        </>
    );
}

export default Contact;
