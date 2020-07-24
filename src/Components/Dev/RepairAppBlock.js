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
import {repairAppData} from "../../Data";
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

export const RepairAppBlock = (props) => {
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
                    {repairAppData.tech.map(tech =>
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
                            Repair Control App
                            <IconButton className="link-icon" color="secondary"
                                        href="https://github.com/the21composer/RepairControlApp"><LinkIcon/></IconButton>
                        </NameTypo>
                        <InfoTypo gutterBottom>
                            Многопользовательское веб-приложение
                            для контроля тех. обслуживания и ремонта
                        </InfoTypo>
                        <div className={classes.root}>
                            <CAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className={classes.heading}>Основное</Typography>
                                    <Typography className={classes.secondaryHeading}>Чемпионат, сроки</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li>Проект выполнен в рамках чемпионата <b>CASE-IN 2020</b> (этап ЛЭТИ)</li>
                                        <li>Разработка велась 10 дней (по регламенту чемпионата)</li>
                                        <li>Приложение позволяет следить за оборудованием, организовывать ремонтные работы</li>
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                            <CAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className={classes.heading}>Функционал</Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        Для кого и как
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li><b>Тип пользователей:</b> рем. работник, начальник участка, начальник рем. бригады, начальник цеха</li>
                                        <li>Просмотр данных об оборудовании в разворачиваемых таблицах</li>
                                        <li>Создание записей для проведения ремонта</li>
                                        <li>Просмотр записей, фиксирование этапов выполнения, удаление</li>
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                            <CAccordion expanded={expanded === 'panel3'} onChange={handleChange('panel3')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel3bh-content"
                                    id="panel3bh-header"
                                >
                                    <Typography className={classes.heading}>Технологии</Typography>
                                    <Typography className={classes.secondaryHeading}>
                                        Flask, Mongo, Bootstrap
                                    </Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li>Авторизация с помощью <i>Flask-Session</i></li>
                                        <li>Routing и GET/POST запросы через <i>Flask</i></li>
                                        <li>Работа с MongoDB с помощью ООП API <i>pymodm</i></li>
                                        <li>Адаптивная верстка с помощью <i>Bootstrap</i></li>
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={5} className="gallery">
                        <Grid xs={12}>
                            <ImageGallery items={repairAppData.images} showPlayButton={false} showNav={false}/>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </DevCard>
    )
};