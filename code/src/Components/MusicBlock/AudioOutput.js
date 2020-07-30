import React from "react";

import {Grid, Switch, FormGroup, FormControlLabel, withStyles} from "@material-ui/core";
import {MusicBlock, PageTypo} from "..";

import {audioData} from "../../Data";

import $ from "jquery";

const CFormGroup = withStyles({
    root:{
        paddingLeft:20,
    }
})(FormGroup);

const CFormControlLabel = withStyles({
    label:{
        fontFamily:"Montserrat",
    }
})(FormControlLabel);


export const AudioOutput = () => {
    const [state, setState] = React.useState({
        checkedRemix:true,
        checkedCover:true,
    });

    const handleChange = (event) => {
        setState({...state, [event.target.name]:event.target.checked});
        if (event.target.name === "checkedRemix")
            if (event.target.checked)
                $('.remix').fadeTo(300, 1);
            else
                $('.remix').fadeTo(300, 0.3);
        else
        if (event.target.checked)
            $('.cover').fadeTo(300, 1);
        else
            $('.cover').fadeTo(300, 0.3);
        //JQuery fade works faster, than mapping and filtering in ReactJS
    };

    return (
        <Grid container id={"music"}>
            <Grid item xs={12}>
                <PageTypo>music</PageTypo>
            </Grid>
            <Grid item xs={12}>
                <CFormGroup row>
                    <CFormControlLabel
                        control={
                            <Switch
                                checked={state.checkedRemix}
                                onChange={handleChange}
                                name="checkedRemix"
                                color="secondary"
                                inputProps={{'aria-label':'secondary checkbox'}}
                            />
                        }
                        label={"remixes"}
                    />
                    <CFormControlLabel
                        control={
                            <Switch
                                checked={state.checkedCover}
                                onChange={handleChange}
                                name="checkedCover"
                                color="secondary"
                                inputProps={{'aria-label':'secondary checkbox'}}
                            />
                        }
                        label={"covers"}
                    />
                </CFormGroup>
            </Grid>
            {audioData.map(info =>
                <Grid item xs={12} sm={6} md={4} lg={3}>
                    <div className={info.class}>
                        <MusicBlock
                            name={info.name}
                            type={info.type}
                            auth={info.auth}
                            date={info.date}
                            img={info.img}
                            audio={info.audio}
                            href={info.href}
                        />
                    </div>
                </Grid>
            )}
        </Grid>
    )
};