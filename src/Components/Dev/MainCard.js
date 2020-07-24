import React from 'react';

import './MainCard.css'
import {Grid, Card} from "@material-ui/core"
import {Link} from "react-scroll"
import {techData} from "../../Data"
import {InfoTypo} from "..";

export function MainCard() {
    return (
        <Grid xs={12} className='intro dev-intro'>
            <div className='shadower'/>
            <div className='name'>
                <div className='logo logo-dev'/>
                &nbsp; / dev
            </div>
            <InfoTypo className="anti-shadow main-text">
                СПбГЭТУ "ЛЭТИ" / ФКТИ / Прикладная математика и информатика (3 курс)
            </InfoTypo>
            <Grid container xs={12} className='tech-list anti-shadow'>
                {techData.map(tech =>
                    <Grid xs={'auto'}>
                        <Link to={tech}
                              spy={true}
                              smooth={true}
                              duration={500}>
                            <Card className='tech-elem'>
                                {tech}
                            </Card>
                        </Link>
                    </Grid>
                )}
            </Grid>
        </Grid>
    )
}