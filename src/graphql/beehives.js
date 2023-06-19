import { gql } from 'graphql-tag';

export const BEEHIVES = gql `
    query Beehives {
        beehives {
            page
            items {
                _id
                beehiveId,
                beehiveType
                familyType
                createdAt
                updatedAt
                apiary {
                    _id
                    apiaryId
                    location
                    name
                }
            }
        }
    }
`