"use client";

import { ApolloClient, ApolloLink, HttpLink } from "@apollo/client";
import {
  NextSSRApolloClient,
  ApolloNextAppProvider,
  NextSSRInMemoryCache,
  SSRMultipartLink,
} from "@apollo/experimental-nextjs-app-support/ssr";

const GRAPHQL_ENDPOINT = process.env.NEXT_PUBLIC_WORDPRESS_API_URL;

function makeClient() {
  const httpLink = new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  });

  return new NextSSRApolloClient({
    cache: new NextSSRInMemoryCache(),
    link:
      typeof window === "undefined"
        ? ApolloLink.from([
            // in a SSR environment, if you use multipart features like
            // @defer, you need to decide how to handle these.
            // This strips all interfaces with a `@defer` directive from your queries.
            new SSRMultipartLink({
              stripDefer: true,
            }),
            httpLink,
          ])
        : httpLink,
  });
}

export function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
