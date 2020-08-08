const express = require('express')
const consign = require('consign')

const db = require('./config/db')

const app = express()

consign()
    .then('./config/passport.js')
    .then('./config/middlewares.js')
    .then('./api')
    .then('./config/routes.js')
    .into(app)

app.db = db

app.listen(3000, ()=>{
    console.log('Executando servidor...')
})