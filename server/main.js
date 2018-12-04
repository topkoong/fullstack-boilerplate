const PORT = 8080;
const server = require('./app');
const {db} = require('./db');

db.sync()
  .then(() => {
    server.listen(PORT, () => console.log(`

        Listening on port ${PORT}

        http://localhost:${PORT}/

    `))
  })
