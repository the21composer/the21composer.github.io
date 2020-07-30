import React, {useState} from "react";
import './VideoBlock.css'

import withStyles from "@material-ui/core/styles/withStyles";
import {Card, CardContent, Grid} from "@material-ui/core";
import {InfoTypo, NameTypo} from "..";
import Image from 'material-ui-image'
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';

const VideoCard = withStyles({
    root:{
        boxShadow:'0px 3px 20px #00000020',
        borderRadius:15,
        margin:10,
    }
})(Card);

const Youtube = (props) => {
    const {videoId, width, height} = props;
    const [showVideo, setShowVideo] = useState(false);
    return (
        <React.Fragment>
            {showVideo ? (
                <iframe
                    title={"youtube video"}
                    width={width ? width : "100%"}
                    height={height ? height : "400px"}
                    src={`https://www.youtube.com/embed/${videoId}?autoplay=1&showinfo=0`}
                    frameBorder="0"
                    allowFullScreen
                    className={"video"}
                />
            ) : (
                <div className="video" onClick={() => setShowVideo(true)}>
                    <Image
                        aspectRatio={16 / 9}
                        src={`https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`}
                        className={"video-image"}
                        color={"rgba(0,0,0,0)"}
                    />
                    <div className={"play"}>
                        <PlayCircleFilledIcon color={"secondary"} fontSize={"large"}/>
                    </div>
                </div>
            )}
        </React.Fragment>
    )
};

export function VideoBlock(props) {
    return (
        <VideoCard>
            <CardContent>
                <Grid container>
                    <Grid item xs={12}>
                        <NameTypo gutterBottom>
                            {props.name}
                            <InfoTypo>
                                <div> {props.type} </div>
                            </InfoTypo>
                        </NameTypo>
                    </Grid>
                    <Grid item xs={12}>
                        <div className="video-aspect-ratio">
                            <div className="aspect-ratio_inner-wrapper">
                                <Youtube title="video" frameBorder={0} videoId={props.src} className="video"/>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </CardContent>
        </VideoCard>
    )
}