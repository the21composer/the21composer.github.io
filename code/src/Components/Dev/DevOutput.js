import React from "react"
import {BottomNavigation, Box, Button, ButtonGroup, Grid} from "@material-ui/core"
import {PageTypo} from ".."
import {MainCard} from "./MainCard"
import {ReactBlock} from "./ReactBlock"
import {RepairAppBlock} from "./RepairAppBlock"
import {QtAppBlock} from "./QtAppBlock"
import {AngularAppBlock} from "./AngularAppBlock";
import withStyles from "@material-ui/core/styles/withStyles";

const Footer = withStyles({
    root:{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        paddingLeft: 15,
        paddingRight: 15,
        fontFamily: "Montserrat"
    }
})(Grid)
const IntroButton = withStyles({
    root:{
        height:40,
        maxWidth:75,
        minWidth:50,
        fontFamily:'Montserrat',
        fontWeight:'400',
        borderRadius:20,
        '&:hover':{
            background:'rgba(255,221,176,0.15)',
        },
        '&:active':{
            boxShadow:'0px 3px 10px #00000050'
        },
    },
    label:{
        textTransform:'none',
    },
})(Button);

export const DevOutput = () => {
    return (
        <Grid container id="dev">
            <MainCard/>
            <Grid item xs={12} gutterBottom>
                <PageTypo>github</PageTypo>
            </Grid>
            <Grid item xs={12} lg={6}>
                <ReactBlock/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <AngularAppBlock/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <RepairAppBlock/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <QtAppBlock/>
            </Grid>
            <Grid item xs={12}>
                <BottomNavigation>
                    <Footer xs={12}>
                        <div>
                            Александр Облизанов, 2021
                        </div>
                        <Box display="flex" justifyContent="flex-end" className='linkBox' padding="6px">
                            <ButtonGroup variant="text">
                                <IntroButton href='https://vk.com/forever_alove'> VK </IntroButton>
                                <IntroButton href='https://www.instagram.com/the21composer'> Inst </IntroButton>
                                <IntroButton
                                    href='https://www.youtube.com/channel/UC331TmQoaB0-EocWLoAtzwQ'> YouTube </IntroButton>
                                <IntroButton href='https://github.com/the21composer'> GitHub </IntroButton>
                            </ButtonGroup>
                        </Box>
                    </Footer>
                </BottomNavigation>
            </Grid>
        </Grid>
    )
};
