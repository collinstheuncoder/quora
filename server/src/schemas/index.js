import { gql } from 'apollo-server';

const rootTypes = gql`
  scalar DateTime

  type Query {
    _: Boolean
  }

  type Mutation {
    _: Boolean
  }

  type Subscription {
    _: Boolean
  }
`;

const typeDefs = [rootTypes];

export default typeDefs;
