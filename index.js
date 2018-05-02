const express = require('express');
const path = require('path');

const startPort = 8081;
const dirs = ['chat', 'reader', 'tech-blog'];

for (const [i, dir] of dirs.entries()) {
  const app = express();
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache');
    next();
  });

  app.use(express.static(dir + '/'));

  // listen for requests :)
  const listener = app.listen(startPort + i, () => {
    console.log(`${dir} is listening on port ${listener.address().port}`);
  });
}

{
  const app = express();
  app.use((req, res, next) => {
    res.set('Cache-Control', 'no-cache');
    next();
  });

  app.get('/2018/exciting-web-developments/', (req, res) => {
    setTimeout(() => res.sendFile(path.join(__dirname, 'error', 'index.html')), 5000);
  });

  // listen for requests :)
  const listener = app.listen(startPort + dirs.length, () => {
    console.log(`error is listening on port ${listener.address().port}`);
  });
}
