express  = require 'express'
router = express.Router()
AlertRepository  = require '../repository/AlertRepository.coffee'
AlertLauncher = require '../services/AlertLauncher.coffee'

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
  AlertRepository.getAll (err, alerts)->
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
  AlertRepository.createAlert req.body, (err, alert)->
    if(err)
      res.status(400).json(err)
    res.json(alert)


router.post '/command', (req, res, next) ->
  command  = req.body.msg
  AlertLauncher command, (result)->
    res.send({result : result})
