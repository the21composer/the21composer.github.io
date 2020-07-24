import React from "react";
import withStyles from "@material-ui/core/styles/withStyles";
import {
    Card,
    CardContent,
    Grid,
    ExpansionPanel,
    ExpansionPanelDetails,
    ExpansionPanelSummary,
    Typography,
    IconButton,
    makeStyles
} from "@material-ui/core";
import LinkIcon from '@material-ui/icons/Link';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {InfoTypo, NameTypo, SubTypo} from "..";
import {reactData} from "../../Data";
import ImageGallery from 'react-image-gallery';
import "react-image-gallery/styles/css/image-gallery.css"


const useStyles = makeStyles((theme) => ({
    root:{
        paddingTop:5,
        paddingBottom:5,
        width:'100%',
    },
    heading:{
        fontFamily:"montserrat",
        fontSize:theme.typography.pxToRem(15),
        flexBasis:'35%',
        flexShrink:0,
    },
    secondaryHeading:{
        fontFamily:"montserrat",
        fontSize:theme.typography.pxToRem(15),
        color:theme.palette.text.secondary,
    },
}));

const DevCard = withStyles({
    root:{
        boxShadow:'0px 3px 20px #00000020',
        borderRadius:15,
        margin:10,
        animation:'appear 0.5s;',
        transition:'all .15s ease-out',
    }
})(Card);

const CAccordion = withStyles({
    root:{
        boxShadow:"0 0 0",
    }
})(ExpansionPanel);

export const ReactBlock = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <DevCard>
            {/*THIS SITE*/}
            <CardContent>
                <Grid container xs={12} className='tech-list-small'>
                    <Grid xs={'auto'}>
                        <SubTypo className="tags-name">Tags: </SubTypo>
                    </Grid>
                    {reactData.tech.map(tech =>
                        <Grid xs={'auto'}>
                            <Card className='tech-elem-small' id={tech}>
                                {tech}
                            </Card>
                        </Grid>
                    )}
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={12} lg={7}>

                        <NameTypo gutterBottom className={"custom-name"}>
                            Сайт the21composer
                            <IconButton className="link-icon" color="secondary"
                                        href="https://github.com/the21composer/the21composer.github.io"><LinkIcon/></IconButton>
                        </NameTypo>
                        <InfoTypo gutterBottom>
                            Сайт-страничка для творчества и хобби
                        </InfoTypo>
                        <div className={classes.root}>
                            <CAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className={classes.heading}>React</Typography>
                                    <Typography className={classes.secondaryHeading}>Особенности</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li>С нуля созданный <i>LazyLoader</i> для YouTube-видео</li>
                                        <li><i>React Routes</i> для маршрутизации</li>
                                        <li><i>React Scroll</i> для кнопок-ссылок на странице</li>
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                            <CAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className={classes.heading}>Material UI</Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        Компоненты и фишки
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li>Темная и светлая тема с помощью <i>Mui Theme</i></li>
                                        <li>Глубоко переработанный дизайн компонентов с помощью <i>withStyles</i></li>
                                        <li>Дополнения: <i>Material UI Image</i></li>
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                            <CAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography className={classes.heading}>Общее</Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        Цель, планы
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <b>Цель:</b> создать страницу, на которой можно будет удобно размещать свое
                                        творчество, проекты, наработки.
                                        <br/><br/>
                                        <b>Планы:</b> в будущем планируется добавить раздел с фотографиями, дополнить
                                        раздел проектов, глубже изучать React и MaterialUI, их фишки и возможности.
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={5} className="gallery">
                        <Grid xs={12}>
                            <ImageGallery items={reactData.images} showPlayButton={false} showNav={false}/>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </DevCard>
    )
};