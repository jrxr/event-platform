import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri: 'https://api-sa-east-1.graphcms.com/v2/cl4o20hsr068g01xifeo594im/master',
  cache: new InMemoryCache(),
});