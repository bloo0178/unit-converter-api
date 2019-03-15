const express = require('express');
const path = require('path');
const cors = require('cors');

//const ConvertHandler = require('./controllers/convertHandler.js');
const api = require('./routes/api.js');

//const app = express();
const app = express().use("*", cors());

//Points to built react app STATIC
app.use(express.static(path.join(__dirname, 'front-end', 'build')));

//Points to live react app DEV. MUST HAVE IT RUNNING FIRST.
app.get('/dev-build', (req, res) => {
    res.redirect('http://localhost:3000')
});

api(app);

const port = process.env.PORT || 5000;
app.listen(port);

console.log('App is listening on port ' + port);