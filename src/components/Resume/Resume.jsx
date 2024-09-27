'use client';

import Grid from '@mui/material/Grid2';

import
{
    Typography,
    Icon,
    Paper
} from '@mui/material';

import
{
    TimelineItem,
    TimelineContent,
    TimelineDot
} from '@mui/lab';

import { Work, School } from '@mui/icons-material';

import CustomTimeline, { CustomTimelineSeparator } from '@/components/Timeline/Timeline';

import '@/components/Resume/Resume.css';

import data from '@/utils/data';

const Resume = () =>
{
    return (
        <>
            {/* About me */}
            <Grid container className="section pb_45 pt_45">
                <Grid className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">About Me</h6>
                </Grid>
                <Grid size={12}>
                    <Typography variant="body2" className="aboutme_text">{data.about}</Typography>
                </Grid>
            </Grid>

            {/* Education an experiences */}
            <Grid container className="section pb_45">
                <Grid className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>

                <>
                    <Grid container className="resume_timeline">
                        {/* Experiences */}
                        <Grid size={{ sm: 12, md: 6 }}>
                            <CustomTimeline title="Work Experience" icon={<Work />}>

                                {
                                    data.experiences.map((experience, index) =>
                                    (
                                        <TimelineItem key={index}>
                                            <CustomTimelineSeparator />
                                            <TimelineContent className="timeline_content">
                                                <Typography className="timeline_title">{experience.title}</Typography>
                                                <Typography variant="caption" className="timeline_date">{experience.date}</Typography>
                                                <Typography variant="body2" className="timeline_description">{experience.description}</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))
                                }

                            </CustomTimeline>
                        </Grid>

                        {/* Education */}
                        <Grid size={{ sm: 12, md: 6 }}>
                            <CustomTimeline title="Education" icon={<School />}>

                                {
                                    data.education.map((education, index) =>
                                    (
                                        <TimelineItem key={index}>
                                            <CustomTimelineSeparator />
                                            <TimelineContent className="timeline_content">
                                                <Typography className="timeline_title">{education.title}</Typography>
                                                <Typography variant="caption" className="timeline_date">{education.date}</Typography>
                                                <Typography variant="body2" className="timeline_description">{education.description}</Typography>
                                            </TimelineContent>
                                        </TimelineItem>
                                    ))
                                }

                            </CustomTimeline>
                        </Grid>
                    </Grid>
                </>
            </Grid>

            {/* Services */}
            <Grid container className="section pb_45">
                <Grid className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">My Services</h6>
                </Grid>

                <>
                    <Grid container spacing={3} justifyContent="space-around">

                        {
                            data.services.map((service, index) =>
                            (
                                <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                                    <div className="service">
                                        <Icon className="service_icon" style={{ width: 'auto', height: 'auto' }}>{service.icon}</Icon>
                                        <Typography className="service_title" variant="h6">{service.title}</Typography>
                                        <Typography className="service_description" variant="body2">{service.description}</Typography>
                                    </div>
                                </Grid>
                            ))
                        }

                    </Grid>
                </>
            </Grid>

            {/* Skills */}
            <Grid justifyContent="space-around" className="section graybg pb_45 p_50">
                <Grid container spacing={3}>

                    {
                        data.skills.map((skill, index) =>
                        (
                            <Grid key={index} size={{ xs: 12, sm: 6, lg: 3 }}>
                                <Paper elevation={0} className="skill">
                                    <Typography variant="h6" className="skill_title">
                                        {skill.title}
                                    </Typography>

                                    {
                                        skill.description.map((element, index) =>
                                        (
                                            <Typography key={index} variant="body2" className="skill_description">
                                                <TimelineDot variant="outlined" className="timeline_dot" />
                                                {element}
                                            </Typography>
                                        ))
                                    }

                                </Paper>
                            </Grid>
                        ))
                    }

                </Grid>
            </Grid>
        </>
    );
}

export default Resume;
