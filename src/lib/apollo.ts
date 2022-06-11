import fetch from 'cross-fetch';
import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

if (
  typeof process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT !== 'string' ||
  !process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT
) {
  throw new Error('Please provide "NEXT_PUBLIC_GRAPHQL_ENDPOINT" env var.');
}

const apolloClient = new ApolloClient({
  link: new HttpLink({ uri: process.env.NEXT_PUBLIC_GRAPHQL_ENDPOINT, fetch }),
  cache: new InMemoryCache(),
});

export default apolloClient;
