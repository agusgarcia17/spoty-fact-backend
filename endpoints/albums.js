const routes = require('express').Router()

routes.get('/', function(req, res){
    res.json({'message': 'lista de albumes'})
})

routes.get('/:id', function(req, res){
    res.json({'message': 'album especifico', 'album': req.params.id})
})

module.exports = routes