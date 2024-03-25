const express = require('express');
const app = express();
const api=require('./routes/api');
const PORT = process.env.PORT || 3000;
const {authorize}= require('./middlewares/middleware')

const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();


const inventoryDataPath = path.join(__dirname, '.', 'models','inventory.json');

const staffDataPath = path.join(__dirname, '.', 'models','staff.json');
const staffData=JSON.parse(fs.readFileSync(staffDataPath));

app.use(express.json());
app.get('/', (req, res) => {
    res.send('Server created!');
  });

app.use("/",api);

const SECRET_TOKEN = process.env.SECRET_TOKEN || 'TestAuth';


app.post('/login', (req, res) => {
  const { username, password } = req.body;

  
  const user = staffData.find((user) => user.username === username && user.password === password);

  if (!user) {
    return res.status(401).json({ message: 'Invalid username or password' });
  }

  
  const token = jwt.sign({ username: username }, SECRET_TOKEN);

  res.json({ token });
});




  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });