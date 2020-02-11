//npm i axios express massive express-session react-router-dom gradient-string bcryptjs redux
require('dotenv').config()
const express = require('express'),
      massive = require('massive'),
      {SERVER_PORT, CONNECTION_STRING,SESSION_SECRET} = process.env,
      c = require('./controller'),
    //   session = require('express-session'),
      app = express();

app.use(express.json())
app.use(express.static( `${__dirname}/../build` ));

// app.use(session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: {maxAge: 1000 * 60 * 60 * 24}
// }))



massive(CONNECTION_STRING).then(db => {
    app.set('db', db)
    console.log('db connected')
})

//ENDPOINTS

app.post('/api/product/', c.addProduct)
app.get('/api/product/',c.requestMW, c.getProduct)
app.put('/api/product/', c.editProduct)
app.delete('/api/product/', c.deleteProduct)

const port = SERVER_PORT 
app.listen(port, () => console.log(`blazin on port ${port}`))

