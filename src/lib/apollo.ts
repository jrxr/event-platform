import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  // uri: "",
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT;
  cache: new InMemoryCache(),
});