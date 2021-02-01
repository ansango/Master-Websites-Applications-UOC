const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors());
app.use(bodyParser());
app.get('/', (_, res) => res.send('Hello World!'));

app.use('/api/wine', require('./wines'));

app.listen(3000, () => console.log('App Server listening on port 3000!'));
