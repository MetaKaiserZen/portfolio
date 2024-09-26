import Grid from '@mui/material/Grid2';

import { Typography } from '@mui/material';

import '@/components/Resume/Resume.css';

import data from '@/utils/data';

const Resume = () =>
{
    return (
        <>
            {/* About me */}
            <Grid container className="section pb_45">
                <Grid className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">About Me</h6>
                </Grid>
                <Grid size={12}>
                    <Typography variant="body2" className="aboutme_text">{data.about}</Typography>
                </Grid>
            </Grid>

            {/* Education an experiences */}
            <Grid container className=""></Grid>

            {/* Services */}
            <Grid container className=""></Grid>

            {/* Skills */}
            <Grid container className=""></Grid>

            {/* Contact */}
            <Grid container className=""></Grid>
        </>
    );
}

export default Resume;
