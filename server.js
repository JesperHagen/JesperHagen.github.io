const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

// In-memory storage for credentials (replace this with a database in a real-world scenario)
const storedCredentials = {
    username: 'your_username',
    password: 'your_password'
};

app.use(bodyParser.json());

app.post('/login', (req, res) => {
    const { username, password } = req.body;

    if (username === storedCredentials.username && password === storedCredentials.password) {
        res.json({ success: true });
    } else {
        res.json({ success: false });
    }
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${80}`);
});
