// Dependencies
// =============================================================
const compression = require('compression');
const express = require('express');

// Set up the Express App
// =============================================================
const app = express();
const port = process.env.PORT || 8082;

// Using compression npm to improve performance
app.use(compression());

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Routes - may not be needed in the long run.
// =============================================================
require('./Routes/routes-electron')(app);
require('./Routes/routes-leadme')(app);

app.listen(port, () => console.log(`Listening on port ${port}!`));
