const express = require('express');
const app = express();
const api=require('./routes/api');
const cors = require('cors');
const PORT = process.env.PORT || 3030;
const {authorize}= require('./middlewares/middleware')

const fs = require('fs');
const path = require('path');
const jwt = require('jsonwebtoken');
require('dotenv').config();
app.use(cors());

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
  const tokenPayload = {
    username: username,
    role: user.role // Assuming the user object has a 'role' property
  };

  // Sign the token with the user role included in the payload
  const token = jwt.sign(tokenPayload, SECRET_TOKEN);

  res.json({ token });
});




  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });