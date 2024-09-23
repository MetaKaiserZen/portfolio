import
{
    Container
} from '@mui/material';

import Grid from '@mui/material/Grid2';

import Profile from '@/components/Profile/Profile';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const HomePage = () =>
{
    return (
        <Container>
            <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }} style={{ backgroundColor: 'blue' }}>
                    <Profile />
                </Grid>
                <Grid size="grow" style={{ backgroundColor: 'red' }}>
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

export default HomePage;
