const express = require('express');
const app = express();
const api=require('./routes/api');
const PORT = process.env.PORT || 3000;
app.get('/', (req, res) => {
    res.send('Server created!');
  });
app.use("/",api);

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });