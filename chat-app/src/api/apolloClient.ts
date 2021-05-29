import { ApolloClient, InMemoryCache } from "@apollo/client";

const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  credentials: "include",
  uri: `${process.env.API_GATEWAY_URI}/graphql`,
});

export default apolloClient;
