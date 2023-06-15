import { CURRENT_USER } from '../graphql/user'
import { useQuery } from 'react-query'
import {client} from "../network/clients_bak.js";

export const useCurrentUser = () => {
  const { data, isLoading, isFetching } = useQuery(
    'currentUser',
    () => {
      return client.request(CURRENT_USER)
    },
    { retry: false },
  )

  return {
    data,
    isLoading,
    isFetching,
  }
}