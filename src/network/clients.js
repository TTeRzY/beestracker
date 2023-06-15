import { ApolloClient, createHttpLink, InMemoryCache } from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import Cookies from "js-cookie";
import constants from "../constants.js";

const httpLink = createHttpLink({
    uri: constants.graphqlUrl,
    credentials: 'same-origin'
});

const token = Cookies.get('authToken')

const authLink = setContext((_, { headers }) => {
    // get the authentication token from local storage if it exists
    // return the headers to the context so httpLink can read them
    return {
        headers: {
            ...headers,
            authorization: token ? `Bearer ${token}` : "",
        }
    }
});

export const client = new ApolloClient({
    link: authLink.concat(httpLink),
    cache: new InMemoryCache()
});