const express = require('express');
const path = require('path');

const app = express();

app.use(express.static(path.resolve(__dirname, '../public')));
app.use('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../public/index.html'));
});
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`App listening on PORT: ${PORT}`);
});
