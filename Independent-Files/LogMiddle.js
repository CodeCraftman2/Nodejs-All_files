const express = require('express');
const app = express();

// Define logging middleware
function loggingMiddleware(req, res, next) {
    // Get current timestamp
    const timestamp = new Date().toISOString();
    // Log detailed information about the incoming request
    console.log(`[${timestamp}] - ${req.method} ${req.url}`);
    console.log('Headers:', req.headers);
    console.log('Body:', req.body);
    // Call next middleware
    next();
}
// Use the logging middleware for all routes
app.use(loggingMiddleware);

// Define routes
app.get('/', (req, res) => {
    res.send('Hello World!');
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
