const express = require('express');
const app = express();
const CACHE_EXPIRATION_TIME = 30000; // 30 seconds
const cache = {};
function cacheMiddleware(req, res, next) {
    const url = req.originalUrl; // Get the request URL

    // Check if the URL is cached and not expired
    if (cache[url] && cache[url].timestamp + CACHE_EXPIRATION_TIME > Date.now()) {
        console.log(`Cache hit for ${url}`);
        res.send(cache[url].data); // Send cached response
    } else {
        console.log(`Cache miss for ${url}`);
        // Define a method to cache the response
        res.cacheResponse = (data) => {
            cache[url] = {
                timestamp: Date.now(),
                data: data
            };
        };
        next();
    }
}
app.get('/example', cacheMiddleware, (req, res) => {
    setTimeout(() => {
        const responseData = { message: 'Response from server' };
        res.cacheResponse(responseData); // Cache the response
        res.json(responseData);
    }, 1000);
});
setTimeout(() => {
    // This request will trigger a cache miss
    app.get('/example', cacheMiddleware, (req, res) => {
        const responseData = { message: 'Response from server (cache expired)' };
        res.cacheResponse(responseData); // Cache the response
        res.json(responseData);
    });
}, CACHE_EXPIRATION_TIME + 1000); // Wait for cache expiration time + 1 second
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
