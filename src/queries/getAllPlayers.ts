import { gql } from '@apollo/client';

export default gql`
  query getAllPlayers {
    players {
      id
      firstname
      lastname
      shortname
      sex
      country {
        picture {
          url
        }
        code
      }
      picture {
        url
      }
      stats {
        rank
        points
        weight
        height
        age
      }
    }
  }
`;
