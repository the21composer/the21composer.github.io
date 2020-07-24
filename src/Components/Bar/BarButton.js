import React from 'react';
import '../../App.css';

import withStyles from '@material-ui/core/styles/withStyles';

import Button from '@material-ui/core/Button';

export class BarButton extends React.Component {
    render() {
        const StyledButton = withStyles({
            root: {
                background: 'rgba(0,0,0,0)',
                borderRadius: 20,
                border: 0,
                fontFamily: 'Montserrat',
                fontSize: 16,
                width: 80,
                height: 40,
                marginRight: 10,
                marginLeft: 10,
                transition: 'all .3s ease-out',
                '&:hover': {
                    background:'rgba(255,221,176,0.5)',
                },
                '&:active': {
                    transform: 'scale(1.1)',
                    boxShadow: '0px 3px 10px #00000050'
                },
            },
            label: {
                textTransform: 'none',
            },
        })(Button);
        return  (
            <StyledButton>
                {this.props.text}
            </StyledButton>
        )
    }
}