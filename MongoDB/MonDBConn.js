const express = require('express');
const mongoose = require('mongoose');
const app = express();

// MongoDB connection URL
const mongoURI = 'mongodb://localhost/database'; // Change 'mydatabase' to your database name

// Function to establish MongoDB connection
async function connectToMongoDB() {
    try {
        await mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true
        });

        // Connection event handlers
        const db = mongoose.connection;
        db.on('error', console.error.bind(console, 'MongoDB connection error:'));
        db.once('open', () => {
            console.log('Connected to MongoDB');
        });

    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
}

// Call the function to establish MongoDB connection
connectToMongoDB();

// Define a simple route
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
