const express = require('express')
const bodyParser = require('body-parser')
const cr = require('./controller')
const app = express();
app.use(bodyParser.json())


app.get('/api/soccer', cr.getPlayer)
app.post('/api/soccer', cr.addPlayer)
app.put(`/api/soccer/:index`, cr.updatePlayer)
app.delete(`/api/soccer:index`, cr.deletePLayer)

 app.listen(4000, () => console.log('The name is port... port 4000'))