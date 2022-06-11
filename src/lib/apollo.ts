import { ApolloClient, InMemoryCache } from '@apollo/client';

if (
  typeof process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT !== 'string' ||
  !process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
) {
  throw new Error('Please provide "NEXT_PUBLIC_GRAPHQL_ENDPOINT" env var.');
}

const apolloClient = new ApolloClient({
  uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT,
  cache: new InMemoryCache(),
});

export default apolloClient;
