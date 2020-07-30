import React from "react"
import {Grid} from "@material-ui/core"
import {PageTypo} from ".."
import {MainCard} from "./MainCard"
import {ReactBlock} from "./ReactBlock"
import {RepairAppBlock} from "./RepairAppBlock"
import {QtAppBlock} from "./QtAppBlock"

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
                <RepairAppBlock/>
            </Grid>
            <Grid item xs={12} lg={6}>
                <QtAppBlock/>
            </Grid>
        </Grid>
    )
};