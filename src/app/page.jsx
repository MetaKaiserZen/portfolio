import { Container } from '@mui/material';

import Grid from '@mui/material/Grid2';

import Profile from '@/components/Profile/Profile';
import Header from '@/components/Header/Header';
import Resume from '@/components/Resume/Resume';
import Footer from '@/components/Footer/Footer';

const HomePage = () =>
{
    return (
        <Container className="top_60">
            <Grid container spacing={7}>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
                    <Profile />
                </Grid>
                <Grid size="grow">
                    <Header />
                        <div className="main_content container_shadow">
                            <Resume />
                        </div>
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
}

export default HomePage;
