const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');


const app = express();

app.use(cors());

app.get('/', (req, res) => {
  if (req.url === '/') {
fs.readFile(path.join(__dirname, '/public', 'index.html'), 'utf8', (err, data) => {
  if (err) throw err;
  res.send(data);
})
  }
})

app.listen(4000, () => {
  console.log('server runing on port 4000');
})