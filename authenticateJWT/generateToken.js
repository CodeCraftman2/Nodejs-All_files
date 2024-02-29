const jwt = require('jsonwebtoken');

// Replace 'YOUR_SECRET_KEY' with your actual secret key
const secretKey = 'YOUR_SECRET_KEY';

// User payload (data to be encoded in the token)
const payload = {
    user_id: 123,
    username: 'example_user'
};

// Generate the JWT token
const token = jwt.sign(payload, secretKey, { expiresIn: '1h' });

console.log(token);
