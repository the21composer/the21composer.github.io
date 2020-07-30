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
import {qtAppData} from "../../Data";
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

export const QtAppBlock = (props) => {
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
                    {qtAppData.tech.map(tech =>
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
                            Проекты на Qt
                            <IconButton className="link-icon" color="secondary"
                                        href="https://github.com/the21composer?tab=repositories&q=&type=&language=c%2B%2B"><GitHubIcon/></IconButton>
                        </NameTypo>
                        <InfoTypo gutterBottom>
                            Курсовые и лабораторные работы
                        </InfoTypo>
                        <div className={classes.root}>
                            <CAccordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel1bh-content"
                                    id="panel1bh-header"
                                >
                                    <Typography className={classes.heading}>Графический редактор графов</Typography>

                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li>Создание, перемещение, выделение вершин графа мышкой</li>
                                        <li>Адаптивный интерфейс и панель инструментов</li>
                                        <li>Сохранение и загрузка графов из файла</li>
                                        <li>Визуализация алгоритма Дейкстры с сохранением путей</li>
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                            <CAccordion expanded={expanded === 'panel2'} onChange={handleChange('panel2')}>
                                <ExpansionPanelSummary
                                    expandIcon={<ExpandMoreIcon/>}
                                    aria-controls="panel2bh-content"
                                    id="panel2bh-header"
                                >
                                    <Typography className={classes.heading}>Тестирование вставки в хеш-таблицу</Typography>
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        <li>Настраиваемся генерация файлов для проведения тестирования</li>
                                        <li>Графики, обновляющиеся в режиме реального времени</li>
                                        <li>Возможность сохранить результаты тестирования в файл</li>
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
                                </ExpansionPanelSummary>
                                <ExpansionPanelDetails>
                                    <SubTypo>
                                        Проекты были созданы в рамках лабораторных или курсовых работ по дисциплинам "Построение и анализ алгоритмов" и "Алгоритмы и структуры данных"
                                    </SubTypo>
                                </ExpansionPanelDetails>
                            </CAccordion>
                        </div>
                    </Grid>
                    <Grid item xs={12} lg={5} className="gallery">
                        <Grid xs={12}>
                            <ImageGallery items={qtAppData.images} showPlayButton={false} showNav={false}/>
                        </Grid>
                    </Grid>
                </Grid>
            </CardContent>
        </DevCard>
    )
};