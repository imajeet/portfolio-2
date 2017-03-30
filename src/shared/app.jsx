// @flow

import React from 'react'
import Helmet from 'react-helmet'
import { Switch } from 'react-router'
import { Route } from 'react-router-dom'
import { APP_NAME } from './config'
import Nav from '../shared/component/nav'
import HomePage from '../shared/component/pages/home'
import WebDevPage from '../shared/component/pages/webdev'
import CartogPage from '../shared/component/pages/cartog'
import NotFoundPage from '../shared/component/pages/not-found'

import {
  HOME_PAGE_ROUTE,
  WEB_DEV_ROUTE,
  CARTOG_ROUTE,
} from './routes'

const App = () =>
  <div style={{ paddingTop: 54 }}>
    <Helmet titleTemplate={`%s | ${APP_NAME}`} defaultTitle={APP_NAME} />
    <Nav />
    <Switch>
      <Route exact path={HOME_PAGE_ROUTE} render={() => <HomePage />} />
      <Route exact path={WEB_DEV_ROUTE} render={() => <WebDevPage />} />
      <Route exact path={CARTOG_ROUTE} render={() => <CartogPage />} />
      <Route component={NotFoundPage} />
    </Switch>
  </div>

export default App
