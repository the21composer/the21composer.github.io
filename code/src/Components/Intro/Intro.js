import React from 'react';
import './Intro.css'
import withStyles from "@material-ui/core/styles/withStyles";

import {ButtonGroup, Button, Box} from "@material-ui/core";

const IntroButton = withStyles({
    root:{
        background:'rgba(255,221,176,0.1)',
        height: 40,
        maxWidth: 75,
        minWidth: 50,
        fontFamily: 'Montserrat',
        fontWeight: '400',
        color: '#d0d0d0',
        borderRadius: 20,
        '&:hover': {
            background:'rgba(255,221,176,0.15)',
        },
        '&:active': {
            boxShadow: '0px 3px 10px #00000050'
        },
    },
    label: {
        textTransform: 'none',
    },
})(Button);

export function Intro() {
    return (
        <div className='intro'>
            <div className='logo'/>
            <article className='description'>
                привет. я сочиняю на фортепиано, делаю ремиксы, а иногда и свои треки. еще я
                программирую, фотографирую, и все это скоро будет здесь...
            </article>
            <Box display="flex" justifyContent="flex-end" className='linkBox'>
                <ButtonGroup variant="text">
                    <IntroButton href='https://vk.com/forever_alove'> VK </IntroButton>
                    <IntroButton href='https://www.instagram.com/the21composer'> Inst </IntroButton>
                    <IntroButton href='https://www.youtube.com/channel/UC331TmQoaB0-EocWLoAtzwQ'> YouTube </IntroButton>
                    <IntroButton href='https://github.com/the21composer'> GitHub </IntroButton>
                </ButtonGroup>
            </Box>
        </div>
    )
}