// @flow

import React from 'react'
import injectSheet from 'react-jss'
// import { APP_NAME } from '../config'

const styles = {
  tagline: {
    'font-size': '12px',
  },
}

const Footer = ({ classes }: { classes: Object }) =>
  <div className="container mt-5" style={{ backgroundColor: '#f4f7f9' }}>
    <hr />
    <footer className={classes.tagline}>
      <p style={{ marginTop: '0px', paddingBottom: '10px', margin: 0 }}>© Caroline Shea 2017</p>
    </footer>
  </div>

export default injectSheet(styles)(Footer)
