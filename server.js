/**
 * Created by BenM on 7/31/2017.
 */

const express = require('express');
const path = require('path');
const http = require('http');
const bodyParser = require('body-parser');

// api routes ref
const api = require('./server/routes/api');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// static paths
app.use(express.static(path.join(__dirname, 'dist')));

// set api routes
app.use('/api', api);

// all other routes will come to index.html
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
});


const port = process.env.PORT || '3000';
app.set('port', port);

const server = http.createServer(app);


server.listen(port, () => {console.log(`api is running on localhost:${port}`)});

