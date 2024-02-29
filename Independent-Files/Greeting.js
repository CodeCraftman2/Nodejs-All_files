const express = require('express');
const path = require('path');

// Create an Express application
const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'D:\30_days_of_nodejs\Greeting.js')));

// Handles GET requests to "/greet" endpoint
app.get("/greet", (req, res) => {
    const name = req.query.name;

    if (name) {
        res.send(`Hello, ${name}!`);
    } else {
        res.send('Hello, Guest!');
    }
});

app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
});