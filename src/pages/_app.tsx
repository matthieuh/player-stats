import type { AppProps } from 'next/app';
import { ApolloProvider } from '@apollo/client';

import apolloClient from 'lib/apollo';

import 'styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Component {...pageProps} />
    </ApolloProvider>
  );
}

export default MyApp;
