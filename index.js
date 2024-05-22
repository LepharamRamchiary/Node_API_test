const express = require('express');
const mongoose = require('mongoose');
const productRoute = require('./routes/product.route');
const app = express();
const port = 8000;

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use('/api/products', productRoute);

app.get('/', (req, res) => {
    res.send('Hello from Node API server updated');
});

mongoose.connect("mongodb+srv://lepha123:LephaRam@cluster0.jiz6pi5.mongodb.net/Node-API?retryWrites=true&w=majority&appName=Cluster0", { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log('Connected to database!');
        app.listen(port, () => {
            console.log(`Server is running on port: ${port}`);
        });
    })
    .catch((error) => {
        console.error('Database connection failed:', error.message);
    });
