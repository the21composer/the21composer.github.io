import React, {useState} from 'react';
import {
    HashRouter as Router,
    Switch,
    Route,
} from "react-router-dom";
import './App.css';
import {TopBar, Intro, CreationPage, DevPage} from './Components'
import {CssBaseline, MuiThemeProvider} from "@material-ui/core";

import {createMuiTheme} from '@material-ui/core';

const App = () => {
    const [theme, setTheme] = useState({
        palette:{
            type:"dark",
            secondary: {
                main: "#d32f2f"
            }
        }
    });

    const toggleDarkTheme = () => {
        let newPaletteType = theme.palette.type === "light" ? "dark" : "light";
        setTheme({
            palette:{
                type:newPaletteType,
                secondary: {
                    main: "#d32f2f"
                }
            }
        });
    };

    const muiTheme = createMuiTheme(theme);

    return (
        <MuiThemeProvider theme={muiTheme}>
            <Router path='/'>
                <CssBaseline/>
                <TopBar onToggleDark={toggleDarkTheme}/>
                <Switch>
                    <Route exact path="/" component={CreationPage}/>
                    <Route path="/dev" component={DevPage}/>
                    <Route path="/main" component={CreationPage}/>
                </Switch>
            </Router>
        </MuiThemeProvider>
    );
};

export default App;
