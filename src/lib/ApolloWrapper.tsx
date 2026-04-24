'use client';

import { ApolloProvider } from "@apollo/client/react";
import client from "@/lib/apollo-client";

export const ApolloWrapper = ({ children }) => {
  return <ApolloProvider client={client}>{children}</ApolloProvider>;
};
