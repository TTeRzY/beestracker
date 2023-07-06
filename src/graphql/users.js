import { gql } from 'graphql-tag';

export const GET_USERS = gql `
    query Users {
        users {
            page
            items {
                _id
                firstName
                lastName
                email
                occupation
                roles
                createdAt
                updatedAt
            }
        }
    }
`

export const DELETE_USER = gql`
    mutation DeleteUser($_id: String!) {
        deleteUser(_id: $_id) {
            _id
        }
    }
`