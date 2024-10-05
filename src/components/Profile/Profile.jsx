import { Typography } from '@mui/material';

import { TimelineItem, TimelineContent } from '@mui/lab';

import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import GetAppIcon from '@mui/icons-material/GetApp';

import CustomTimeline, { CustomTimelineSeparator } from '@/components/Timeline/Timeline';
import CustomButton from '@/components/Button/Button';

import '@/components/Profile/Profile.css';

import data from '@/utils/data';

const CustomTimelineItem = ({ title, text, link }) =>
{
    return (
        <TimelineItem>
            <CustomTimelineSeparator />
            <TimelineContent className="timeline_content">

                {
                    link ?
                    (
                        <Typography className="timelineItem_text">
                            <span>{title}:</span>{' '}
                            <a href={link} target="_blank">
                                {text}
                            </a>
                        </Typography>
                    ) :
                    (
                        <Typography className="timelineItem_text">
                            <span>{title}:</span>{' '}{text}
                        </Typography>
                    )
                }

            </TimelineContent>
        </TimelineItem>
    );
}

const Profile = () =>
{
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">{data.name}</Typography>
                <Typography className="title">{data.title}</Typography>
            </div>

            <figure className='profile_image'>
                <img src="/storage/resources/profile-image.jpg" alt="" />
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon />}>
                    <CustomTimelineItem title="Nombre" text={data.name} />
                    <CustomTimelineItem title="Cumpleaños" text={data.birthday} />
                    <CustomTimelineItem title="Trabajo" text={data.title} />

                    {/* { data.email && <CustomTimelineItem title="Correo" text={data.email} /> } */}

                    {
                        Object.keys(data.socials).map((key, index) =>
                        (
                            data.socials[key].text && <CustomTimelineItem key={index} title={key} text={data.socials[key].text} link={data.socials[key].link} />
                        ))
                    }

                </CustomTimeline>

                <div className="button_container">
                    <CustomButton text="Descargar Cv" icon={<GetAppIcon />} download />
                </div>
            </div>
        </div>
    );
}

export default Profile;
