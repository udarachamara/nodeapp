/*
* Main Programme
*
* Udara Chamara Herath
* Associate Software Engineer
* 2020-06-24
*
* */

// import libraries
const express = require('express')
const userRoutes = require('./routes/user_routes')
const swaggerUi = require('swagger-ui-express')
const yaml = require('yamljs')
const swaggerDocument = yaml.load('./swagger.yaml');

// Initialize Application
const app = express();

// Application Configuration
app.use(express.static('public'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Routes for Application
app.get('/', function (req, res) {
    res.send('Hello World....!');
})

app.use('/user', userRoutes);

// Starting Application
const server = app.listen(3000, function () {
    const host = server.address().address
    const port = server.address().port

    console.log("App listening at ", host, port)
})

