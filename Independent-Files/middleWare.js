const express = require('express');
const requestLoggerMiddleware = require('./requestLoggerMiddleware');

const app = express();

// Add middleware to log incoming requests
app.use(requestLoggerMiddleware);

// Route to handle incoming requests
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
