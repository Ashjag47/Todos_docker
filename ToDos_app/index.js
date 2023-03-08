const express = require('express');
const {tokenValidation} = require('./src/middlewares/authValidator');
const listsRouter = require('./src/routers/lists');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/lists', 
tokenValidation, listsRouter)

const hostname = '127.0.0.1';
const port = 3001;


app.listen(port, () => {
    console.log(`http://${hostname}:${port}`);
});
