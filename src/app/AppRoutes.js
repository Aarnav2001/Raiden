import React, { Component,Suspense, lazy } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import Spinner from '../app/shared/Spinner';

const Error404 = lazy(() => import('./error-pages/Error404'));
const Error500 = lazy(() => import('./error-pages/Error500'));

const Login = lazy(() => import('./user-pages/Login'));
const Register1 = lazy(() => import('./user-pages/Register'));

const MapPage = lazy(() => import('./MapPage/MapPage'));
const ongoing = lazy(() => import('./ongoing/projects'));
const newProject = lazy(() => import('./new/newProject'));
const home = lazy(() => import('./home/home'));
const Project = lazy(() => import('./home/Project/projects'));

const analysis = lazy(() => import('./Analysis/analysis'));
const add = lazy(() => import('./Add/newProject'));
const complete = lazy(() => import('./complete/projects'));
const fieldman = lazy(() => import('./Fieldman/fieldman'));
const estimation = lazy(()=>import("./estimaition/newProject"))

class AppRoutes extends Component {
  render () {
    return (
      <Suspense fallback={<Spinner/>}>
        <Switch>
          <Route exact path="/map" component={ MapPage } />
          <Route exact path="/ongoing" component={ ongoing } />
          <Route exact path="/newProject" component={ newProject } />
          <Route exact path="/home" component={ home } />
          <Route path="/Project/:id" render={(props) => <Project text="Hello, " {...props} />} />

          <Route exact path="/Analysis" component={ analysis } />
          <Route exact path="/Fieldman" component={ fieldman } />
          <Route exact path="/add" component={ add } />
          <Route exact path="/complete" component={ complete } />
          <Route exact path="/estimation" component={ estimation } />


          <Route path="/user-pages/login-1" component={ Login } />
          <Route path="/user-pages/register-1" component={ Register1 } />

          <Route path="/error-pages/error-404" component={ Error404 } />
          <Route path="/error-pages/error-500" component={ Error500 } />


          <Redirect to="/user-pages/login-1" />
        </Switch>
      </Suspense>
    );
  }
}

export default AppRoutes;