const routes = require('express').Router()
const model = require('./../models/UserModel')
const Op = 


routes.get('/', function(req, res){
    model.findAll({
        attributes:['id', 'email']
    }).then(data=>{
        res.json(data)
    })
})

routes.post('/', function(req, res){
    model.create(req.body)
        res.json({})
})

routes.patch('/', function(req, res){
    model.update(req.body, {
        where:{
            id: 1
        }
    })
    res.json({})
})


module.exports = routes