import { gql } from 'graphql-tag';


export const DELETE_BEEHIVE = gql`
    mutation DeleteBeehive($_id: String!) {
        deleteBeehive(_id: $_id) {
            _id
        }
    }
`
export const CREATE_BEEHIVE = gql`
    mutation CreateBeehive($beehive: BeeHiveInput!) {
        createBeehive(beehive: $beehive) {
            _id
            beehiveId
            beehiveType
            familyType
            apiary {
                _id
            }
        }
    }
`

export const GET_BEEHIVES = gql `
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
                }
            }
        }
    }
`