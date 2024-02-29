const express = require('express');
const rateLimit = require('express-rate-limit');

const app = express();

// Define the rate limit settings
const limiter = rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // Max 100 requests per IP within the windowMs
    message: 'Too many requests from this IP, please try again later'
});

// Apply the rate limiter middleware to all requests
app.use(limiter);

// Define your routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});

// Start the server
const port = 3000;
app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
});
