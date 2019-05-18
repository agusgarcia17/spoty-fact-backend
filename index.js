const express = require('express')
const app = express()
var bodyParser = require('body-parser')
let playlistRoutes = require('./endpoints/playlist')
let profileRoutes = require('./endpoints/profile')
let albumsRoutes = require('./endpoints/albums')
let usersRoutes = require('./endpoints/users')
let cors = require('cors')


//Middleware
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(cors())

app.use('/playlists', playlistRoutes)
app.use('/me', profileRoutes)
app.use('/albums', albumsRoutes)
app.use('/users', usersRoutes)

app.get('/', function(req, res){
    res.json({
        'playlist': '/playlist',
        'artistas': '/artistas',
        'profile': '/me',
    })
})

app.listen(4000, () =>{
    console.log('inicializado')
})