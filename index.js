const fetchAssetsController = require('./controllers/fetchAssetsController');

const express = require('express');
const app = express();
const port = 3000;


app.get('/', (req, res) => {
  res.send('This is Asset Services');
});

app.use('/', fetchAssetsController);


app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
