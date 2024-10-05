'use client';

import
{
    Grid2,
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
            <Grid2 container className="section pb_45 pt_45">
                <Grid2 className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Sobre mí</h6>
                </Grid2>
                <Grid2 size={12}>
                    <Typography variant="body2" className="aboutme_text">{data.about}</Typography>
                </Grid2>
            </Grid2>

            {/* Education an experiences */}
            <Grid2 container className="section pb_45">
                <Grid2 className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Resumen</h6>
                </Grid2>

                <>
                    <Grid2 container className="resume_timeline">
                        {/* Experiences */}
                        <Grid2 size={{ sm: 12, md: 6 }}>
                            <CustomTimeline title="Experiencia Profesional" icon={<Work />}>

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
                        </Grid2>

                        {/* Education */}
                        <Grid2 size={{ sm: 12, md: 6 }}>
                            <CustomTimeline title="Educación" icon={<School />}>

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
                        </Grid2>
                    </Grid2>
                </>
            </Grid2>

            {/* Services */}
            <Grid2 container className="section pb_45">
                <Grid2 className="section_title mb_30">
                    <span></span>
                    <h6 className="section_title_text">Mis Servicios</h6>
                </Grid2>

                <>
                    <Grid2 container spacing={3} justifyContent="space-around">

                        {
                            data.services.map((service, index) =>
                            (
                                <Grid2 key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                                    <div className="service">
                                        <Icon className="service_icon" style={{ width: 'auto', height: 'auto' }}>{service.icon}</Icon>
                                        <Typography className="service_title" variant="h6">{service.title}</Typography>
                                        <Typography className="service_description" variant="body2">{service.description}</Typography>
                                    </div>
                                </Grid2>
                            ))
                        }

                    </Grid2>
                </>
            </Grid2>

            {/* Skills */}
            <Grid2 className="section graybg pb_45 p_50">
                <Grid2 container spacing={3} justifyContent="center">

                    {
                        data.skills.map((skill, index) =>
                        (
                            <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 4 }}>
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
                            </Grid2>
                        ))
                    }

                </Grid2>
            </Grid2>
        </>
    );
}

export default Resume;
