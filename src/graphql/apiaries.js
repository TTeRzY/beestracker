import { gql } from 'graphql-tag';

export const GET_APIARIES = gql `
    query Apiaries {
        apiaries {
            page
            items {
                _id
                apiaryId
                apiaryType
                location
                createdAt
                updatedAt
                user {
                    _id
                }
            }
        }
    }
`

export const CREATE_APIARY = gql`
    mutation CreateApiary($apiary: ApiaryInput!) {
        createApiary(apiary: $apiary) {
            _id
            apiaryId
            apiaryType
            location
            user {
                _id
            }
        }
    }
`

export const DELETE_APIARY = gql`
    mutation DeleteApiary($_id: String!) {
        deleteApiary(_id: $_id) {
            _id
        }
    }
`