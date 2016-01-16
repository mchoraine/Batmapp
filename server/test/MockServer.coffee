require('coffee-script/register');
process.env.NODE_ENV = "test"

express = require('express')
config = require('../config/config')
glob = require('glob')
mockgoose = require('mockgoose')
md5 = require('md5')
mongoose = require('mongoose')

mockgoose(mongoose)
mongoose.connect(config.db)
db = mongoose.connection
db.on 'error', ()->
  throw new Error('unable to connect to database at ' + config.db)


models = glob.sync(config.root + '/app/models/*.coffee')
models.forEach (model)->
  require(model)

mockgoose.reset ->

app = express()

require('../config/express')(app, config)

server = app.listen config.port

module.exports =
  app: app,
  shutdown : ->
    server.close()
