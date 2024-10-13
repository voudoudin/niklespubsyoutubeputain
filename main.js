const express = require('express')
const app = express()
const port = 3000

const commands = require('./commands.json')
const xdo = 'xdotool key '

const pug = require('pug')

const {exec} = require('child_process')

app.set('view engine', 'pug')

app.get('/exec',(req,res)=>{
    let {url, type, cmd} = req.query
    console.log(type, cmd)
    if(url){
        exec(`firefox ${url}`)
    }
    else if(type==="kb"){
        exec(xdo + cmd)
    }
    else if(type==="app"){
        exec(cmd)
    }
    res.send('ok')
})
app.get('/', (req,res)=>{
    res.render('index.pug',{commands})
})



app.listen(port, ()=>{
    console.log(`running on ${port}`)
})