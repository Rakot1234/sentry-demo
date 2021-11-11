import React from 'react';
import './App.css';
import { ErrorBoundary } from "@sentry/react";
import { Router, Redirect, Route, Switch } from 'react-router-dom';
import Navigation from './Navigation/Navigation';
import HandlersErrors from './HandlersErrors/HandlersErrors';
import RenderErrors from './RenderErrors/RenderErrors';
import { createBrowserHistory } from 'history';
import { PagesEnum, routesMap } from './types';

const { MAIN, RENDER_ERROR, WITHOUT_SENTRY } = PagesEnum;

const App: React.FC = () => (
    <div className="app">
        <div className="app__wrapper">
            <ErrorBoundary fallback={<div className="app__fallback">Some Error</div>} showDialog>
                <Router history={createBrowserHistory()}>
                    <Navigation />
                    <div className="app__content">
                        <Switch>
                            <Route path={routesMap[MAIN]} exact>
                                <ErrorBoundary
                                    beforeCapture={(scope) => { scope.setTag('location', 'handlers') }}
                                    fallback={<div className="app__fallback">Some Error</div>}
                                >
                                    <HandlersErrors />
                                </ErrorBoundary>
                            </Route>
                            <Route path={routesMap[RENDER_ERROR]} exact>
                                <ErrorBoundary
                                    beforeCapture={(scope) => { scope.setTag('location', 'render') }}
                                    fallback={<div className="app__fallback">Some Error</div>}
                                >
                                    <RenderErrors />
                                </ErrorBoundary>
                            </Route>
                            <Route path={routesMap[WITHOUT_SENTRY]} exact>
                                <RenderErrors />
                            </Route>
                            <Route>
                                <Redirect to={MAIN} />
                            </Route>
                        </Switch>
                    </div>
                </Router>
            </ErrorBoundary>
        </div>
    </div>
);

export default App;
