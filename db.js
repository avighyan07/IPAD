// Import the mongoose library
const mongoose = require('mongoose');

// Define the URI (Uniform Resource Identifier) for the MongoDB database
const uri = "mongodb://localhost:27017";

// Define a function called connecttoMongo
const connecttoMongo = () => {
    // Use mongoose to connect to the MongoDB database using the provided URI
    mongoose.connect(uri);

    // Access the default mongoose connection object
    const db = mongoose.connection;



    mongoose.connect(uri, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    // Set up an event listener for the 'error' event on the database connection
    db.on('error', console.error.bind(console, 'connection error:'));

    // Set up an event listener for the 'open' event on the database connection
    db.once('open', () => {
        // This callback function will be executed once the database connection is open
        console.log("Connected ");
    });
};

// Export the connecttoMongo function to make it accessible in other files
module.exports = connecttoMongo;
