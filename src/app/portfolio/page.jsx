import { Container } from '@mui/material';

import { Grid2 } from '@mui/material';

import Profile from '@/components/Profile/Profile';
import Header from '@/components/Header/Header';
import Portfolio from '@/components/Portfolio/Portfolio';
import Footer from '@/components/Footer/Footer';

const PortfolioPage = () =>
{
    return (
        <Container className="top_60">
            <Grid2 container spacing={7}>
                <Grid2 size={{ xs: 12, sm: 12, md: 4, lg: 3 }}>
                    <Profile />
                </Grid2>
                <Grid2 size="grow">
                    <Header />
                        <div className="main_content container_shadow">
                            <Portfolio />
                        </div>
                    <Footer />
                </Grid2>
            </Grid2>
        </Container>
    );
}

export default PortfolioPage;
