const express = require('express');
const app = express();

app.get('/', (req, res) => {
    console.log('User hit resource');
    res.status(200).send('Home page found');
});

app.get('/about', (req, res) => {
    res.status(200).send('About page found');
}); // <-- Added this closing parenthesis

app.get('*', (req, res) => {
    res.status(404).send('Resource not found');
});

app.listen(5000, () => {
    console.log('Listening on http://localhost:5000');
});
