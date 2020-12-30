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
import GitHubIcon from '@material-ui/icons/GitHub';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import {InfoTypo, NameTypo, SubTypo} from "..";
import {angularData} from "../../Data";
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
        paddingRight: 8
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

export const AngularAppBlock = (props) => {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);

    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <DevCard>
            <CardContent>
                <Grid container xs={12} className='tech-list-small'>
                    <Grid xs={'auto'}>
                        <SubTypo className="tags-name">Tags: </SubTypo>
                    </Grid>
                    {angularData.tech.map(tech =>
                        <Grid xs={'auto'}>
                            <Card className='tech-elem-small' id={tech}>
                                <InfoTypo>{tech}</InfoTypo>
                            </Card>
                        </Grid>
                    )}
                </Grid>
                <Grid container xs={12}>
                    <Grid item xs={12} lg={7}>

                        <NameTypo gutterBottom className={"custom-name"}>
                          Администрирование биржи акций
                            <IconButton className="link-icon" color="secondary"
                                        href="https://github.com/the21composer/Angular-Express-Administration-App"><GitHubIcon/></IconButton>
                        </NameTypo>
                        <InfoTypo gutterBottom>
                            Клиент на Angular + сервер на Express для администрирования данных о брокерах и акциях на бирже <br/> <br/>
                        </InfoTypo>
                        <div className={classes.root}>
                            <CAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className={classes.heading}>Angular</Typography>
                                    <Typography className={classes.secondaryHeading}>Особенности</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li>Использование сервисов для осуществления HTTP запросов</li>
                                        <li>Независимое обновление информации в каждой карточке</li>
                                        <li>Быстрый и бесшовный роутинг между вкладками</li>
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                            <CAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className={classes.heading}>Дизайн</Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        Material UI и анимации
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li>Доработанные анимации появления объектов с помощью CSS</li>
                                        <li>Стиль строго соответствует Material дизайну</li>
                                        <li>Раскрывающиеся и всплывающие панели с проработанной логикой поведения при нажатиях</li>
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={5} className="gallery">
                        <Grid xs={12}>
                            <ImageGallery items={angularData.images} showPlayButton={false} showNav={false}/>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </DevCard>
    )
};
