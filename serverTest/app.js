const express = require('express');

const app = express();

app.get('/', (req, res) => {
    console.log('Hello MFs');
    res.send('Hello world from express!!');
});

app.listen(3000);