import React from "react";
import {VideoBlock} from "./VideoBlock.js";
import {Grid} from "@material-ui/core";
import {PageTypo} from "..";

import {videoData} from "../../Data";

export const VideoOutput = () => {
    return (
        <Grid container id="video">
            <Grid item xs={12}>
                <PageTypo>video</PageTypo>
            </Grid>
            {videoData.map(info =>
                <Grid item xs={12} md={6} lg={4}>
                    <VideoBlock name={info.name} type={info.type} src={info.src}/>
                </Grid>
            )}
        </Grid>
    )
};