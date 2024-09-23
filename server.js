const express = require('express');

const app = express();

app.use(express.static('dist'));

app.listen(8082, () => {
  // eslint-disable-next-line no-console
  console.log('server run success： http://localhost:8082');
});
