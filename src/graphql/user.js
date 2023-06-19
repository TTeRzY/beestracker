import { gql } from 'graphql-tag';

export const LOGIN_MUTATION = gql`
    mutation Login($email: String!, $password: String!) {
        login(email: $email, password: $password)
    }`;

export const CURRENT_USER = gql`
    query CurrentUser {
        currentUser {
            _id
            firstName
            lastName
            email
            occupation
            roles
        }
    }
`
