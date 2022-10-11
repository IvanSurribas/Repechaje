const bodyParser = require('body-parser');
const express = require('express');
const cors = require ("cors");
const app = express();



const getRouter = require('./routes/get');
const postRouter = require('./routes/post');

app.use (cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded( {
    extended:true
}));

app.use('/get', getRouter);
app.use('/post', postRouter)

app.listen(4000, () => {
    console.log("Servidor levantado")
})