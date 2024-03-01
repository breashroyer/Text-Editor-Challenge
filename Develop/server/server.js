const express = require('express');
const app = express();
const PORT = process.env.PORT || 8080;

// Serve static files from the ../client/dist directory
app.use(express.static('../client/dist'));

// Parse URL-encoded and JSON request bodies
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Require and configure routes for HTML files
require('./routes/htmlRoutes')(app);

// Start the server
app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
