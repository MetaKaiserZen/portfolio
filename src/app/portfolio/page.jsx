import
{
    Container
} from '@mui/material';

import Grid from '@mui/material/Grid2';

import Profile from '@/components/Profile/Profile';
import Header from '@/components/Header/Header';
import Footer from '@/components/Footer/Footer';

const PortfolioPage = () =>
{
    return (
        <Container>
            <Grid container>
                <Grid size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
                    <Profile />
                </Grid>
                <Grid size="grow" style={{ backgroundColor: 'red' }}>
                    <Header />
                    <div>
                        Portfolio page
                    </div>
                    <Footer />
                </Grid>
            </Grid>
        </Container>
    );
}

export default PortfolioPage