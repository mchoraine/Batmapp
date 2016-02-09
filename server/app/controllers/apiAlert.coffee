express = require 'express'
router = express.Router()
AlertRepository = require '../repository/AlertRepository.coffee'
AlertLauncher = require '../services/AlertLauncher.coffee'
Authentification = require '../utils/Authentification.coffee'

module.exports = (app) ->
  app.use '/api/alerts', router


###
  @api {get} /alerts/ Request all alerts informations
  @apiGroup Alerts
  @apiSuccess {Object[]} alerts List of alerts
  @apiSuccess {Date}   alert.date   Alert creation date
  @apiSuccess {Number}   alert.criticity   Alert criticity
  @apiSuccess {String}   alert.type   Alert type
  @apiSuccess {Number}   alert.geoPosition.latitude   position of user
  @apiSuccess {Number}   alert.geoPosition.longitude   position of user
###
router.get '/', (req, res, next) ->
  AlertRepository.getAll req.user, (err, alerts)->
    res.json(alerts)


###
  @api {post} /alerts/ Request create an alert
  @apiGroup Alerts
  @apiSuccess {Object} alerts created
  @apiSuccess {Date}   alert.date   Alert creation date
  @apiSuccess {Number}   alert.criticity   Alert criticity
  @apiSuccess {String}   alert.type   Alert type
  @apiSuccess {Object}   alert.geoPosition   position of user
  @apiSuccess {Number}   alert.geoPosition.latitude   position of user
  @apiSuccess {Number}   alert.geoPosition.longitude   position of user
###
router.post '/', (req, res, next) ->
  AlertRepository.createAlert req.body, req.user, (err, alert)->
    if(err)
      res.status(400).json(err)
    else
      res.json(alert)

###
   @api {post} /alerts/command Request create an alert from vocal speech
   @apiGroup Alerts
   @apiParam {[String]} msg    List of speech command
   @apiSuccess {String} result of command
###
router.post '/command', (req, res, next) ->
  command = req.body.msg
  AlertLauncher command, req.user, (result)->
    res.send({result: result})


###
  @api {post} /alerts/call-police/:alertID call the police for alert
  @apiGroup Alerts
###
router.post '/call-police/:alertID', (req, res, next) ->
  AlertRepository.callPolice req.params.alertID, req.user, (err, alert)->
    if(err)
      res.status(400).json(err)
    else
      res.json(alert)

###
@api {post} /alerts/call-police/:alertID call the police for alert
@apiGroup Alerts
###
router.post '/call-samu/:alertID', (req, res, next) ->
  AlertRepository.callSamu req.params.alertID, req.user, (err, alert)->
    if(err)
      res.status(400).json(err)
    else
      res.json(alert)

###
  @api {post} /alerts/ongoing/:alertID call the police for alert
  @apiGroup Alerts
###
router.post '/ongoing/:alertID', (req, res, next) ->
  AlertRepository.onGoing req.params.alertID, req.user, (err, alert)->
    if(err)
      res.status(400).json(err)
    else
      res.json(alert)
