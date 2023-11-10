const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post('/writeToFile', (req, res) => {
    const { input } = req.body;

    // Append the input to a text file (example.txt)
    fs.appendFile('example.txt', input + '\n', (err) => {
        if (err) {
            console.error('Error writing to file:', err);
            res.status(500).json({ success: false, error: 'Error writing to file' });
        } else {
            console.log('Input written to file:', input);
            res.json({ success: true });
        }
    });
});

app.use(express.static('public'));

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
});

