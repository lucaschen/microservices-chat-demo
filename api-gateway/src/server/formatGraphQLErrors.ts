import { GraphQLError } from "graphql";

const formatGraphQLErrors = (error: GraphQLError) => {
  // @ts-ignore
  const errorDetails = error.originalError?.response?.body;

  try {
    if (errorDetails) return JSON.parse(errorDetails);
  } catch (e) {}

  if (error.message) return error.message;

  return null;
};

export default formatGraphQLErrors;
