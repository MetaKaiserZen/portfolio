'use client';

import Grid from '@mui/material/Grid2';

import { Typography } from '@mui/material';

import { TimelineItem, TimelineContent } from '@mui/lab';

import { Work, School } from '@mui/icons-material';

import CustomTimeline, { CustomTimelineSeparator } from '@/components/Timeline/Timeline';

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
            <Grid container className="">
                <Grid className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Resume</h6>
                </Grid>

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
            </Grid>

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
