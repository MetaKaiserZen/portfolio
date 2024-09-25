import
{
    Container
} from '@mui/material';

import Grid from '@mui/material/Grid2';

import Profile from '@/components/Profile/Profile';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const ResumePage = () =>
{
    return (
        <Container className="top_60">
            <Grid container spacing={7}>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
                    <Profile />
                </Grid>
                <Grid size="grow">
                    <Header />
                    <div>
                        Resume Page
                    </div>
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
}

export default ResumePage;
