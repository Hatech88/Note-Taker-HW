const express = require ('express');
const htmlRoutes = require('./routes/htmlRoutes');


// initialize the app and create a port 
const app = express();
const PORT = process.env.PORT || 3001;


app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static('public'));


// HTML ROUTES
app.use('/', htmlRoutes);


// API ROUTES



// start the server on the port 
app.listen(PORT, () => console.log(`listening to PORT: ${PORT}`));