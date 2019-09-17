import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import path from 'path';

import typeDefs from './schemas';
import resolvers from './resolvers';

import models from './models';

// DB config
import './db';

const apollo = new ApolloServer({
  typeDefs,
  resolvers,
  context({ req }) {
    const token = req.headers['x-access-token'] || req.headers.authorization;

    return {
      token,
      models,
    };
  },
  playground: {
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'dark',
      'editor.cursorShape': 'line',
    },
  },
  formatError: error => {
    const message = error.message.replace('Validation error: ', '');

    return {
      ...error,
      message,
    };
  },
});

const app = express();

app.use(express.static(path.join(__dirname, '../../client/build')));

// Serve static assets if in production
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../client', 'build', 'index.html'));
  });
}

apollo.applyMiddleware({ app });

export default app;
