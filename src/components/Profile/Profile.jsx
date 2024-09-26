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
                            <span style={{ fontWeight: 600 }}>{title}:</span>{' '}
                            <a href={link} target="_blank">
                                {text}
                            </a>
                        </Typography>
                    ) :
                    (
                        <Typography className="timelineItem_text">
                            <span style={{ fontWeight: 600 }}>{title}:</span> {text}
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
                <img src="/storage/resources/image.jpg" alt="" />
            </figure>

            <div className="profile_information">
                <CustomTimeline icon={<PersonOutlineIcon />}>
                    <CustomTimelineItem title="Name" text={data.name} />
                    <CustomTimelineItem title="Title" text={data.title} />
                    <CustomTimelineItem title="Email" text={data.email} />

                    {
                        Object.keys(data.socials).map((key, index) =>
                        (
                            <CustomTimelineItem key={index} title={key} text={data.socials[key].text} link={data.socials[key].link} />
                        ))
                    }

                </CustomTimeline>

                <div className="button_container">
                    <CustomButton text="Download Cv" icon={<GetAppIcon />} />
                </div>
            </div>
        </div>
    );
}

export default Profile;
