/**********************************************
 *  push.js                                   *
 *  Push Notification Services                *
 *                                            *
 *  Created by Jérôme Figueiredo on 03/04/17. *
 *********************************************/

/**
 * Module dependencies.
 */
const FCM = require('fcm-push');
const FCMWP = require('fcm-web-push');
const serverKeyConfig = require('../config.json')
var serverKey = serverKeyConfig.serverKey;

var fcm = new FCM(serverKey);

const fcmwp = new FCMWP();
fcmwp.setAuthKey(serverKey);

/**
 * POST /
 * Send notification
 */
exports.sendNotification = (req, res) => {

    let payload = {
        //Common
        "title": req.body.notification.title,
        "body": req.body.notification.body,
        "sound": req.body.notification.sound,
        "click_action": req.body.notification.click_action,
        "body_loc_key": req.body.notification.body_loc_key,
        "body_loc_args": req.body.notification.body_loc_args,
        "title_loc_key": req.body.notification.title_loc_key,
        "title_loc_args": req.body.notification.title_loc_args,
        //iOS
        "badge": req.body.notification.badge,
        //Android & Web
        "icon": req.body.notification.icon,
        "tag": req.body.notification.tag,
        "color": req.body.notification.color
    }

    let datapl = {
        "dataTitle": req.body.data.dataTitle,
        "dataSubtitle": req.body.data.dataSubtitle,
        "dataColor": req.body.data.dataColor
    }

    // // ** Cicle to verify if each token is valid. */
    // for (var tok in req.body.deviceToken) {
    //     fcmwp.verifyToken(tok)
    //         .then((verified) => {
    //             if (verified) {
    //                 console.log('Token is good.')
    //             }
    //             else {
    //                 console.log('Token is not good');
    //             }
    //         })
    //         .catch((err) => {
    //             console.log('Token error:', err)
    //         })
    // }

    var message = {
        registration_ids: req.body.deviceToken, // required fill with device token or topics
        collapse_key: null,
        data: datapl,
        notification: payload,
        time_to_live: parseInt(req.body.time_to_live),
        priority: req.body.priority
    };

    console.log("FULL MESSAGE: ", message);

    fcm.send(message, function (error, response) {
        if (error) {
            console.log("Something has gone wrong!", error);
            res.json({ status: 'Error sending notification', error });
        } else {
            console.log("Successfully sent with response: ", response);
            res.json({ status: 'Notification succesfully sent', response});
        }
    });
    // res.json({ status: 'Notification succesfully sent' });
}