const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const { Profile } = require('./models');

app.use(bodyParser.json());




app.post('/profiles', async (req, res) => {
  try {
    const profile = await Profile.create(req.body);
    res.status(201).json(profile);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
  });
