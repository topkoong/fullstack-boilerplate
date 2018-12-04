const express = require('express');
const app = express();
const path = require('path');
const morgan = require('morgan');

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({
    extended: false
}));

// Logging middleware
app.use(morgan('dev'));

// Static file-serving middleware
app.use(express.static(path.join(__dirname, '..', 'public')));

// Routes that will be accessed via AJAX should be prepended with
// /api so they are isolated from our GET /* wildcard.
app.use('/api', require('./api'));

app.use((req, res, next) => {
    if (path.extname(req.path).length > 0) {
        res.status(404).end();
    } else {
        next();
    }
})

// Sends our index.html (the "single page" of our SPA)
app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '..', 'client', 'index.html'))
})
  
// Error catching endware
app.use((err, req, res, next) => {
    console.error(err, typeof next)
    console.error(err.stack)
    res.status(err.status || 500).send(err.message || 'Internal server error.')
})
  

module.exports = app;
