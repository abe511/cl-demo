const express = require('express');
const path = require('path');
const os = require('os');

const app = express();

app.use(express.static('dist'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../../dist/index.html'));
  // res.sendFile(path.join(__dirname, './index.html'));
});

app.get('/api/getUsername', (req, res) =>
  res.send({ username: os.userInfo().username })
);

app.listen(8080, () => console.log('Server is listening on port 8080.'));
