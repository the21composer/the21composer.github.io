import React from 'react';
import './Bar.css'
import {BarButton} from './BarButton';

import Brightness4Icon from '@material-ui/icons/Brightness4';

import withStyles from '@material-ui/core/styles/withStyles';

import AppBar from '@material-ui/core/AppBar';
import Drawer from '@material-ui/core/Drawer';

import {Hidden, List, Toolbar, Typography, IconButton, Slide, useScrollTrigger, Link as RLink} from '@material-ui/core';

import MenuIcon from '@material-ui/icons/Menu';

import {Link} from "react-scroll";

const PageName = withStyles({
    root:{
        flexGrow:1,
        fontFamily:'Montserrat',
        fontSize:19
    }
})(Typography);

const CToolbar = withStyles({
    root:{
        opacity:1,
        minHeight:50
    }
})(Toolbar);

const CAppBar = withStyles({
    root:{
        opacity:0.7,
    }
})(AppBar);

const CDrawer = withStyles({
    paper:{
        height:290,
        width:140,
        opacity:0.9,
        borderRadius:15,
        top:55,
        right:15,
        display:'flex',
        justifyContent:'space-around',
        alignItems:'center',
    }
})(Drawer);

function HideOnScroll(props) {
    const {children} = props;
    return (
        <Slide appear={false} direction="down" in={!useScrollTrigger()}>
            {children}
        </Slide>
    );
}

export const TopBar = ({onToggleDark}) => {
    const [sideBarState, setState] = React.useState({
        right:false
    });

    const toggleDrawer = (sideBarAnchor, open) => (event) => {
        if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
            return;
        }
        setState({...sideBarState, [sideBarAnchor]:open});
    };

    const list = (anchor) => (
        <div
            role='presentation'
            onClick={toggleDrawer(anchor, false)}
            onAnimationEnd={toggleDrawer(anchor, false)}
            onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                <div className={'spacer'}>
                    <RLink href='#/' style={{textDecoration:'none'}}>
                        <BarButton text={'music'}/>
                    </RLink>
                </div>
                <div className={'spacer'}>
                    <RLink href='#/dev' style={{textDecoration:'none'}}>
                        <BarButton text={'dev'} href='#/dev'/>
                    </RLink>
                </div>
                <div className={'spacer'}>
                    <BarButton text={'about'}/>
                </div>
                <div className={'spacer'}>
                    <IconButton variant="contained" color="default" text={'toggle'} onClick={onToggleDark}>
                        <Brightness4Icon/>
                    </IconButton>
                </div>
            </List>
        </div>
    );
    return (
        <HideOnScroll>
            <CAppBar position={'fixed'} color={'default'}>
                <CToolbar>
                    <PageName href={'/'}>
                        <b> forever alove </b>
                    </PageName>
                    {/* bar buttons for non-mobile mode*/}
                    <Hidden only={['xs']}>
                        <RLink href='#/' style={{textDecoration:'none'}}>
                            <BarButton text={'music'}/>
                        </RLink>
                        <RLink href='#/dev' style={{textDecoration:'none'}}>
                            <BarButton text={'dev'}/>
                        </RLink>
                        <BarButton text={'about'}/>
                        <IconButton variant="contained" text={'toggle'} onClick={onToggleDark}>
                            <Brightness4Icon/>
                        </IconButton>
                    </Hidden>
                    {/* side bar for mobile mode*/}
                    <Hidden smUp>
                        {/*burger button*/}
                        <IconButton onClick={toggleDrawer('right', true)} edge='start' aria-label='menu'>
                            <MenuIcon color={'default'}/>
                        </IconButton>
                        {/* side bar*/}
                        <CDrawer anchor={'right'} open={sideBarState['right']} onClose={toggleDrawer('right', false)}>
                            {list('right')}
                        </CDrawer>
                    </Hidden>
                </CToolbar>
            </CAppBar>
        </HideOnScroll>
    )
};