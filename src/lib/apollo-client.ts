import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client";

const client = new ApolloClient({
  link: new HttpLink({
    uri: process.env.NEXT_PUBLIC_WORDPRESS_API_URL || "http://turismo.local/graphql",
    headers: {
      "X-WP-GraphQL-Token": process.env.NEXT_PUBLIC_GRAPHQL_TOKEN || "",
    },
  }),
  cache: new InMemoryCache(),
});

export default client;
