const playlist = require ('../models/PlaylistModel')
const routes = require('express').Router()


//Collection (varios)
routes.get('/', function(req, res){
    playlist.findAll().then(data=>{
        res.json(data)
    })
})

routes.get('/:id', function(req, res){
    playlist.findByPk(req.params.id)
    .then(data =>res.json(data)
    )
})

routes.post('/', function(req, res){
    playlist.create(req.body).then(data => res.json(data))
   
})

// routes.delete('/:id', function(req, res){
//     res.json({'message': 'eliminado', 'id': req.params.id})
// })

routes.post('/:id/likes', function(req, res){
    res.json({'message': 'se likeo la playlist', 'id': req.params.id })
})

routes.patch('/:id', function(req, res){
  playlist.update({
      name: req.body.name
  }, {
      where: {id: req.params.id}
  }).then(data => {res.json(data)})
})

routes.patch('/', function(req, res){
    playlist.create({
        name: req.body.name,
        user_id: 1
    }).then(data => {res.json(data)})
  })

routes.delete('/:id/likes', function(req, res){
    res.status(201).end()
})

routes.delete('/:id', function(req, res){
    playlist.update({
        deleted_at: new Date
    }, {
        where: {id: req.params.id}
    }). then((data => {
        res.json(data)
    }))
})

module.exports = routes