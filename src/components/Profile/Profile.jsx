import { Typography } from '@mui/material';

import '@/components/Profile/Profile.css';

const Profile = () =>
{
    return (
        <div className="profile container_shadow">
            <div className="profile_name">
                <Typography className="name">Sam</Typography>
                <Typography className="title">Title</Typography>
            </div>

            <figure className='profile_image'>
                <img src="/storage/resources/image.jpg" alt="" />
            </figure>

            <div className="profile_information">
                Insert Timeline
                <br />
                <button>my Button</button>
            </div>
        </div>
    );
}

export default Profile;
