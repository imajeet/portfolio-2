// @flow

import compression from 'compression'
import express from 'express'

import routing from './routing'
import { STATIC_PATH, WEB_PORT } from '../shared/config'
import { isProd } from '../shared/util'
// import renderApp from './render-app'

const app = express()

app.use(compression())
app.use(STATIC_PATH, express.static('dist'))
app.use(STATIC_PATH, express.static('public'))

routing(app)

app.listen(WEB_PORT, () => {
  // eslint-disable-next-line no-console
  console.log(`Server running on port ${WEB_PORT} ${isProd ? '(production)' :
    '(development)'}.\nKeep "npm run-script dev:wds" running in another terminal'}.`)
})
