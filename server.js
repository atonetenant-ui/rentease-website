const express = require('express');
const path    = require('path');
const app     = express();

app.use(express.static(path.join(__dirname, 'public')));

// Marketing website
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Rental management app
app.get('/app', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app.html'));
});
app.get('/app/*', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'app.html'));
});

// Health check
app.get('/health', (req, res) => {
  res.json({ status: 'ok', app: 'RentEase', ts: new Date().toISOString() });
});

const PORT = process.env.PORT || 10000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`\n🏠 RentEase live on port ${PORT}`);
  console.log(`   Website : /`);
  console.log(`   App     : /app`);
  console.log(`   Health  : /health\n`);
});
