'use client';

import { useState } from 'react';

import
{
    Dialog,
    DialogTitle,
    DialogContent,
    DialogActions
} from '@mui/material';

import
{
    Grid2,
    Tabs,
    Tab,
    Grow,
    Card,
    CardActionArea,
    CardMedia,
    CardContent,
    Typography
} from '@mui/material';

import ImageGallery from '@/components/ImageGallery/ImageGallery';

import '@/components/Portfolio/Portfolio.css';

import data from '@/utils/data';

const Portfolio = () =>
{
    const [tabValue, setTabValue] = useState('Todo');
    const [projectDialog, setProjectDialog] = useState(false);

    return (
        <>
            <Grid2 container spacing={1} className="section pb_45 pt_45">
                {/* Title */}
                <Grid2 className="section_title mb_20">
                    <span></span>
                    <h6 className="section_title_text">Portafolio</h6>
                </Grid2>

                {/* Tabs */}
                <Grid2 size={12}>
                    <Tabs value={tabValue} indicatorColor="white" className="customTabs" onChange={(e, value) => setTabValue(value)}>
                        <Tab label="Todo" value="Todo" className={tabValue == 'Todo' ? 'customTabs_item_active' : 'customTabs_item'} />

                        {
                            [
                                ...new Set(data.projects.map((item) => item.tag))
                            ].map((tag, index) =>
                            (
                                <Tab key={index} label={tag} value={tag} className={tabValue == tag ? 'customTabs_item_active' : 'customTabs_item'} />
                            ))
                        }

                    </Tabs>
                </Grid2>

                {/* Projects */}
                <Grid2 size={12}>
                    <>
                        <Grid2 container spacing={1}>

                            {
                                data.projects.map((project, index) =>
                                    tabValue == project.tag || tabValue == 'Todo' ?
                                    (
                                        <Grid2 key={index} size={{ xs: 12, sm: 6, lg: 4 }} style={{ padding: '10px' }}>
                                            <Grow in timeout={1000}>
                                                <Card className="customCard" onClick={() => setProjectDialog(project)}>
                                                    <CardActionArea>
                                                        <CardMedia className="customCard_image" image={`/storage/resources/portafolio/${project.image}`} title={project.title} />
                                                        <CardContent>
                                                            <Typography variant="body2" className="customCard_title">{project.title}</Typography>
                                                            <Typography variant="caption" className="customCard_caption">{project.caption}</Typography>
                                                        </CardContent>
                                                    </CardActionArea>
                                                </Card>
                                            </Grow>
                                        </Grid2>
                                    ) : null
                                )
                            }

                        </Grid2>
                    </>
                </Grid2>

                <Dialog
                    open={projectDialog}
                    onClose={() => setProjectDialog(false)}
                    className="projectDialog"
                    maxWidth="lg"
                    fullWidth
                >
                    <DialogTitle onClose={() => setProjectDialog(false)}>
                        {projectDialog.title}
                    </DialogTitle>
                    <DialogContent style={{ height: '80vh' }}>

                        {
                            projectDialog.images &&
                            (
                                <ImageGallery images={projectDialog.images} />
                            )
                        }

                        <Typography className="projectDialog_description">
                            {projectDialog.description}
                        </Typography>
                    </DialogContent>
                    <DialogActions className="projectDialog_actions">

                        {
                            projectDialog?.links?.map((link, index) =>
                            (
                                link.link && <a key={index} href={link.link} target="_blank" className="projectDialog_icon">{link.icon}</a>
                            ))
                        }

                    </DialogActions>
                </Dialog>
            </Grid2>
        </>
    );
}

export default Portfolio;
