const express = require('express');
const path = require('path');

/**
 * Express application serving static files from the "public" directory
 * @param {Object} req - Express request object
 * @param {Object} res - Express response object
 */
function staticFileServer(req, res) {
    const app = express();
    const publicDirectoryPath = path.join(__dirname, 'public');

    app.use(express.static(publicDirectoryPath));

    // Serve index.html for root route
    app.get('/', (req, res) => {
        res.sendFile(path.join(publicDirectoryPath, 'index.html'));
    });

    // Serve requested CSS file
    app.get('/*.css', (req, res) => {
        res.sendFile(path.join(publicDirectoryPath, req.url));
    });

    // Serve requested file if it exists
    app.use((req, res, next) => {
        const filePath = path.join(publicDirectoryPath, req.url);
        res.sendFile(filePath, err => {
            if (err) {
                next();
            }
        });
    });

    // Error handling for invalid requests
    app.use((req, res) => {
        res.status(404).send('404 Not Found');
    });

    // Start the server and listen on port 3000
    app.listen(3000, () => {
        console.log('Server is up and running on port 3000');
    });
}

// Example usage:
// staticFileServer();

module.exports = staticFileServer;
