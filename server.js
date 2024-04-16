const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 3002;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve static files
app.use(express.static(path.join(__dirname, 'public')));

// Serve the form page
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Handle form submission
app.post('/', (req, res) => {
  const { noun, adjective, verb, adverb, pluralNoun } = req.body;

  const madLib = `Once upon a time, a ${adjective} ${noun} decided to ${verb} ${adverb} because they wanted to see the world filled with ${pluralNoun}.`;

  res.send(madLib);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
