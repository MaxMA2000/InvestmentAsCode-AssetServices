

const express = require('express');
const app = express();
const port = 3000;



app.get('/app-name', (req, res) => {
  res.send('This is Asset Services');
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
