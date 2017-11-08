/**********************************************
 *  app.js                                    *
 *  Push Notification Services                *
 *                                            *
 *  Created by Jérôme Figueiredo on 03/04/17. *
 *********************************************/

/**
 * Module dependencies.
 */
const express = require('express');
const bodyParser = require('body-parser');
const configFile = require('./config.json')
var port = configFile.port;
/**
 * Controllers (route handlers).
 */
const pushController = require('./controllers/push');

/**
 * Create Express server.
 */
const app = express();

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || port);
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

/**
 * Routes
 */
app.route('/api/v1/send')
  .post(pushController.sendNotification)

// app.route('/api/v1/payload')
//   .get(pushController.getPayloadStructure)

/**
 * Start Express server.
 */
app.listen(app.get('port'), () => {
  console.log('App is running at http://localhost:%d in %s mode', app.get('port'), app.get('env'));
  console.log('  Press CTRL-C to stop\n');
});

module.exports = app;