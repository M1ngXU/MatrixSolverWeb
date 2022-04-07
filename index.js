const express = require('express');

const app = express();

app.all('*', (req, res) => res.sendFile(__dirname + req.path));

app.listen(3000, () => {
  console.log('server started');
});
