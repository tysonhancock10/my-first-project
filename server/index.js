const express = require('express')
const bodyParser = require('body-parser')
const cr = require('./controller')
const app = express();
app.use(bodyParser.json())


app.get('/api/soccer', cr.getPlayer)
app.post('/api/soccer', cr.addPlayer)
app.put(`/api/soccer/:id`, cr.updatePlayer)
app.delete(`/api/soccer:id`, cr.deletePLayer)

 app.listen(4000, () => console.log('The name is port... port 4000'))