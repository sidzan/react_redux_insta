import React from 'react';
import { render } from 'react-dom';

//import css
import css from './styles/style.styl';

//import Component

import App from './components/app';
import Single from './components/Single';
import PhotoGrid from './components/PhotoGrid';

import { Router , Route , IndexRoute, browserHistory } from 'react-router';

import { Provider } from 'react-redux';
import store, { history } from './store'; 

const router = (
        <Router history={history}>
            <Route path="/" component={App}>
                <IndexRoute component={PhotoGrid}></IndexRoute>
                <Route path="/view/:postId" component={Single}/>
            </Route>
        </Router>

)
render(router,document.getElementById('root'));
