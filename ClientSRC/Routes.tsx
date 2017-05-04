import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import * as React from 'react';
import {Route} from 'react-router';
import {ConnectedAppContainer} from './AppContainer';

// MuiThemeProvider provides the material-ui theme to the app
export default (
    <MuiThemeProvider>
        <Route exact path='/' component={ ConnectedAppContainer }/>
    </MuiThemeProvider>

);