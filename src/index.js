const express = require('express');
const app = express();

// Settings
app.set('port', process.env.PORT || 3000);

// Midelwares
app.use(express.json());

// Routes
app.use(require('./routes/employees'));

// Start the server
app.listen(app.get('port'), () => {
  console.log('srever on port 3000');
})