const express = require('express');
const authenticationMiddleware = require('./authenticationMiddleware');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.send('Home Page');
});

app.get('/protected', authenticationMiddleware, (req, res) => {
    res.send('Protected Route');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
