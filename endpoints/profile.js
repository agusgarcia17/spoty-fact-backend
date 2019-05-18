const routes = require('express').Router()

routes.get('/', function(req, res){
    res.json({'message': 'profile de Agus'})
})

routes.patch('/', function(req, res){
    res.json({'message': 'actualizado'})
})

module.exports = routes