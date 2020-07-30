import React from 'react';
import './MusicBlock.css'

import withStyles from "@material-ui/core/styles/withStyles";

import {Card, CardContent, Grid} from "@material-ui/core";
import {NameTypo, InfoTypo, SubTypo} from "../Typography/Typography";
import Image from 'material-ui-image'

import GetAppIcon from '@material-ui/icons/GetApp';
import IconButton from "@material-ui/core/IconButton";

const MusicCard = withStyles({
    root:{
        boxShadow:'0px 3px 20px #00000020',
        borderRadius:15,
        margin:10,
        animation: 'appear 0.5s cubic-bezier(.51,.92,.24,1.15);',
    }
})(Card);

export function MusicBlock(props) {
    return (
        <MusicCard>
            <CardContent>
                <Grid container spacing={1}>
                    <Grid item xs={6}>
                        <SubTypo>
                            {props.auth}
                        </SubTypo>
                        <NameTypo gutterBottom>
                            {props.name}
                        </NameTypo>
                        <InfoTypo>
                            <div> {props.type} </div>
                            <div> {props.date} </div>
                        </InfoTypo>
                    </Grid>
                    <Grid item xs={6}>
                        <Image
                            src={props.img}
                            className='image'
                            aspectRatio={(1)}
                            color={'rgba(0,0,0,0)'}
                        />
                    </Grid>
                    <div className="audio">
                        <audio src={props.audio} preload="metadata" controls/>
                        <IconButton href={props.href}>
                            <GetAppIcon/>
                        </IconButton>
                    </div>
                </Grid>
            </CardContent>
        </MusicCard>
    )
}