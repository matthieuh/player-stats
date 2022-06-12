import { gql } from '@apollo/client';

export default gql`
  query getMatches {
    matches {
      id
      players {
        id
        lastname
        firstname
        country {
          picture {
            url
          }
          code
        }
        picture {
          url
        }
      }
      winner {
        id
      }
      startTime
      endTime
    }
  }
`;
