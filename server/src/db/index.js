import mongoose from 'mongoose';

import config from '../config';

const { dbUsername, dbPassword } = config;

const dbUri = `mongodb+srv://${dbUsername}:${dbPassword}@quora-umz9p.gcp.mongodb.net/test?retryWrites=true&w=majority`;

// DB Config
mongoose.Promise = global.Promise;
mongoose
  .connect(dbUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Successful DB connection'))
  .catch(error => console.log(`Connection error: ${error}`));
