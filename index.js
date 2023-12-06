// Import the connecttoMongo function from the 'db' file
const connecttoMongo = require('./db');

// Import the express library
const express = require('express');


var cors = require('cors') 

// Call the connecttoMongo function to establish a connection to the MongoDB database
connecttoMongo();

// Create an instance of the express application
const app = express();

// Specify the port on which the server will listen
const port = 3001;

app.use(cors())

// Middleware: Parse incoming JSON requests
app.use(express.json());

// Define a route for the root URL ('/')
app.get('/', (req, res) => {
    // Send a response with the message 'Hello harry' when the root URL is accessed
    res.send('Hello avighyan');
});

// Middleware: Mount the routes defined in the './routes/auth' file under the '/api/auth' path
app.use('/api/auth', require('./routes/auth'));

// Uncomment the following line to mount routes defined in the './routes/notes' file under the '/api/notes' path
// app.use('/api/notes', require('./routes/notes'));

// Start the express server and listen on the specified port
app.listen(port, () => {
    // Log a message to the console when the server is successfully started
    console.log(`Example app listening at http://localhost:${port}`);
});



//So, when you use app.use('/api/auth', require('./routes/auth'));, it effectively says, "Use the routes defined in the './routes/auth' file, and make them accessible under the '/api/auth' path." If, for instance, you have a route in './routes/auth' defined as /login, it would be accessible at the path '/api/auth/login' on your server.