import { gql } from 'graphql-tag';

export const APIARIES = gql `
    query Apiaries {
        apiaries {
            page
            items {
                _id
                apiaryId
                apiaryType
                name
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