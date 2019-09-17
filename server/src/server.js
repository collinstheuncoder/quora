import https from 'https';
import fs from 'fs';
import path from 'path';

import app from './app';

import config from './config';

const { port } = config;

const httpsOptions = {
  key: fs.readFileSync(path.join(__dirname, './security/key.pem')),
  cert: fs.readFileSync(path.join(__dirname, './security/cert.pem')),
};

https.createServer(httpsOptions, app).listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
