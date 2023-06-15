import { ApolloClient, InMemoryCache } from '@apollo/client';
import constants from '../constants'
import Cookies from "js-cookie";

const token = Cookies.get('authToken')
const headers = {}
if (token) {
  headers.Authorization = `Bearer ${token}`
}

export const client = new ApolloClient({
  uri: constants.graphqlUrl,
  cache: new InMemoryCache(),
  headers
});